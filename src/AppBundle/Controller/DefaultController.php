<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Invitation;
use AppBundle\Form\DataTransformer\InvitationToCodeTransformer;
use AppBundle\Form\InvitationFormType;
use AppBundle\Form\InvitationType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use FOS\UserBundle\Event\GetResponseUserEvent;
use Symfony\Component\Form\FormEvent;



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
        return $this->render('AppBundle:User:home.html.twig');
    }
}
