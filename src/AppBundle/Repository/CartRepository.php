<?php

namespace AppBundle\Repository;

use Doctrine\ORM\EntityRepository;

class CartRepository extends EntityRepository
{
    public function findByOrderNumber($orderNumber)
    {
        return $this->findOneBy(['order_number' => $orderNumber]);
    }
}
