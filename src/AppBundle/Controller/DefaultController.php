<?php

namespace AppBundle\Controller;

use AppBundle\Form\InvitationType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\BrowserKit\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class DefaultController extends Controller
{
    /**
     * @Route("/admin", name="admin_home")
     */
    public function adminHomeAction()
    {
        return $this->render('AppBundle:Admin:home.html.twig');
    }

    /**
     * @Route("/", name="user_home")
     */
    public function userHomeAction()
    {
        $em = $this->getDoctrine()->getManager();
        $products = $em->getRepository('AppBundle:Part')->findAll();
        $categories = $em->getRepository('AppBundle:PartCategory')->findAll();

        return $this->render('AppBundle:User:home.html.twig', array(
            'products' => $products,
            'categories' => $categories,
        ));
    }

    /**
     * @Route("/json/get-products", name="json-get-products")
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
}
