<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Invitation;
use AppBundle\Form\DataTransformer\InvitationToCodeTransformer;
use AppBundle\Form\InvitationFormType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Doctrine\ORM\EntityManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class FormController extends Controller
{
    public function createCreateForm(Invitation $entity) {
        $em = $this->getDoctrine()->getManager();
        $invitationToCodeTransformer = new InvitationToCodeTransformer($em);

        $form = $this->createForm(new InvitationFormType($invitationToCodeTransformer), $entity, array(
            'action' => $this->generateUrl('send_invitation'),
            'method' => 'POST'
        ));

        return $form;
    }
}
