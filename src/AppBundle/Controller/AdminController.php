<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use AppBundle\Entity\Invitation;
use AppBundle\Form\DataTransformer\InvitationToCodeTransformer;
use AppBundle\Form\InvitationFormType;
use AppBundle\Form\InvitationType;
use Symfony\Component\HttpFoundation\Request;
use FOS\UserBundle\Event\GetResponseUserEvent;
use Symfony\Component\Form\FormEvent;

class AdminController extends Controller
{
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
            $invitation = new Invitation();

            $form = $this->createForm(InvitationType::class, $invitation);

            return $this->render('@App/Security/send_invitation.html.twig', array(
                'form' => $form->createView(),
                'success' => $successMessage
            ));
        }


        return $this->render('@App/Security/send_invitation.html.twig', array(
            'form' => $form->createView(),
            'success' => ''
        ));
    }

    /**
     * @Route("/admin/add-user/sent-invitations", name="all_invitations")
     */
    public function showAllInvitationsAction(Request $request)
    {
        $conn = $this->get('database_connection');
        $invitations = $conn->fetchAll('SELECT * FROM invitation');

        return $this->render('@App/Security/invitations_sent.html.twig', array(
            'invitations' => $invitations
        ));
    }

    /**
     * @Route("/admin/view-users", name="view_users")
     */
    public function showAllUsersAction(Request $request)
    {
        $conn = $this->get('database_connection');
        $invitations = $conn->fetchAll('SELECT * FROM invitation');

        return $this->render('@App/Security/invitations_sent.html.twig', array(
            'invitations' => $invitations
        ));
    }
}
