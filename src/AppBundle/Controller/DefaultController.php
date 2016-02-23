<?php

namespace AppBundle\Controller;

use AppBundle\Form\DataTransformer\InvitationToCodeTransformer;
use AppBundle\Form\InvitationFormType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use FOS\UserBundle\Event\GetResponseUserEvent;
use Symfony\Component\Form\FormBuilderInterface;



class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        return $this->render('default/index.html.twig', array('base_dir' => realpath($this->getParameter('kernel.root_dir').'/..'),));
    }

    /**
     * @Route("/admin", name="admin_home")
     */
    public function adminHomeAction()
    {
        return $this->render('AppBundle:Admin:home.html.twig');
    }

    /**
     * @Route("/user", name="user_home")
     */
    public function userHomeAction()
    {
        return $this->render('AppBundle:User:home.html.twig');
    }

    /**
     * @Route("/admin/add-user", name="send_invitation")
     */
    public function sendInvitationAction(Request $request)
    {
        $user = $this->getUser();
        $event = new GetResponseUserEvent($user, $request);

        if (null !== $event->getResponse()) {
            return $event->getResponse();
        }
        $formBuilderInterface = FormBuilderInterface::;

        $form = InvitationFormType::buildForm($formBuilderInterface, $event);


        $form->handleRequest($request);

        if ($form->isValid()) {
            $event = new FormEvent($form, $request);

            if (null === $response = $event->getResponse()) {
                $this->render('AppBundle:Admin:send_invitation.html.twig', array(
                    'form' => $form->createView(),
                    'success' => "Invitation sent succesfully."
                ));
            }


            return $response;
        }

        return $this->render('AppBundle:Admin:send_invitation.html.twig', array(
            'form' => $form->createView()
        ));
    }
}
