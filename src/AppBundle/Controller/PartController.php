<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use AppBundle\Entity\Part;
use AppBundle\Form\PartType;

/**
 * Part controller.
 *
 * @Route("/admin/part")
 */
class PartController extends Controller
{
    /**
     * Lists all Part entities.
     *
     * @Route("/", name="admin_part_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $parts = $em->getRepository('AppBundle:Part')->findAll();

        return $this->render('@App/Part/index.html.twig', array(
            'parts' => $parts,
        ));
    }

    /**
     * Creates a new Part entity.
     *
     * @Route("/new", name="admin_part_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $part = new Part();
        $form = $this->createForm('AppBundle\Form\PartType', $part);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($part);
            $em->flush();

            $this->addFlash('notice', 'Part added successfully.');
            return $this->redirectToRoute('admin_part_index');
        }

        return $this->render('@App/Part/new.html.twig', array(
            'part' => $part,
            'form' => $form->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing Part entity.
     *
     * @Route("/{id}/edit", name="admin_part_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Part $part)
    {
        $deleteForm = $this->createDeleteForm($part);
        $editForm = $this->createForm('AppBundle\Form\PartType', $part);
        $editForm->handleRequest($request);

        if($editForm->isSubmitted() && $editForm->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($part);
            $em->flush();
            $this->addFlash('notice', 'Part updated successfully.');
            return $this->redirectToRoute('admin_part_index', array('id' => $part->getId()));
        }

        return $this->render('@App/Part/edit.html.twig', array(
            'part' => $part,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a Part entity.
     *
     * @Route("/{id}", name="admin_part_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Part $part)
    {
        $form = $this->createDeleteForm($part);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($part);
            $em->flush();
        }
        $this->addFlash('notice', 'Part deleted successfully.');
        return $this->redirectToRoute('admin_part_index');
    }

    /**
     * Creates a form to delete a Part entity.
     *
     * @param Part $part The Part entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Part $part)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('admin_part_delete', array('id' => $part->getId())))
            ->setMethod('DELETE')
            ->getForm();
    }
}
