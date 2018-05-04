<?php

namespace AppBundle\Controller\Api;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class AdminController extends Controller
{

    /**
     * @return array
     */
    private function orderedPartsDbQuery()
    {
        $sql = "
        select  p.id, c.id as cart_id, p.quantity, c.approved, p.ship_quantity as shipQuantity,
                p.returned_items_quantity as returnedItemsQuantity,
                p.returned_items_shipped_quantity as returnedItemsShippedQuantity,
                parts.require_return as requireReturn, p.back_order_quantity as backOrderQuantity,
                c.id as cartId, c.order_number as orderNumber, c.submit_date as submitDate, c.approve_date as approveDate,
                CONCAT_WS(\" \", c.requester_first_name, c.requester_last_name) as submittedBy,
                CONCAT_WS(\" \", u2.first_name, u2.last_name) as approvedBy, o.name as officeName,
                COALESCE (parts.stock_number, p.stock_number) as stockNumber,
                COALESCE (parts.description, p.description) as description, parts.path as webPath,
                category.name as catName, category.name_cononical as nameCononical,
                cpln.line_number 
        from cart_products p
            left join cart c
                on p.cart_id = c.id
            left join parts
                on p.part_id = parts.id
            left join users u
                on c.user_id = u.id
            left join users u2
                on c.approved_by_id = u2.id
            left join offices o
                on c.office_id = o.id
            left join part_categories category
                on parts.part_category_id = category.id
            left join cart_product_line_numbers cpln
                on cpln.cart_product_id = p.id
        where c.submitted = 1
        and c.approved = 1";

        $stmt = $this->getDoctrine()->getEntityManager()->getConnection()->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    /**
     * @Route("/api/ordered-parts-db", name="api_ordered_parts_db")
     */
    public function loadGroupEmailsAction(Request $request)
    {
        $products = $this->orderedPartsDbQuery();

        $result = [];
        foreach($products as $product) {
            if (empty($result[$product['id']])) {
                $result[$product['id']] = $product;
                $result[$product['id']]['line_number'] = [$result[$product['id']]['line_number']];
            } else {
                $result[$product['id']]['line_number'][] = $product['line_number'];
            }
        }

        $productsArray = array_map(function($product) {
            $orderRoute = $this->generateUrl('admin_order_approve', [
                'cart_id' => $product['cartId']
            ]);
            return [
                implode('<br />', $product['line_number']),
                $product['stockNumber'],
                $product['orderNumber'],
                $product['submitDate'],
                $product['approveDate'],
                $product['webPath'],
                $product['description'],
                $product['requireReturn'] ? "<center><i class='fa fa-check-circle-o' style='font-size: 25px;color: #e2001a;'></i></center>" : '',
                $product['quantity'],
                $product['shipQuantity'],
                $product['backOrderQuantity'],
                $product['officeName'],
                '<a href="'.$orderRoute.'" class="btn btn-default btn-xs">View</a>'
            ];
        }, array_values($result));

        return new JsonResponse([
            'data' => $productsArray
        ]);
    }
}