<?php
/**
 * Created by PhpStorm.
 * User: work
 * Date: 3/9/16
 * Time: 7:36 PM
 */

namespace AppBundle\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ShoppingCartController extends Controller
{

    /**
     * @Route("/api/get-products", name="api-get-products")
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
                'id' => $item->getId(),
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
     * @Route("/api/load-cart", name="api-load-cart")
     */
    public function loadCartAction()
    {
        $user = $this->getUser();
        $em = $this->getDoctrine()->getManager();

        if(!$cart = $em->getRepository('AppBundle:Cart')->findOneBy(array('user' => $user, 'submitted' => 0))) {
            $cart = new Cart();
            $cart->setUser($user);
            $cart->setOffice($user->getOffice());
            $cart->setDate(date_create(date()));
            $em->persist($cart);
            $em->flush();
        }
        $json_cart = array();
        foreach($cart->getCartProducts() as $product) {
            $json_cart[] = array(
                'stock_number' => $product->getPart()->getStockNumber(),
                'description' => $product->getPart()->getDescription(),
                'id' => $product->getId(),
                'require_return' => $product->getPart()->getRequireReturn(),
                'category' => $product->getPart()->getPartCategory()->getName(),
                'part_name_cononical' => $product->getPart()->getPartCategory()->getNameCononical(),
                'quantity' => 0,
                'line_numbers' => $line_numbers
            );
        }
        return JsonResponse::create($json_cart);
    }

    /**
     * @Route("/api/add-cart-item", name="api-add-item")
     */
    public function addCartItemAction(Request $request)
    {
        $user = $this->getUser();
        $projectJson = $request->request->get('data');
        $em = $this->getDoctrine()->getManager();

        if(!$cart = $em->getRepository('AppBundle:Cart')->findOneBy(array('user' => $user, 'submitted' => 0))) {
            $cart = new Cart();
            $cart->setUser($user);
            $cart->setOffice($user->getOffice());
            $cart->setDate(date_create(date()));
            $em->persist($cart);
            $em->flush();
        }
        $json_cart = array();
        foreach($cart->getCartProducts() as $product) {
            $json_cart[] = array(
                'stock_number' => $product->getPart()->getStockNumber(),
                'description' => $product->getPart()->getDescription(),
                'id' => $product->getId(),
                'require_return' => $product->getPart()->getRequireReturn(),
                'category' => $product->getPart()->getPartCategory()->getName(),
                'part_name_cononical' => $product->getPart()->getPartCategory()->getNameCononical(),
                'quantity' => 0,
                'line_numbers' => $line_numbers
            );
        }
    }
}