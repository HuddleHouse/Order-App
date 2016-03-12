<?php
/**
 * Created by PhpStorm.
 * User: work
 * Date: 3/9/16
 * Time: 7:36 PM
 */

namespace AppBundle\Controller\Api;

use AppBundle\Entity\CartProduct;
use AppBundle\Entity\CartProductLineNumber;
use AppBundle\Entity\Cart;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;


class ReviewOrderController extends Controller
{
    /**
     * @Route("/api/load-cart-by-id", name="api-load-cart-by-id")
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
     * @Route("/api/add-cart-item-by-id", name="api-add-item-by-id")
     */
    public function addCartItemByIdAction(Request $request)
    {
        $user = $this->getUser();
        $id = $request->request->get('product_id');
        $em = $this->getDoctrine()->getManager();
        $cartid = $request->request->get('order_id');

        if(!$cart = $em->getRepository('AppBundle:Cart')->find($cartid)) {
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
     * @Route("/api/remove-cart-item-by-id", name="api-remove-item-by-id")
     */
    public function removeCartItemByIdAction(Request $request)
    {
        $user = $this->getUser();
        $id = $request->request->get('product_id');
        $em = $this->getDoctrine()->getManager();
        $cartid = $request->request->get('order_id');

        $cart = $em->getRepository('AppBundle:Cart')->find($cartid);
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
     * @Route("/api/update-line-number", name="update-line-number")
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
     * @Route("/api/add-line-number", name="add-line-number")
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
     * @Route("/api/remove-line-number", name="remove-line-number")
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

    /**
     * @Route("/api/update-ship-quantity", name="update-product")
     */
    public function updateProductAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        $data = $request->request->get('product');

        $product = $em->getRepository('AppBundle:CartProduct')->find($data['product_id']);
        $product->setBackOrderQuantity($data['back_order_quantity']);
        $product->setShipQuantity($data['ship_quantity']);
        $product->setNote($data['note']);

        $em->persist($product);
        $em->flush();
        $cartid = $request->request->get('order_id');

        $cart = $em->getRepository('AppBundle:Cart')->find($cartid);
        return $this->sumCart($cart);
    }

    public function sumCart($cart)
    {
        $shipped = $requested = $backOrders = 0;
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
                'description' => $product->getPart()->getDescription(),
                'id' => $product->getPart()->getId(),
                'require_return' => $product->getPart()->getRequireReturn(),
                'category' => $product->getPart()->getPartCategory()->getName(),
                'part_name_cononical' => $product->getPart()->getPartCategory()->getNameCononical(),
                'quantity' => $product->getQuantity(),
                'ship_quantity' => $product->getShipQuantity(),
                'back_order_quantity' => $product->getBackOrderQuantity(),
                'line_numbers' => $line_numbers,
                'product_id' => $product->getId(),
                'note' => $product->getNote()
            );
            $shipped += $product->getShipQuantity();
            $requested += $product->getQuantity();
            $backOrders += $product->getBackOrderQuantity();
        }
        return JsonResponse::create(array(
            'cart' => $json_cart,
            'shipped' => $shipped,
            'requested' => $requested,
            'backOrders' => $backOrders
        ));
    }
}