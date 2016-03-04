<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use AppBundle\Entity\Invitation;
use AppBundle\Form\DataTransformer\InvitationToCodeTransformer;
use AppBundle\Form\InvitationFormType;
use AppBundle\Form\InvitationType;
use AppBundle\Form\UserType;
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

        $offices = [];
        $officeRepository = $this->getDoctrine()->getRepository('AppBundle:Office');
        $objects = $officeRepository->findAll();
        $offices[0] = '';
        foreach($objects as $obj) {
            $offices[$obj->getId()] = $obj->getName();
        }


        $form = $this->createForm(new InvitationType($offices), $invitation);

        $form->handleRequest($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getEntityManager();
            $data = $form->getData();

            if($officeId = $data->getOffice()) {
                $office = $officeRepository->find($officeId);
                $invitation->setOffice($office);
            }
            else
                $invitation->setOffice(null);


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

            $this->addFlash('notice', $successMessage);

            $form = $this->createForm(new InvitationType($offices), $invitation);

            return $this->render('@App/Security/send_invitation.html.twig', array(
                'form' => $form->createView()
            ));
        }


        return $this->render('@App/Security/send_invitation.html.twig', array(
            'form' => $form->createView()
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
    public function viewAllUsersAction(Request $request)
    {
        $conn = $this->get('database_connection');
        $users = $conn->fetchAll("select CONCAT_WS(' ', first_name, last_name) as name, email, id from users");

        return $this->render('@App/Admin/view_users.html.twig', array(
            'users' => $users
        ));
    }

    /**
     * @Route("/admin/view-users/edit/{user_id}", name="admin_edit_user")
     */
    public function viewAdminEditUserAction(Request $request, $user_id)
    {
        /** @var $userManager \FOS\UserBundle\Model\UserManagerInterface */
        $userManager = $this->get('fos_user.user_manager');
        $user = $userManager->findUserBy(array('id' => $user_id));

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if($form->isValid()) {
            $event = new FormEvent($form, $request);
            $userManager->updateUser($user);
            $successMessage = "User information updated succesfully.";
            $this->addFlash('notice', $successMessage);

            return $this->render('@App/Admin/admin_edit_user.html.twig', array(
                'form' => $form->createView()
            ));
        }


        return $this->render('@App/Admin/admin_edit_user.html.twig', array(
            'form' => $form->createView()
        ));
    }
}
