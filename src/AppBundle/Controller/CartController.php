<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\CartProduct;
use AppBundle\Entity\CartProductLineNumber;
use AppBundle\Entity\Cart;

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

        return $this->render('AppBundle:Cart:home.html.twig', array(
            'products' => $products,
            'categories' => $categories,
        ));
    }

    /**
     * @Route("/review-order", name="review_order")
     */
    public function reviewOrderAction()
    {
        $user = $this->getUser();
        $em = $this->getDoctrine()->getManager();

        if(!$cart = $em->getRepository('AppBundle:Cart')->findOneBy(array('user' => $user, 'submitted' => 0))) {
            $cart = new Cart();
            $cart->setUser($user);
            $cart->setOffice($user->getOffice());
            $cart->setDate(date_create(date("Y-m-d H:i:s")));
            $em->persist($cart);
            $em->flush();
        }

        $products = $em->getRepository('AppBundle:Part')->findAll();
        $categories = $em->getRepository('AppBundle:PartCategory')->findAll();

        return $this->render('AppBundle:Cart:review-order.html.twig', array(
            'products' => $products,
            'categories' => $categories,
            'cart_id' => $cart->getid()
        ));
    }

    /**
     * @Route("/review-order/submit/{cart_id}", name="submit_cart")
     */
    public function submitOrderAction(Request $request, $cart_id)
    {
        $em = $this->getDoctrine()->getManager();
        $cart = $em->getRepository('AppBundle:Cart')->find($cart_id);
        $cart->setSubmitted(1);
        $cart->setSubmitDate(date_create(date("Y-m-d H:i:s")));

        $em->persist($cart);
        $em->flush();
        $this->addFlash('notice', 'Order submitted successfully.');
        /*
         * SEND EMAILS TO ALL ADMIN NOTIFYING THEM THAT AN ORDER WAS SUBMITTED.
         *
         */
        return $this->redirectToRoute('view_all_orders');
    }

    /**
     * @Route("/view-all-orders", name="view_all_orders")
     */
    public function viewAllOrdersAction()
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        $submitted = $em->getRepository('AppBundle:Cart')->findBy(array('user' => $user, 'submitted' => 1, 'approved' => 0));

        $sql = "select c.id, c.submit_date, sum(p.ship_quantity) shipped
	from cart c
		left join cart_products p
			on p.cart_id = c.id
	where c.approved = 1
	AND c.submitted = 1
	and c.user_id = :user_id
	group by c.id;";
        $stmt = $em->getConnection()->prepare($sql);
        $params['user_id'] = $user->getId();
        $stmt->execute($params);
        $numShipped = $stmt->fetchAll();

        return $this->render('AppBundle:Cart:view-all-orders.html.twig',
            array(
                'submitted' => $submitted,
                'approved' => $numShipped
            )
        );
    }

    /**
     * @Route("/view-order/{order_id}", name="view_past_order")
     */
    public function viePastOrderAction($order_id)
    {
        $user = $this->getUser();
        $em = $this->getDoctrine()->getManager();
        $cart = $em->getRepository('AppBundle:Cart')->find($order_id);
        $products = $em->getRepository('AppBundle:Part')->findAll();
        $categories = $em->getRepository('AppBundle:PartCategory')->findAll();


        return $this->render('AppBundle:Cart:view-past-order.html.twig', array(
            'products' => $products,
            'categories' => $categories,
            'order_id' => $order_id
        ));
    }
}
