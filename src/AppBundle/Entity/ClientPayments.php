<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ClientPayments
 *
 * @ORM\Table(name="client_payments")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ClientPaymentsRepository")
 */
class ClientPayments
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var int
     *
     * @ORM\Column(name="client_id", type="integer", nullable=true)
     */
    private $clientId;

    /**
     * @var int
     *
     * @ORM\Column(name="reciept_id", type="integer")
     */
    private $recieptId;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set clientId
     *
     * @param integer $clientId
     *
     * @return ClientPayments
     */
    public function setClientId($clientId)
    {
        $this->clientId = $clientId;

        return $this;
    }

    /**
     * Get clientId
     *
     * @return int
     */
    public function getClientId()
    {
        return $this->clientId;
    }

    /**
     * Set recieptId
     *
     * @param integer $recieptId
     *
     * @return ClientPayments
     */
    public function setRecieptId($recieptId)
    {
        $this->recieptId = $recieptId;

        return $this;
    }

    /**
     * Get recieptId
     *
     * @return int
     */
    public function getRecieptId()
    {
        return $this->recieptId;
    }
}

