<?php

namespace AppBundle\Controller\Api;

use AppBundle\Entity\CartProduct;
use AppBundle\Entity\CartProductLineNumber;
use AppBundle\Entity\Cart;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;


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
        foreach($products as $item) {
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
    public function loadCartAction()
    {
        $user = $this->getUser();
        $em = $this->getDoctrine()->getManager();

        if(!$cart = $em->getRepository('AppBundle:Cart')->findOneBy(array('user' => $user, 'submitted' => 0))) {
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
     * @Route("/api/add-cart-item", name="api_add_item")
     */
    public function addCartItemAction(Request $request)
    {
        $user = $this->getUser();
        $id = $request->request->get('product_id');
        $em = $this->getDoctrine()->getManager();

        if(!$cart = $em->getRepository('AppBundle:Cart')->findOneBy(array('user' => $user, 'submitted' => 0))) {
            $cart = new Cart();
            $cart->setUser($user);
            $cart->setOffice($user->getOffice());
            $cart->setDate(date_create(date("Y-m-d H:i:s")));
            $em->persist($cart);
            $em->flush();
        }
        $part = $em->getRepository('AppBundle:Part')->find($id);
        if(!$product = $em->getRepository('AppBundle:CartProduct')->findOneBy(array('cart' => $cart, 'part' => $part))) {
            $product = new CartProduct();
            $product->setCart($cart);
            $product->setPart($part);
            $product->setStockLocation("ADD THIS");

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

        return $this->sumCart($cart);
    }

    /**
     * @Route("/api/add-cart-unknown-item", name="api_add_unknown_item")
     */
    public function addCartUnknownItemAction(Request $request)
    {
        $user = $this->getUser();
        $description = $request->request->get('description');
        $em = $this->getDoctrine()->getManager();

        if(!$cart = $em->getRepository('AppBundle:Cart')->findOneBy(array('user' => $user, 'submitted' => 0))) {
            $cart = new Cart();
            $cart->setUser($user);
            $cart->setOffice($user->getOffice());
            $cart->setDate(date_create(date("Y-m-d H:i:s")));
            $em->persist($cart);
            $em->flush();
        }

        $part = $em->getRepository('AppBundle:Part')->findOneBy(array('stockNumber' => '999-999-99999'));
        if(!$product = $em->getRepository('AppBundle:CartProduct')->findOneBy(array('cart' => $cart, 'part' => $part))) {
            $product = new CartProduct();
            $product->setCart($cart);
            $product->setPart($part);
            $product->setStockLocation("ADD THIS");
            $product->setDescription($description);

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

        return $this->sumCart($cart);
    }

    /**
     * @Route("/api/remove-cart-item", name="api_remove_item")
     */
    public function removeCartItemAction(Request $request)
    {
        $user = $this->getUser();
        $id = $request->request->get('product_id');
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

        return $this->sumCart($cart);
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
     * @Route("/api/update-notes", name="api_update_notes")
     */
    public function updateNotesAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $data = $request->request->get('note');
        $id = $request->request->get('cart_id');

        $cart = $em->getRepository('AppBundle:Cart')->find($id);
        $cart->setNote($data);
        $em->persist($cart);
        $em->flush();

        return JsonResponse::create(true);
    }

    /**
     * @Route("/api/update-requester-name", name="api_update_requester_name")
     */
    public function updateRequesterName(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $data = $request->request->get('note');
        $id = $request->request->get('cart_id');

        $cart = $em->getRepository('AppBundle:Cart')->find($id);
        $cart->setRequesterName($data);
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
        $user = $this->getUser();
        $id = $request->request->get('product_id');

        $cart = $em->getRepository('AppBundle:Cart')->findOneBy(array('user' => $user, 'submitted' => 0));
        $part = $em->getRepository('AppBundle:Part')->find($id);
        $product = $em->getRepository('AppBundle:CartProduct')->findOneBy(array('cart' => $cart, 'part' => $part));

        $lineNumber = new CartProductLineNumber();
        $lineNumber->setCartProduct($product);

        $product->addCartProductLineNumber($lineNumber);

        $em->persist($lineNumber);
        $em->persist($product);
        $em->flush();

        return $this->sumCart($cart);
    }

    /**
     * @Route("/api/remove-line-number", name="api_remove_line_number")
     */
    public function removeLineNumberAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        $id = $request->request->get('product_id');

        $cart = $em->getRepository('AppBundle:Cart')->findOneBy(array('user' => $user, 'submitted' => 0));
        $part = $em->getRepository('AppBundle:Part')->find($id);
        $product = $em->getRepository('AppBundle:CartProduct')->findOneBy(array('cart' => $cart, 'part' => $part));
        $lineNumber = $em->getRepository('AppBundle:CartProductLineNumber')
            ->findOneBy(
                array('cartProduct' => $product),
                array('id' => 'DESC')
            );

        if($lineNumber) {
            $em->remove($lineNumber);
            $em->flush();
        }

        return $this->sumCart($cart);
    }

    public function sumCart($cart)
    {
        $count = 0;
        $json_cart = array();
        foreach($cart->getCartProducts() as $product) {
            $line_numbers = array();
            foreach($product->getCartProductLineNumbers() as $lineNumber) {
                $line_numbers[] = array(
                    'id' => $lineNumber->getId(),
                    'cart_product' => $lineNumber->getCartProduct()->getId(),
                    'line_number' => $lineNumber->getLineNumber()
                );
            }
            $json_cart[] = array(
                'stock_number' => $product->getPart()->getStockNumber(),
                'description' => ($product->getPart()->getStockNumber() == '999-999-99999' ? $product->getDescription() : $product->getPart()->getDescription()),
                'id' => $product->getPart()->getId(),
                'require_return' => $product->getPart()->getRequireReturn(),
                'category' => $product->getPart()->getPartCategory()->getName(),
                'part_name_cononical' => $product->getPart()->getPartCategory()->getNameCononical(),
                'quantity' => $product->getQuantity(),
                'line_numbers' => $line_numbers
            );
            $count += $product->getQuantity();
        }
        return JsonResponse::create(array('cart' => $json_cart, 'num_items' => $count, 'cart_notes' => $cart->getNote(), 'requester_name' => $cart->getRequesterName()));
    }
}