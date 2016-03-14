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
        $users = $this->getUser();
        $em = $this->getDoctrine()->getManager();
        $sql = "select c.id, c.submit_date, sum(p.quantity) items, o.name as office_name, CONCAT_WS(\" \", u.first_name, u.last_name) as submitted_by
	from cart c
		left join cart_products p
			on p.cart_id = c.id
		left join users u
			on c.user_id = u.id
		left join offices o
			on c.office_id = o.id
	where c.approved = 0
	AND c.submitted = 1
	group by c.id";
        $stmt = $em->getConnection()->prepare($sql);
//        $params['user_id'] = $user->getId();
        $stmt->execute();
        $submitted = $stmt->fetchAll();

        $sql = "select c.id, c.submit_date, sum(p.ship_quantity) shipped, o.name as office_name, CONCAT_WS(\" \", u.first_name, u.last_name) as submitted_by, CONCAT_WS(\" \", u2.first_name, u2.last_name) as approved_by
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
	limit 10";
        $stmt = $em->getConnection()->prepare($sql);
//        $params['user_id'] = $user->getId();
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
            'num_pending' => $numPending['num']
        ));
    }

}
