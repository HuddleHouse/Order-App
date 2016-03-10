<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class CartController extends Controller
{
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
     * @Route("/review-order", name="review_order")
     */
    public function reviewOrderAction()
    {
        $em = $this->getDoctrine()->getManager();
        $products = $em->getRepository('AppBundle:Part')->findAll();
        $categories = $em->getRepository('AppBundle:PartCategory')->findAll();

        return $this->render('AppBundle:User:home.html.twig', array(
            'products' => $products,
            'categories' => $categories,
        ));
    }
}
