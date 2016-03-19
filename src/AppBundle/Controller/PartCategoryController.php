<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use AppBundle\Entity\PartCategory;
use FOS\UserBundle\Util\Canonicalizer;

/**
 * PartCategory controller.
 *
 * @Route("/admin/partcategory")
 */
class PartCategoryController extends Controller
{
    /**
     * Lists all PartCategory entities.
     *
     * @Route("/", name="admin_partcategory_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $partCategories = $em->getRepository('AppBundle:PartCategory')->findAll();

        return $this->render('AppBundle:Partcategory:index.html.twig', array(
            'partCategories' => $partCategories,
        ));
    }

    /**
     * Creates a new PartCategory entity.
     *
     * @Route("/new", name="admin_partcategory_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $partCategory = new PartCategory();
        $form = $this->createForm('AppBundle\Form\PartCategoryType', $partCategory);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $canonical = new Canonicalizer();
            $input = preg_replace("/[^a-zA-Z]+/", "", $partCategory->getName());
            $name_canonical = $canonical->canonicalize($input);
            $partCategory->setNameCononical($name_canonical);
            $em = $this->getDoctrine()->getManager();
            $em->persist($partCategory);
            $em->flush();

            $this->addFlash('notice', 'Category added successfully.');
            return $this->redirectToRoute('admin_partcategory_index');
        }

        return $this->render('AppBundle:Partcategory:new.html.twig', array(
            'partCategory' => $partCategory,
            'form' => $form->createView(),
        ));
    }

    /**
     * Creates a new PartCategory entity for modal use on New Part.
     *
     * @Route("/new-modal", name="admin_partcategory_new_modal")
     * @Method({"GET", "POST"})
     */
    public function newModalAction(Request $request)
    {
        $partCategory = new PartCategory();
        $form = $this->createForm('AppBundle\Form\PartCategoryType', $partCategory);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $canonical = new Canonicalizer();
            $input = preg_replace("/[^a-zA-Z]+/", "", $partCategory->getName());
            $name_canonical = $canonical->canonicalize($input);
            $partCategory->setNameCononical($name_canonical);
            $em = $this->getDoctrine()->getManager();
            $em->persist($partCategory);
            $em->flush();

            $this->addFlash('notice', 'Category added successfully.');
            return $this->redirectToRoute('admin_part_new');
        }

        return $this->render('AppBundle:Partcategory:new-modal.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing PartCategory entity.
     *
     * @Route("/{id}/edit", name="admin_partcategory_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, PartCategory $partCategory)
    {
        $deleteForm = $this->createDeleteForm($partCategory);
        $editForm = $this->createForm('AppBundle\Form\PartCategoryType', $partCategory);
        $editForm->handleRequest($request);

        if($editForm->isSubmitted() && $editForm->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $canonical = new Canonicalizer();
            $input = preg_replace("/[^a-zA-Z]+/", "", $partCategory->getName());
            $name_canonical = $canonical->canonicalize($input);
            $partCategory->setNameCononical($name_canonical);
            $em->persist($partCategory);
            $em->flush();

            $this->addFlash('notice', 'Category updated successfully.');
            return $this->redirectToRoute('admin_partcategory_index');
        }

        return $this->render('AppBundle:Partcategory:edit.html.twig', array(
            'partCategory' => $partCategory,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a PartCategory entity.
     *
     * @Route("/{id}", name="admin_partcategory_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, PartCategory $partCategory)
    {
        $form = $this->createDeleteForm($partCategory);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($partCategory);
            $em->flush();
        }
        $this->addFlash('notice', 'Category deleted successfully.');
        return $this->redirectToRoute('admin_partcategory_index');
    }

    /**
     * Creates a form to delete a PartCategory entity.
     *
     * @param PartCategory $partCategory The PartCategory entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(PartCategory $partCategory)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('admin_partcategory_delete', array('id' => $partCategory->getId())))
            ->setMethod('DELETE')
            ->getForm();
    }
}
