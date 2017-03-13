<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use AppBundle\Entity\StockLocation;
use FOS\UserBundle\Util\Canonicalizer;

/**
 * StockLocation controller.
 *
 * @Route("/admin/stocklocation")
 */
class StockLocationController extends Controller
{
    /**
     * Lists all StockLocation entities.
     *
     * @Route("/", name="admin_stocklocation_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $partCategories = $em->getRepository('AppBundle:StockLocation')->findAll();

        return $this->render('AppBundle:StockLocation:index.html.twig', array(
            'partCategories' => $partCategories,
        ));
    }

    /**
     * Creates a new StockLocation entity.
     *
     * @Route("/new", name="admin_stocklocation_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $stockLocation = new StockLocation();
        $form = $this->createForm('AppBundle\Form\StockLocationType', $stockLocation);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            try {
                $canonical = new Canonicalizer();
                $input = preg_replace("/[^a-zA-Z]+/", "", $stockLocation->getName());
                $name_canonical = $canonical->canonicalize($input);
                $stockLocation->setNameCononical($name_canonical);
                $em = $this->getDoctrine()->getManager();
                $em->persist($stockLocation);
                $em->flush();

                $this->addFlash('notice', 'Category added successfully.');
                return $this->redirectToRoute('admin_stocklocation_index');
            } catch(\Exception $e) {
                $this->addFlash('error', 'Error adding category: ' . $e->getMessage());

                return $this->render('AppBundle:StockLocation:new.html.twig', array(
                    'stockLocation' => $stockLocation,
                    'form' => $form->createView(),
                ));
            }
        }

        return $this->render('AppBundle:StockLocation:new.html.twig', array(
            'stockLocation' => $stockLocation,
            'form' => $form->createView(),
        ));
    }

    /**
     * Creates a new StockLocation entity for modal use on New Part.
     *
     * @Route("/new-modal", name="admin_stocklocation_new_modal")
     * @Method({"GET", "POST"})
     */
    public function newModalAction(Request $request)
    {
        $stockLocation = new StockLocation();
        $form = $this->createForm('AppBundle\Form\StockLocationType', $stockLocation);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            try {
                $canonical = new Canonicalizer();
                $input = preg_replace("/[^a-zA-Z]+/", "", $stockLocation->getName());
                $name_canonical = $canonical->canonicalize($input);
                $stockLocation->setNameCononical($name_canonical);
                $em = $this->getDoctrine()->getManager();
                $em->persist($stockLocation);
                $em->flush();

                $this->addFlash('notice', 'Category added successfully.');
                return $this->redirectToRoute('admin_stocklocation_new');
            } catch(\Exception $e) {
                $this->addFlash('error', 'Error adding category: ' . $e->getMessage());


                return $this->render('AppBundle:StockLocation:new-modal.html.twig', array(
                    'form' => $form->createView(),
                ));
            }
        }

        return $this->render('AppBundle:StockLocation:new-modal.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing StockLocation entity.
     *
     * @Route("/{id}/edit", name="admin_stocklocation_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, StockLocation $stockLocation)
    {
        $deleteForm = $this->createDeleteForm($stockLocation);
        $editForm = $this->createForm('AppBundle\Form\StockLocationType', $stockLocation);
        $editForm->handleRequest($request);

        if($editForm->isSubmitted() && $editForm->isValid()) {
            try {
                $em = $this->getDoctrine()->getManager();
                $canonical = new Canonicalizer();
                $input = preg_replace("/[^a-zA-Z]+/", "", $stockLocation->getName());
                $name_canonical = $canonical->canonicalize($input);
                $stockLocation->setNameCononical($name_canonical);
                $em->persist($stockLocation);
                $em->flush();

                $this->addFlash('notice', 'Category updated successfully.');
                return $this->redirectToRoute('admin_stocklocation_index');
            } catch(\Exception $e) {
                $this->addFlash('error', 'Error updating category: ' . $e->getMessage());

                return $this->render('AppBundle:StockLocation:edit.html.twig', array(
                    'stockLocation' => $stockLocation,
                    'edit_form' => $editForm->createView(),
                    'delete_form' => $deleteForm->createView(),
                ));
            }
        }

        return $this->render('AppBundle:StockLocation:edit.html.twig', array(
            'stockLocation' => $stockLocation,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a StockLocation entity.
     *
     * @Route("/{id}", name="admin_stocklocation_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, StockLocation $stockLocation)
    {
        $form = $this->createDeleteForm($stockLocation);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            try {
                $em = $this->getDoctrine()->getManager();
                $em->remove($stockLocation);
                $em->flush();
            } catch(\Exception $e) {
                $this->addFlash('error', 'Error updating category: ' . $e->getMessage());
                return $this->redirectToRoute('admin_stocklocation_index');
            }
        }

        $this->addFlash('notice', 'Category deleted successfully.');
        return $this->redirectToRoute('admin_stocklocation_index');
    }

    /**
     * Creates a form to delete a StockLocation entity.
     *
     * @param StockLocation $stockLocation The StockLocation entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(StockLocation $stockLocation)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('admin_stocklocation_delete', array('id' => $stockLocation->getId())))
            ->setMethod('DELETE')
            ->getForm();
    }
}
