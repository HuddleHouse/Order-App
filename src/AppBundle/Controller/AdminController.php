<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Invitation;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

use AppBundle\Form\UserType;
use FOS\UserBundle\Event\GetResponseUserEvent;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;

class AdminController extends Controller
{
    /**
     * @Route("/admin/add-user", name="send_invitation")
     */
    public function sendInvitationAction(Request $request)
    {
        $user = $this->getUser();
        $invitation = new Invitation();

        $officeRepository = $this->getDoctrine()->getRepository('AppBundle:Office');


        $form = $this->createFormBuilder($invitation)
            ->add('email', EmailType::class)
            ->add('admin', CheckboxType::class, array(
                'label' => 'Give user admin privileges?',
                'required' => false,
            ))
            ->add('office', EntityType::class, array(
                'class' => 'AppBundle:Office',
                'label' => 'Office to assign to?',
                'choice_label' => 'name'
            ))
            ->getForm();
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
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
            $this->addFlash('notice', $successMessage);

            $invitation = new Invitation();
            $form = $this->createFormBuilder($invitation)
                ->add('email', EmailType::class)
                ->add('admin', CheckboxType::class, array(
                    'label' => 'Give user admin privileges?',
                    'required' => false,
                ))
                ->add('office', EntityType::class, array(
                    'class' => 'AppBundle:Office',
                    'label' => 'Office to assign to?',
                    'choice_label' => 'name'
                ))
                ->getForm();

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
        $em = $this->getDoctrine()->getManager();
        $users = $em->getRepository('AppBundle:User')->findAll();

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

            return $this->redirectToRoute('view_users');
        }


        return $this->render('@App/Admin/admin_edit_user.html.twig', array(
            'form' => $form->createView(),
            'user_id' => $user_id
        ));
    }

    /**
     * @Route("/admin/order/{cart_id}/edit", name="admin_order_edit")
     */
    public function viewAdminEditOrderAction(Request $request, $cart_id)
    {
        /** @var $userManager \FOS\UserBundle\Model\UserManagerInterface */
        $userManager = $this->get('fos_user.user_manager');
//        $user = $userManager->findUserBy(array('id' => $user_id));

//        $form = $this->createForm(UserType::class, $user);
//        $form->handleRequest($request);
        $em = $this->getDoctrine()->getManager();

        $products = $em->getRepository('AppBundle:Part')->findAll();
        $categories = $em->getRepository('AppBundle:PartCategory')->findAll();
        $cart = $em->getRepository('AppBundle:Cart')->find($cart_id);

        return $this->render('AppBundle:Admin:review_order.html.twig', array(
            'products' => $products,
            'categories' => $categories,
            'cart_id' => $cart_id,
            'office' => $cart->getOffice(),
            'user' => $cart->getUser()
        ));
    }
}
