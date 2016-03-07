<?php

namespace AppBundle\Controller;

use AppBundle\Form\InvitationType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;



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
            'categories' => $categories
        ));
    }
}
