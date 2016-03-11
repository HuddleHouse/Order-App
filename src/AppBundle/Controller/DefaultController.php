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
        $user = $this->getUser();
        $em = $this->getDoctrine()->getManager();
        $submitted = $em->getRepository('AppBundle:Cart')->findBy(array(
            'submitted' => 1,
            'approved' => 0
        ));

        $approved = $em->getRepository('AppBundle:Cart')->findBy(array(
            'submitted' => 1,
            'approved' => 1
        ));

        return $this->render('AppBundle:Admin:home.html.twig', array(
            'submitted' => $submitted,
            'approved' => $approved
        ));
    }

}
