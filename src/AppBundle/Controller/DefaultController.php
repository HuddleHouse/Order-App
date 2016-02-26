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
        $invitation = new Invitation();

        $form = $this->createForm(InvitationType::class, $invitation);

        $form->handleRequest($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getEntityManager();
            $message = \Swift_Message::newInstance()
                ->setSubject('Invitation to Register')
                ->setFrom('matt@245tech.com')
                ->setTo($invitation->getEmail())
                ->setBody(
                    $this->renderView(
                        'AppBundle:Email:send_invitation_email.html.twig',
                        array('code' => $invitation->getCode())
                    ),
                    'text/html'
                );
            $this->get('mailer')->send($message);

            $invitation->send();
            $em->persist($invitation);
            $em->flush();

            $successMessage = "Invitation to ".$invitation->getEmail()." sent succesfully.";

            return $this->render('AppBundle:Admin:send_invitation.html.twig', array(
                'form' => $form->createView(),
                'success' => $successMessage
            ));
        }

        return $this->render('AppBundle:Admin:send_invitation.html.twig', array(
            'form' => $form->createView()
        ));
    }
}
