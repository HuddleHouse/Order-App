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
        $submitted = $em->getRepository('AppBundle:Cart')->findBy(array(
            'submitted' => 1,
            'approved' => 0
        ));

        $approved = $em->getRepository('AppBundle:Cart')->findBy(array(
            'submitted' => 1,
            'approved' => 1
        ));

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

        if(!$numApproved['num'])
            $numApproved['num'] = 0;

        return $this->render('AppBundle:Admin:home.html.twig', array(
            'submitted' => $submitted,
            'approved' => $approved,
            'num_users' => $numUsers['num'],
            'num_parts' => $numParts['num'],
            'num_offices' => $numOffices['num'],
            'num_approved' => $numApproved['num'],
        ));
    }

}
