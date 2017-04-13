<?php

namespace AppBundle\Controller\Api;

use AppBundle\Entity\CartProduct;
use AppBundle\Entity\CartProductLineNumber;
use AppBundle\Entity\Cart;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class ReviewOrderController extends Controller
{
    /**
     * @Route("/api/load-cart-by-id", name="api_load_cart_by_id")
     */
    public function loadCartByIdAction(Request $request)
    {
        $user = $this->getUser();
        $em = $this->getDoctrine()->getManager();
        $id = $request->request->get('order_id');

        if(!$cart = $em->getRepository('AppBundle:Cart')->find($id)) {
            $cart = new Cart();
            $cart->setUser($user);
            $cart->setOffice($user->getOffice());
            $cart->setDate(date_create(date("Y-m-d H:i:s")));
            $em->persist($cart);
            $em->flush();
        }
        return $this->sumCart($cart);
    }

    /**
     * @Route("/api/add-part", name="api_cart_add_part")
     */
    public function addPartToCart(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $cart = $em->getRepository('AppBundle:Cart')->find($request->request->get('cart'));
        $part = $em->getRepository('AppBundle:Part')->find($request->request->get('part'));

        if(!$product = $em->getRepository('AppBundle:CartProduct')->findOneBy(array('cart' => $cart, 'part' => $part))) {
            $product = new CartProduct();
            $product->setCart($cart);
            $product->setPart($part);

            $lineNumber = new CartProductLineNumber();
            $lineNumber->setCartProduct($product);
            $product->addCartProductLineNumber($lineNumber);
            $em->persist($lineNumber);
            $em->persist($product);
            $em->flush();
        }

        $product->setQuantity($product->getQuantity() + 1);
        $em->persist($product);
        $em->flush();

        $this->addFlash('notice', 'Shipping updated successfully.');

        return $this->sumCart($cart);
    }

    /**
     * @Route("/api/add-unknown", name="api_cart_add_unknown")
     */
    public function addUnknownToCart(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $cart = $em->getRepository('AppBundle:Cart')->find($request->request->get('cart'));

        $product = new CartProduct();

        $product->setCart($cart);
        $product->setPart(null);
        $product->setDescription('');
        $product->setQuantity(1);
        $product->setStockNumber('');
        $product->setCreatedByAdmin(true);

        $lineNumber = new CartProductLineNumber();
        $lineNumber->setCartProduct($product);
        $product->addCartProductLineNumber($lineNumber);
        $em->persist($lineNumber);
        $em->persist($product);
        $em->flush();

        $em->persist($product);
        $em->flush();

        return $this->sumCart($cart);
    }


    /**
     * @Route("/api/update-stock-location", name="update_stock_location")
     */
    public function updateStockLocation(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $product = $request->request->get('cart_product_id');
        $stock_locaton_id = $request->request->get('stock_location_id');
        $stock_location = $em->getRepository('AppBundle:StockLocation')->find($stock_locaton_id);


        $cart_product = $em->getRepository('AppBundle:CartProduct')->find($product['product_id']);
        $cart_product->setStockLocation($stock_location);
        $em->persist($cart_product);
        $em->flush();

        return JsonResponse::create(true);
    }

    /**
     * @Route("/api/update-part-prefix", name="update_part_prefix")
     */
    public function updatePartPrefix(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $prefix = $em->getRepository('AppBundle:PartNumberPrefix')->find($request->request->get('prefix'));
        $item = $em->getRepository('AppBundle:CartProduct')->find($request->request->get('item'));
        $item->setPartNumberPrefix($prefix);
        $em->persist($item);
        $em->flush();

        return JsonResponse::create(true);
    }

    /**
     * @Route("/api/update-line-number-review-order", name="update_line_number_review_order")
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
     * @Route("/api/add-line-number-review-order", name="api_add_line_number_review_order")
     */
    public function addLineNumberAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $product = $em->getRepository('AppBundle:CartProduct')->find($request->request->get('item'));

        $lineNumber = new CartProductLineNumber();
        $lineNumber->setCartProduct($product);

        $product->addCartProductLineNumber($lineNumber);

        $em->persist($lineNumber);
        $em->persist($product);
        $em->flush();

        return $this->sumCart($product->getCart());
    }

    /**
     * @Route("/api/admin-update-shipping", name="admin_update_shipping")
     */
    public function adminUpdateShipping(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $cart_id = $request->request->get('cart_id');
        $ship_id = $request->request->get('ship_id');

        $shippingMehtod = $em->getRepository('AppBundle:ShippingMethod')->find($ship_id);

        $em = $this->getDoctrine()->getManager();

        $cart = $em->getRepository('AppBundle:Cart')->find($cart_id);
        $cart->setShippingMethod($shippingMehtod);

        $em->persist($cart);
        $em->flush();

        $this->addFlash('notice', 'Shipment updated successfully.');

        return JsonResponse::create(true);
    }

    /**
     * @Route("/api/remove-line-number-review-order", name="api_remove_line_number_review_order")
     */
    public function removeLineNumberAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $product = $em->getRepository('AppBundle:CartProduct')->find($request->request->get('item'));

        $lineNumber = $em->getRepository('AppBundle:CartProductLineNumber')
            ->findOneBy(
                array('cartProduct' => $product),
                array('id' => 'DESC')
            );

        if ($lineNumber) {
            $em->remove($lineNumber);
            $em->flush();
        }

        return $this->sumCart($product->getCart());
    }

    /**
     * @Route("/api/update-cart-product", name="update_product")
     */
    public function updateProductAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $data = $request->request->get('data');

        $product = $em->getRepository('AppBundle:CartProduct')->find($data['product_id']);
        $product->setBackOrderQuantity($data['back_order_quantity']);
        $product->setShipQuantity($data['ship_quantity']);
        $product->setBackOrderShipQuantity($data['back_order_ship_quantity']);


        if ($product->isCreatedByAdmin()) {
            $product->setDescription($data['description']);
            $product->setStockNumber($data['stock_number']);
            $product->setReturnRequired('true' == $data['require_return'] ? true : false);
        }

        $product->setNote($data['note']);

        $em->persist($product);
        $em->flush();
        $cartid = $request->request->get('order_id');

        $cart = $em->getRepository('AppBundle:Cart')->find($cartid);

        $count = 0;
        foreach ($cart->getCartProducts() as $product)
            if($product->getBackOrderShipQuantity() != $product->getBackOrderQuantity())
                $count++;

        if ($count != 0)
            $cart->setApproved(0);
        else
            $cart->setApproved(1);

        $em->persist($cart);
        $em->flush();

        return $this->sumCart($cart);
    }

    /**
     * @Route("/api/delete-cart-item", name="delete_cart_item")
     */
    public function deleteCartItemAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $cartItem = $em->getRepository('AppBundle:CartProduct')->find($request->request->get('item'));
        $cart = $cartItem->getCart();
        $em->remove($cartItem);
        $em->flush();

        return $this->sumCart($cart);
    }

    /**
     * @Route("/api/update-quantity", name="update_quantity")
     */
    public function updateQuantityAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $data = $request->request->get('data');

        $product = $em->getRepository('AppBundle:CartProduct')->find($data['product_id']);
        if($data['quantity'] != '')
            $product->setQuantity($data['quantity']);
        else
            $product->setQuantity(0);

        $em->persist($product);
        $em->flush();
        $cartid = $request->request->get('order_id');

        $cart = $em->getRepository('AppBundle:Cart')->find($cartid);
        return $this->sumCart($cart);
    }


    /**
     * @Route("/api/admin/update-return-items-quantity", name="api_admin_update_return_item_quantity")
     */
    public function updateAdminReturnItemsQuantityAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $id = $request->request->get('cart_product_id');
        $returned_items_quantity = $request->request->get('returned_items_quantity');

        $product = $em->getRepository('AppBundle:CartProduct')->find($id);
        $product->setReturnedItemsQuantity($product->getReturnedItemsQuantity() + $returned_items_quantity);
        $product->setReturnReceivedDate(date_create(date("Y-m-d H:i:s")));

        $em->persist($product);
        $em->flush();

        return JsonResponse::create(true);
    }


    /**
     * @Route("/api/update-return-items-ship-quantity", name="api_update_return_item_ship_quantity")
     */
    public function updateReturnItemsShipQuantityAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $id = $request->request->get('cart_product_id');
        $returned_items_ship_quantity = $request->request->get('returned_items_quantity');

        $product = $em->getRepository('AppBundle:CartProduct')->find($id);
        $product->setReturnedItemsShippedQuantity($product->getReturnedItemsShippedQuantity() + $returned_items_ship_quantity);
        $product->setReturnShipDate(date_create(date("Y-m-d H:i:s")));
        $this->addFlash('notice', 'Shipment Received.');

        $em->persist($product);
        $em->flush();

        return JsonResponse::create(true);
    }

    public function sumCart($cart)
    {
        $shipped = $requested = $backOrders = 0;
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
                'prefix' => ($product->getPartNumberPrefix() != null ? (string)$product->getPartNumberPrefix()->getId() : '0'),
                'require_return' => $product->isReturnRequired(),
                'quantity' => $product->getQuantity(),
                'ship_quantity' => $product->getShipQuantity(),
                'back_order_quantity' => $product->getBackOrderQuantity(),
                'back_order_ship_quantity' => $product->getBackOrderShipQuantity(),
                'line_numbers' => $line_numbers,
                'product_id' => $product->getId(),
                'note' => $product->getNote(),
                'isAddedByAdmin' => $product->isCreatedByAdmin(),
                'stock_location' => ($product->getStockLocation() != null ? (string)$product->getStockLocation()->getId() : '0'),

            );

            $shipped += $product->getShipQuantity();
            $requested += $product->getQuantity();
            $backOrders += $product->getBackOrderQuantity();
        }

        return JsonResponse::create(array(
            'cart' => $json_cart,
            'shipped' => $shipped,
            'requested' => $requested,
            'backOrders' => $backOrders,
            'numItems' => $requested,
            'requester_first_name' => $cart->getRequesterFirstName(),
            'requester_last_name' => $cart->getRequesterLastName(),
            'shipping' => ($cart->getShippingMethod() != null ? (string)$cart->getShippingMethod()->getId() : '0'),
        ));
    }
}