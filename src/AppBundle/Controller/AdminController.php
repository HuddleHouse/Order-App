<?php

namespace AppBundle\Controller;

use AppBundle\AppBundle;
use AppBundle\Entity\Cart;
use AppBundle\Entity\Invitation;
use AppBundle\Entity\User;
use AppBundle\Repository\OfficeRepository;
use Doctrine\DBAL\DBALException;
use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Form\UserType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;


class AdminController extends Controller
{
    /**
     * @Route("/admin", name="admin_home")
     */
    public function adminHomeAction()
    {
        $em = $this->getDoctrine()->getManager();
        $sql = "select c.id, c.order_number, c.submit_date, sum(p.quantity) items, o.name as office_name, CONCAT_WS(\" \", c.requester_first_name, c.requester_last_name) as submitted_by
	from cart c
		left join cart_products p
			on p.cart_id = c.id
		left join users u
			on c.user_id = u.id
		left join offices o
			on c.office_id = o.id
	where c.approved = 0
	AND c.submitted = 1
	AND c.type != 'colorhead'
	AND c.type != 'filters'
    and c.order_number not like '%-B'
	group by c.id";
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();
        $submitted = $stmt->fetchAll();

        $sql = "select c.id, c.order_number, c.submit_date, sum(p.quantity) items, o.name as office_name, CONCAT_WS(\" \", c.requester_first_name, c.requester_last_name) as submitted_by
	from cart c
		left join cart_products p
			on p.cart_id = c.id
		left join users u
			on c.user_id = u.id
		left join offices o
			on c.office_id = o.id
	where c.approved = 0
	AND c.submitted = 1
	AND c.type = 'colorhead'
	group by c.id";
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();
        $submittedColorhead = $stmt->fetchAll();

        $sql = "select c.id, c.order_number, c.submit_date, sum(p.quantity) items, o.name as office_name, CONCAT_WS(\" \", c.requester_first_name, c.requester_last_name) as submitted_by, sum(p.back_order_quantity) as bo_quan, sum(p.back_order_ship_quantity) as bo_ship
	from cart c
		left join cart_products p
			on p.cart_id = c.id
		left join users u
			on c.user_id = u.id
		left join offices o
			on c.office_id = o.id
	where c.approved = 0
	AND c.submitted = 1
	AND p.back_order_quantity > p.back_order_ship_quantity
	group by c.id";
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();
        $submittedBackOrders = $stmt->fetchAll();

        $sql = "select c.id, c.order_number, c.submit_date, sum(p.quantity) items, o.name as office_name, CONCAT_WS(\" \", c.requester_first_name, c.requester_last_name) as submitted_by
	from cart c
		left join cart_products p
			on p.cart_id = c.id
		left join users u
			on c.user_id = u.id
		left join offices o
			on c.office_id = o.id
	where c.approved = 0
	AND c.submitted = 1
	AND c.type = 'filters'
	group by c.id";
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();
        $submittedFilters = $stmt->fetchAll();

        $sql = "select c.id, c.submit_date, c.approve_date, c.order_number, sum(p.ship_quantity) shipped, o.name as office_name, CONCAT_WS(\" \", c.requester_first_name, c.requester_last_name) as submitted_by, CONCAT_WS(\" \", u2.first_name, u2.last_name) as approved_by
	from cart c
		left join cart_products p
			on p.cart_id = c.id
		left join users u
			on c.user_id = u.id
		left join users u2
			on c.approved_by_id = u2.id
		left join offices o
			on c.office_id = o.id
	where c.approved = 1
	AND c.submitted = 1
	group by c.id
	order by c.approve_date DESC";
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();
        $approved = $stmt->fetchAll();

        $sql = "select count(*) as num from users";
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();
        $numUsers = $stmt->fetch();

        $sql = "select count(*) as num from parts";
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();
        $numParts = $stmt->fetch();

        $sql = "select count(*) as num from offices";
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();
        $numOffices = $stmt->fetch();

        $sql = "select count(*) as num from cart where approved = 1";
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();
        $numApproved = $stmt->fetch();

        $sql = "select count(*) as num from cart where approved = 0 AND submitted = 1";
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();
        $numPending = $stmt->fetch();

        if(!$numApproved['num'])
            $numApproved['num'] = 0;

        return $this->render('AppBundle:Admin:home.html.twig', array(
            'submitted' => $submitted,
            'approved' => $approved,
            'num_users' => $numUsers['num'],
            'num_parts' => $numParts['num'],
            'num_offices' => $numOffices['num'],
            'num_approved' => $numApproved['num'],
            'num_pending' => $numPending['num'],
            'submitted_colorhead' => $submittedColorhead,
            'submitted_filters' => $submittedFilters,
            'submitted_backorders' => $submittedBackOrders
        ));
    }

    /**
     * @Route("/admin/add-user", name="send_invitation")
     */
    public function sendInvitationAction(Request $request)
    {
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
                'choice_label' => 'name',
                'query_builder' => function (OfficeRepository $officeRepository) {
                    return $officeRepository->createQueryBuilder('u')->orderBy('u.name', 'ASC');
                }
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

            $email_service = $this->get('email_service');
            $email_service->sendEmail(array(
                    'subject' => 'Invitation to register for utus-orders.com',
                    'from' => 'utus-orders@gmail.com',
                    'to' => $invitation->getEmail(),
                    'body' => $this->renderView("AppBundle:Email:send_invitation_email.html.twig", array('code' => $invitation->getCode()))
                )
            );

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
            try {
                $userManager->updateUser($user);
                $successMessage = "User information updated succesfully.";
                $this->addFlash('notice', $successMessage);

                return $this->redirectToRoute('view_users');
            } catch(\Exception $e) {
                $this->addFlash('error', 'Error editing user: ' . $e->getMessage() . "\n");
                return $this->render('@App/Admin/admin_edit_user.html.twig', array(
                    'form' => $form->createView(),
                    'user_id' => $user_id
                ));
            }
        }

        $password = $user->getPlainPassword();

        return $this->render('@App/Admin/admin_edit_user.html.twig', array(
            'form' => $form->createView(),
            'user_id' => $user_id,
            'password' => $password
        ));
    }

    /**
     * @Route("/admin/view-users/add", name="admin_add_user")
     */
    public function viewAdminAddUserAction(Request $request)
    {
        $userManager = $this->get('fos_user.user_manager');

        $form = $this->createForm(UserType::class);
        $form->handleRequest($request);

        if($form->isValid()) {
            try {
                /** @var \AppBundle\Entity\User $user */
                $user = $form->getData();

                $userManager->updateUser($user);

                $this->addFlash('notice', sprintf('Successfully added a user %s', $user->getUsername()));

                return $this->redirectToRoute('view_users');
            } catch(\Exception $e) {
                $this->addFlash('error', 'Error adding an employee: ' . $e->getMessage() . "\n");
                return $this->render('@App/Admin/admin_add_user.html.twig', array(
                    'form' => $form->createView(),
                ));
            }
        }

        return $this->render('@App/Admin/admin_add_user.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    /**
     * @Route("/admin/view-users/delete/{id}", name="admin_delete_user")
     * @ParamConverter(name="user", class="AppBundle\Entity\User")
     */
    public function deleteUserAction(User $user)
    {
        $userManager = $this->get('fos_user.user_manager');

        try {
            $userManager->deleteUser($user);
            $successMessage = "User removed succesfully.";
            $this->addFlash('notice', $successMessage);
        } catch (\Exception $e) {
            $this->addFlash('error', 'Error removing user: ' . $e->getMessage());
            return $this->redirectToRoute('view_users');
        }

        $this->addFlash('notice', 'User deleted successfully.');
        return $this->redirectToRoute('view_users');
    }

    /**
     * @Route("/admin/order/{cart_id}/review", name="admin_order_edit")
     */
    public function viewAdminEditOrderAction(Request $request, $cart_id)
    {
        $em = $this->getDoctrine()->getManager();

        $stock_location = $em->getRepository('AppBundle:StockLocation')->findAll();
        $part_prefix = $em->getRepository('AppBundle:PartNumberPrefix')->findAll();
        $cart = $em->getRepository('AppBundle:Cart')->find($cart_id);

        if($cart->getType() == 'order') {
            $categories = $em->getRepository('AppBundle:PartCategory')->findAll();
            foreach($categories as $key => $category)
                if($category->getNameCononical() == 'colorhead')
                    unset($categories[$key]);

            $products = $em->getRepository('AppBundle:Part')->findAll();
            foreach($products as $key => $product)
                if($product->getPartCategory()->getNameCononical() == 'colorhead')
                    unset($products[$key]);
        }
        else if($cart->getType() == 'colorhead') {
            $category = $em->getRepository('AppBundle:PartCategory')->findOneBy(array('name_cononical' => 'colorhead'));
            $categories = array($category);
            $products = $em->getRepository('AppBundle:Part')->findBy(array('part_category' => $category));
        }
        else if($cart->getType() == 'filters') {
            $category = $em->getRepository('AppBundle:PartCategory')->findOneBy(array('name_cononical' => 'colorhead'));
            $products = $em->getRepository('AppBundle:Part')->findBy(array('part_category' => $category));
            $categories = array($category);
        }

        if($cart->getApproved()) {
            $cart->setApproved(0);
            $em->persist($cart);
            $em->flush();
        }
        $shipping = $em->getRepository('AppBundle:ShippingMethod')->findAll();
        return $this->render('AppBundle:Admin:review_order.html.twig', array(
            'products' => $products,
            'categories' => $categories,
            'cart_id' => $cart_id,
            'office' => $cart->getOffice(),
            'user' => $cart->getUser(),
            'user_notes' => $cart->getNote(),
            'shipping' => $shipping,
            'stock_location' => $stock_location,
            'part_prefix' => $part_prefix,
            'requested_by' => $cart->getRequesterFirstName() . ' ' . $cart->getRequesterLastName(),
            'cart' => $cart
        ));
    }

    /**
     * @Route("/admin/order/{id}/delete", name="admin_order_delete")
     */
    public function deleteAdminOrderAction(Request $request, Cart $cart)
    {
        try {
            $em = $this->getDoctrine()->getManager();
            $em->remove($cart);
            $em->flush();
            $this->addFlash('notice', sprintf('Cart #%s removed.', $cart->getOrderNumber()));
        } catch (\Exception $e) {
            $this->addFlash('notice', $e->getMessage());
        }

        return $this->redirectToRoute('admin_home');
    }

    /**
     * @Route("/admin/order/{id}/print", name="admin_order_print")
     * @ParamConverter(name="cart", class="AppBundle:Cart")
     */
    public function printOrderAction(Request $request, Cart $cart)
    {
        return $this->render('@App/Admin/print_order.html.twig', array('cart' => $cart));
    }

    /**
     * @Route("/admin/order/{cart_id}", name="admin_order_approve")
     */
    public function approveOrderAction(Request $request, $cart_id)
    {
        $em = $this->getDoctrine()->getManager();
        $stock_location = $em->getRepository('AppBundle:StockLocation')->findAll();
        $part_prefix = $em->getRepository('AppBundle:PartNumberPrefix')->findAll();
        $products = $em->getRepository('AppBundle:Part')->findAll();
        $categories = $em->getRepository('AppBundle:PartCategory')->findAll();
        $cart = $em->getRepository('AppBundle:Cart')->find($cart_id);

        return $this->render('AppBundle:Admin:approve_order.html.twig', array(
            'products' => $products,
            'categories' => $categories,
            'cart_id' => $cart_id,
            'office' => $cart->getOffice(),
            'user' => $cart->getUser(),
            'user_notes' => $cart->getNote(),
            'shipping' => ($cart->getShippingMethod() != null ? $cart->getShippingMethod()->getName() : "None"),
            'cart' => $cart,
            'requested_by' => $cart->getRequesterFirstName() . ' ' . $cart->getRequesterLastName(),
            'stock_location' => $stock_location,
            'part_prefix' => $part_prefix,
        ));
    }

    /**
     * @Route("/admin/order/{cart_id}/backorders", name="admin_backorder_edit")
     */
    public function viewAdminEditBackOrderAction(Request $request, $cart_id)
    {
        $em = $this->getDoctrine()->getManager();
        $products = $em->getRepository('AppBundle:Part')->findAll();
        $categories = $em->getRepository('AppBundle:PartCategory')->findAll();
        $stock_location = $em->getRepository('AppBundle:StockLocation')->findAll();
        $part_prefix = $em->getRepository('AppBundle:PartNumberPrefix')->findAll();
        $cart = $em->getRepository('AppBundle:Cart')->find($cart_id);
        $shipping = $em->getRepository('AppBundle:ShippingMethod')->findAll();

        return $this->render('AppBundle:Admin:review_backorders.html.twig', array(
            'products' => $products,
            'categories' => $categories,
            'cart_id' => $cart_id,
            'office' => $cart->getOffice(),
            'user' => $cart->getUser(),
            'user_notes' => $cart->getNote(),
            'shipping' => $shipping,
            'stock_location' => $stock_location,
            'part_prefix' => $part_prefix,
            'requested_by' => $cart->getRequesterFirstName() . ' ' . $cart->getRequesterLastName(),
            'cart' => $cart
        ));
    }
}
