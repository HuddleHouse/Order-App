<?php

namespace AppBundle\Controller\Api;

use AppBundle\Entity\CartProduct;
use AppBundle\Entity\CartProductLineNumber;
use AppBundle\Entity\Cart;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class GroupController extends Controller
{
    /**
     * @Route("/api/load-group-email", name="api_load_group_emails")
     */
    public function loadGroupEmailsAction(Request $request)
    {
        $user = $this->getUser();
        $em = $this->getDoctrine()->getManager();
        $id = $request->request->get('office_id');

        if(!$office = $em->getRepository('AppBundle:Office')->find($id)) {

        }
        $data = array();

        $connection = $em->getConnection();
        $statement = $connection->prepare("select * from 
	office_email where office_id = :id");
        $statement->bindValue('id', $id);

        try {
            $statement->execute();
            $data = $statement->fetchAll();
            return JsonResponse::create($data);
        } catch(\Exception $e) {
            return JsonResponse::create(false);
        }

        return JsonResponse::create($data);
    }

    /**
     * @Route("/api/add-group-email", name="api_add_group_email")
     */
    public function addGroupEmailAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $id = $request->request->get('office_id');
        $email_value = $request->request->get('email_value');

        $connection = $em->getConnection();
        $statement = $connection->prepare("insert into office_email (office_id, email) values (:office_id, :email)");
        $statement->bindValue('office_id', $id);
        $statement->bindValue('email', $email_value);

        try {
            $statement->execute();
            return $this->loadGroupEmailsAction($request);
        } catch(\Exception $e) {
            return JsonResponse::create(false);
        }

        return $this->sumCart($cart);
    }

    /**
     * @Route("/api/remove-group-email", name="api_remove_group_email_by_id")
     */
    public function removeGroupEmailByIdAction(Request $request)
    {
        $id = $request->request->get('office_email_id');
        $em = $this->getDoctrine()->getManager();

        $connection = $em->getConnection();
        $statement = $connection->prepare("delete from office_email where :id = id");
        $statement->bindValue('id', $id);

        try {
            $statement->execute();
            return JsonResponse::create(true);
        } catch(\Exception $e) {
            return JsonResponse::create(false);
        }
    }


}