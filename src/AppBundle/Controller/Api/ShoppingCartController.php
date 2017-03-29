<?php

namespace AppBundle\Controller\Api;

use AppBundle\Entity\CartProduct;
use AppBundle\Entity\CartProductLineNumber;
use AppBundle\Entity\Cart;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;


class ShoppingCartController extends Controller
{

    /**
     * @Route("/api/get-products", name="api_get_products")
     */
    public function jsonGetProducts()
    {
        $em = $this->getDoctrine()->getManager();
        $products = $em->getRepository('AppBundle:Part')->findAll();
        $line_numbers = array();
        $line_numbers[] = '';

        foreach ($products as $item) {
            $json_products[$item->getId()] = array(
                'stock_number' => $item->getStockNumber(),
                'description' => $item->getDescription(),
                'require_return' => $item->getRequireReturn(),
                'category' => $item->getPartCategory()->getName(),
                'part_name_cononical' => $item->getPartCategory()->getNameCononical(),
                'quantity' => 0,
                'line_numbers' => $line_numbers
            );
        }

        return JsonResponse::create($json_products);
    }

    /**
     * @Route("/api/load-cart", name="api_load_cart")
     */
    public function loadCartAction(Request $request)
    {
        return $this->sumCart();
    }

    /**
     * @Route("/api/set-cart-type", name="api_set_cart_type")
     */
    public function setCartTypeAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $cart = $this->getCurrentCart();
        $option = $request->request->get('option');
        $cart->setType($option);
        if($option == 'colorhead') {
            foreach($cart->getCartProducts() as $key => $product)
                if($product->getPart()->getPartCategory()->getNameCononical() != 'colorhead')
                    $this->removeCartItem($product->getPart()->getId());
        }
        else if($option == 'filters') {
            foreach($cart->getCartProducts() as $key => $product)
                if($product->getPart()->getPartCategory()->getNameCononical() != 'filters')
                    $this->removeCartItem($product->getPart()->getId());
        }
        else if($option == 'order') {
            foreach($cart->getCartProducts() as $key => $product) {
                if($product->getPart()->getPartCategory()->getNameCononical() == 'colorhead')
                    $this->removeCartItem($product->getPart()->getId());
                if($product->getPart()->getPartCategory()->getNameCononical() == 'filters')
                    $this->removeCartItem($product->getPart()->getId());
            }
        }
        $em->persist($cart);
        $em->flush();

        return JsonResponse::create(true);
    }

    public function removeCartItem($product_id)
    {
        $user = $this->getUser();
        $id = $product_id;
        $em = $this->getDoctrine()->getManager();
        $cart = $em->getRepository('AppBundle:Cart')->findOneBy(array('user' => $user, 'submitted' => 0));
        $part = $em->getRepository('AppBundle:Part')->find($id);
        $product = $em->getRepository('AppBundle:CartProduct')->findOneBy(array('cart' => $cart, 'part' => $part));
        if($product->getQuantity() == 1) {
            foreach($product->getCartProductLineNumbers() as $lineNumber)
                $em->remove($lineNumber);
            $em->remove($product);
        }
        else {
            $product->setQuantity($product->getQuantity() - 1);
            $em->persist($product);
        }
        $em->flush();
    }

    /**
     * @Route("/api/admin-change-order-number", name="api_admin_change_order_number")
     */
    public function adminChangeOrderNumberAction(Request $request)
    {
        $cartId = $request->request->get('cart');
        $newLast4Digits = $request->request->get('newNumber');

        if ($newLast4Digits < 1 || $newLast4Digits > 9999) {
            return new Response('Order number should be between 1 and 9999', 400);
        }

        $newLast4Digits = sprintf('%04d', $newLast4Digits);

        $em = $this->getDoctrine()->getManager();

        $cart = $em->getRepository('AppBundle:Cart')->find($cartId);

        $first4Digits = substr($cart->getOrderNumber(), 0, 4);

        $newOrderNumber = $first4Digits . $newLast4Digits;

        $duplicate = $em->getRepository('AppBundle:Cart')->findOneBy([
            'order_number' => $newOrderNumber
        ]);

        if ($duplicate) {
            return new Response('Duplicate order number', 400);
        }

        $cart->setOrderNumber($newOrderNumber);

        $em->persist($cart);
        $em->flush();

        return new Response($newOrderNumber);
    }

    /**
     * @Route("/api/admin/approve/order/{cart}", name="api_admin_cart_approve_order")
     */
    public function adminApproveOrderAction(Cart $cart)
    {
        try {
            $em = $this->getDoctrine()->getManager();
            $cart->setApproved(true);
            $cart->setApprovedBy($this->getUser());
            $cart->setApproveDate(date_create(date("Y-m-d H:i:s")));

            $em->persist($cart);
            $em->flush();
            $this->addFlash('notice', 'Order successfully approved.');
            return JsonResponse::create(true);
        } catch(\Exception $e) {
            $this->addFlash('error', 'Failed to approve the order.' . $e->getMessage());
            return JsonResponse::create(false);
        }
    }

    /**
     * @Route("/api/admin/cart/{cart}/review", name="api_admin_cart_review")
     */
    public function adminCartReviewAction(Cart $cart)
    {
        $cartId = $cart->getId();

        $em = $this->getDoctrine()->getManager();

        $connection = $em->getConnection();
        $statement = $connection->prepare("select sum(cp.quantity) as quantity, sum(cp.back_order_quantity) as bo, sum(cp.ship_quantity) as ship
	from cart_products cp  
	where cp.cart_id = :id group by cp.id");
        $statement->bindValue('id', $cartId);
        $statement->execute();
        $total = $statement->fetchAll();

        foreach ($total as $tot) {
            if (($tot['bo'] + $tot['ship']) != $tot['quantity']) {
                $this->addFlash('error', 'Shipping Quantity and Back Order Quantity must equal the total items requested.');

                return JsonResponse::create(false);
            }
        }

        if (!$cart->getApproved()) {
            try {
                //only send the email
                $connection = $em->getConnection();
                $statement = $connection->prepare("select * from office_email where office_id = :id");
                $statement->bindValue('id', $cart->getOffice()->getId());

                $statement->execute();
                $data = $statement->fetchAll();

                foreach ($data as $email) {
                    $from = 'utus-orders@gmail.com';
                    $to = $email['email'];

                    $email_service = $this->get('email_service');
                    $email_service->sendEmail(array(
                            'subject' => $cart->getOffice()->getName() . " Order # " . $cart->getOrderNumber() . " has been fulfilled.",
                            'from' => $from,
                            'to' => $to,
                            'body' => $this->renderView("AppBundle:Email:order_approved_notification.html.twig",
                                array(
                                    'cart' => $cart
                                )
                            )
                        )
                    );
                }

                $cart->setApproved(true);
                $cart->setApprovedBy($this->getUser());
                $cart->setApproveDate(date_create(date("Y-m-d H:i:s")));
                $em->persist($cart);
                $em->flush();

                // Check to see if there are backorders and move them into their own order if there are
                $connection = $em->getConnection();
                $statement = $connection->prepare("select sum(p.back_order_quantity) bo_quantity
	from cart c
		left join cart_products p
			on p.cart_id = c.id
		left join users u
			on c.user_id = u.id
		left join offices o
			on c.office_id = o.id
	where c.approved = 1
	AND c.submitted = 1
	AND p.back_order_quantity > p.back_order_ship_quantity
	and c.id = :id
	group by c.id");
                $statement->bindValue('id', $cart->getId());

                $statement->execute();
                $bo_quan = $statement->fetch();

                if($bo_quan['bo_quantity'] > 0) {
                    $bo_cart = new Cart();
                    $bo_cart->setUser($this->getUser());
                    $bo_cart->setOffice($this->getUser()->getOffice());
                    $bo_cart->setDate($cart->getDate());
                    $bo_cart->setSubmitDate($cart->getSubmitDate());
                    $bo_cart->setOrderNumber($cart->getOrderNumber() . "-B");
                    $bo_cart->setSubmitted(true);
                    $bo_cart->setOffice($cart->getOffice());
                    $bo_cart->setUser($cart->getUser());
                    $bo_cart->setRequesterFirstName($cart->getRequesterFirstName());
                    $bo_cart->setRequesterLastName($cart->getRequesterLastName());
                    $bo_cart->setType($cart->getType());
                    $bo_cart->setShippingMethod($cart->getShippingMethod());
                    $em->persist($bo_cart);

                    foreach($cart->getCartProducts() as $product) {
                        if($product->getBackOrderQuantity() > 0) {
                            $product->setStockNumber($product->getPart()->getStockNumber() . '-B');
                            $cart->removeCartProduct($product);
                            $product->setCart($bo_cart);
                            $bo_cart->addCartProduct($product);
                            $em->persist($product);
                            $em->persist($bo_cart);
                        }
                    }
                    $em->flush();
                    $this->addFlash('notice', "Order # " . $bo_cart->getOrderNumber() . " containing items on backorder was created.");
                }

                $em->persist($cart);
                $em->flush();

                $this->addFlash('notice', "Order Approved Successfully.");
                return JsonResponse::create(true);
            } catch (\Exception $e) {
                $this->addFlash('error', 'Success email failed to send: ' . $e->getMessage());
                return JsonResponse::create(true);
            }
        }
    }

    /**
     * @Route("/api/review-order-validation", name="api_review_order_validation")
     */
    public function reviewOrderValidationAction()
    {
        $em = $this->getDoctrine()->getManager();

        $cart = $this->getCurrentCart();

        $connection = $em->getConnection();
        $statement = $connection->prepare("select count(l.id) as total
	from cart_product_line_numbers l
		left join cart_products cp  
			on l.cart_product_id = cp.id
		left join cart c
			on cp.cart_id = c.id
	where (l.line_number IS NULL OR l.line_number LIKE '') 
	and c.id = :id");
        $statement->bindValue('id', $cart->getId());
        $statement->execute();
        $line_numbers = $statement->fetch();

        $connection = $em->getConnection();
        $statement = $connection->prepare("select c.shipping_method_id
	from cart c
	where c.id = :id");
        $statement->bindValue('id', $cart->getId());
        $statement->execute();
        $shipping = $statement->fetch();

        if ($shipping['shipping_method_id'] == NULL || $line_numbers['total'] != '0') {
            if ($shipping['shipping_method_id'] == NULL)
                $this->addFlash('error', 'Please select a shipping method.');
            if ($line_numbers['total'] != '0')
                $this->addFlash('error', 'Line number cannot be blank.');

            return JsonResponse::create(false);
        } else {
            return JsonResponse::create(true);
        }

    }

    /**
     * @Route("/api/add-cart-item", name="api_add_item")
     */
    public function addCartItemAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $cart = $this->getCurrentCart();

        $part = $em->getRepository('AppBundle:Part')->find($request->request->get('part'));

        if(!$product = $em->getRepository('AppBundle:CartProduct')->findOneBy(array('cart' => $cart, 'part' => $part))) {
            $count = 0;
            foreach($cart->getCartProducts() as $product)
                $count++;

            if($count == 0 || $cart->getType() != 'colorhead') {
                $product = new CartProduct();

                $product->setCart($cart);
                $product->setPart($part);

                $lineNumber = new CartProductLineNumber();
                $lineNumber->setCartProduct($product);
                $product->addCartProductLineNumber($lineNumber);
                $em->persist($lineNumber);

                //always increment a new item
                if($cart->getType() == 'filters')
                    $product->setQuantity($product->getQuantity() + 12);
                else
                    $product->setQuantity($product->getQuantity() + 1);

                $em->persist($product);
                $cart->addCartProduct($product);
                $em->persist($cart);
            }
        }
        else {
            // Can only have one Colorhead in an order
            if($cart->getType() != 'colorhead' && $cart->getType() != 'filters') {
                $product->setQuantity($product->getQuantity() + 1);
                $em->persist($product);
            }
            else if($cart->getType() == 'filters') {
                if($product->getQuantity() != 48)
                    $product->setQuantity($product->getQuantity() + 12);
            }
        }

        $em->flush();

        return $this->sumCart();
    }

    /**
     * @Route("/api/add-cart-unknown-item", name="api_add_unknown_item")
     */
    public function addCartUnknownItemAction(Request $request)
    {
        $description = $request->request->get('description');
        $em = $this->getDoctrine()->getManager();

        $cart = $this->getCurrentCart();

        $product = new CartProduct();
        $product->setCart($cart);
        $product->setPart(null);
        $product->setDescription($description);
        $product->setQuantity(1);

        $lineNumber = new CartProductLineNumber();
        $lineNumber->setCartProduct($product);
        $product->addCartProductLineNumber($lineNumber);
        $em->persist($lineNumber);
        $em->persist($product);
        $em->flush();

        $em->persist($product);
        $em->persist($cart);
        $em->flush();

        return $this->sumCart();
    }

    /**
     * @Route("/api/remove-cart-item", name="api_remove_item")
     */
    public function removeCartItemAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $product = $em->getRepository('AppBundle:CartProduct')->find($request->request->get('product_id'));

        if ($product->getQuantity() == 1) {
            foreach ($product->getCartProductLineNumbers() as $lineNumber)
                $em->remove($lineNumber);
            $em->remove($product);
        } else {
            $product->setQuantity($product->getQuantity() - 1);
            $em->persist($product);
        }

        $em->flush();

        return $this->sumCart();
    }

    /**
     * @Route("/api/update-line-number", name="update_line_number")
     */
    public function updateLineNumberAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $data = $request->request->get('line_number');
        $lineNumber = $em->getRepository('AppBundle:CartProductLineNumber')->find($data['id']);
        $lineNumber->setLineNumber($data['line_number']);
        $em->persist($lineNumber);
        $em->flush();

        return JsonResponse::create(true);
    }

    /**
     * @Route("/api/update-shipping", name="update_shipping")
     */
    public function updateShipping(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $data = $request->request->get('line_number');
        $shippingMehtod = $em->getRepository('AppBundle:ShippingMethod')->find($data);
        $em = $this->getDoctrine()->getManager();

        $cart = $this->getCurrentCart();
        $cart->setShippingMethod($shippingMehtod);

        $em->persist($cart);
        $em->flush();

        return JsonResponse::create(true);
    }

    /**
     * @Route("/api/add-line-number", name="api_add_line_number")
     */
    public function addLineNumberAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $product = $em->getRepository('AppBundle:CartProduct')->find($request->request->get('product_id'));

        $lineNumber = new CartProductLineNumber();
        $lineNumber->setCartProduct($product);

        $product->addCartProductLineNumber($lineNumber);

        $em->persist($lineNumber);
        $em->persist($product);
        $em->flush();

        return $this->sumCart();
    }

    /**
     * @Route("/api/remove-line-number", name="api_remove_line_number")
     */
    public function removeLineNumberAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $product = $em->getRepository('AppBundle:CartProduct')->find($request->request->get('product_id'));

        $lineNumber = $em->getRepository('AppBundle:CartProductLineNumber')
            ->findOneBy(
                array('cartProduct' => $product),
                array('id' => 'DESC')
            );

        if ($lineNumber) {
            $em->remove($lineNumber);
            $em->flush();
        }

        return $this->sumCart();
    }

    /**
     * @Route("/api/q-up/{id}", name="api_up_quantity")
     * @ParamConverter("product", class="AppBundle:CartProduct")
     */
    public function upQuantityAction(CartProduct $product)
    {
        if($product->getPart()->getPartCategory()->getNameCononical() == 'filters') {
            if($product->getQuantity() != 48)
                $product->setQuantity($product->getQuantity() + 12);
        }
        else
            $product->setQuantity($product->getQuantity() + 1);

        $em = $this->getDoctrine()->getManager();
        $em->persist($product);
        $em->flush();

        return $this->sumCart();
    }

    /**
     * @Route("/api/q-down/{id}", name="api_down_quantity")
     */
    public function downQuantityAction(CartProduct $product)
    {
        $em = $this->getDoctrine()->getManager();

        if($product->getPart()->getPartCategory()->getNameCononical() == 'filters') {
            if($product->getQuantity() != 12) {
                $product->setQuantity($product->getQuantity() - 12);
                $em->persist($product);
            }
            else {
                foreach($product->getCartProductLineNumbers() as $lineNumber)
                    $em->remove($lineNumber);
                $em->remove($product);
            }
        }
        else {
            if($product->getQuantity() <= 1) {
                foreach($product->getCartProductLineNumbers() as $lineNumber)
                    $em->remove($lineNumber);
                $em->remove($product);
            }
            else {
                $product->setQuantity($product->getQuantity() - 1);
                $em->persist($product);
            }
        }

        $em->flush();

        return $this->sumCart();
    }

    private function sumCart(Cart $cart = null)
    {
        $cart = $cart ?: $this->getCurrentCart();

        $count = 0;
        $json_cart = array();

        foreach ($cart->getCartProducts() as $product) {
            /** @var CartProduct $product */

            $line_numbers = array();

            foreach ($product->getCartProductLineNumbers() as $lineNumber) {
                $line_numbers[] = array(
                    'id' => $lineNumber->getId(),
                    'cart_product' => $lineNumber->getCartProduct()->getId(),
                    'line_number' => $lineNumber->getLineNumber()
                );
            }

            $json_cart[] = array(
                'stock_number' => $product->getStockNumber(),
                'description' => $product->getDescription(),
                'id' => $product->getId(),
                'require_return' => $product->isReturnRequired(),
                'quantity' => $product->getQuantity(),
                'line_numbers' => $line_numbers
            );

            $count += $product->getQuantity();
        }

        return JsonResponse::create(
            array(
                'cart' => $json_cart,
                'num_items' => $count,
                'cart_notes' => $cart->getNote(),
                'requester_name' => $cart->getRequesterFirstName() . " " . $cart->getRequesterLastName(),
                'requester_first_name' => ($cart->getRequesterFirstName() != null ? $cart->getRequesterFirstName() : ''),
                'requester_last_name' => ($cart->getRequesterLastName() != null ? $cart->getRequesterLastName() : ''),
                'shipping' => ($cart->getShippingMethod() != null ? (string)$cart->getShippingMethod()->getId() : '0'),
            ));
    }

    /**
     * @return Cart
     */
    private function getCurrentCart()
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();

        if (!$cart = $em->getRepository('AppBundle:Cart')->findOneBy(['user' => $user, 'submitted' => 0])) {
            $cart = new Cart();
            $cart->setUser($user);
            $cart->setOffice($user->getOffice());
            $cart->setDate(date_create(date("Y-m-d H:i:s")));
            $em->persist($cart);
            $em->flush();
        }

        return $cart;
    }
}