<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;


/**
 * Cart
 *
 * @ORM\Table(name="cart")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\CartRepository")
 */
class Cart
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
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Office")
     * @ORM\JoinColumn(name="office_id", referencedColumnName="id")
     */
    private $office;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $type;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\ShippingMethod")
     * @ORM\JoinColumn(name="shipping_method_id", referencedColumnName="id")
     */
    private $shipping_method;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\CartProduct", mappedBy="cart", cascade={"remove"})
     */
    private $cart_products;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime")
     */
    private $date;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="submit_date", type="datetime", nullable=true)
     */
    private $submitDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="approve_date", type="datetime", nullable=true)
     */
    private $approveDate;
    
    /**
     * @var bool
     *
     * @ORM\Column(name="approved", type="boolean")
     */
    private $approved = 0;
    /**
     * @var bool
     *
     * @ORM\Column(name="submitted", type="boolean")
     */
    private $submitted = 0;
    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User")
     * @ORM\JoinColumn(name="approved_by_id", referencedColumnName="id")
     */
    private $approved_by;

    /**
     * @var string
     *
     * @ORM\Column(name="note", type="text", nullable=true)
     */
    private $note;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $requester_first_name;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $requester_last_name;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $order_number;
    
    public function __construct()
    {
        $this->cart_products = new ArrayCollection();
    }

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
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Cart
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set submitDate
     *
     * @param \DateTime $submitDate
     *
     * @return Cart
     */
    public function setSubmitDate($submitDate)
    {
        $this->submitDate = $submitDate;

        return $this;
    }

    /**
     * Get submitDate
     *
     * @return \DateTime
     */
    public function getSubmitDate()
    {
        return $this->submitDate;
    }

    /**
     * Set approved
     *
     * @param boolean $approved
     *
     * @return Cart
     */
    public function setApproved($approved)
    {
        $this->approved = $approved;

        return $this;
    }

    /**
     * Get approved
     *
     * @return bool
     */
    public function getApproved()
    {
        return $this->approved;
    }

    /**
     * @return mixed
     */
    public function getOffice()
    {
        return $this->office;
    }

    /**
     * @param mixed $office
     */
    public function setOffice($office)
    {
        $this->office = $office;
    }

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }

    /**
     * @return mixed
     */
    public function getApprovedBy()
    {
        return $this->approved_by;
    }

    /**
     * @param mixed $approved_by
     */
    public function setApprovedBy($approved_by)
    {
        $this->approved_by = $approved_by;
    }

    /**
     * @return mixed
     */
    public function getSubmitted()
    {
        return $this->submitted;
    }

    /**
     * @param mixed $submitted
     */
    public function setSubmitted($submitted)
    {
        $this->submitted = $submitted;
    }

    public function addCartProduct(\AppBundle\Entity\CartProduct $cartProduct)
    {
        $this->cart_products[] = $cartProduct;

        return $this;
    }

    /**
     * Remove payTypes
     *
     * @param \AppBundle\Entity\User $user
     */
    public function removeCartProduct(\AppBundle\Entity\CartProduct $cartProduct)
    {
        $this->cart_products->removeElement($cartProduct);
        $cartProduct->setCart(null);
        return $this;
    }

    /**
     * Get payTypes
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getCartProducts()
    {
        return $this->cart_products;
    }

    /**
     * @return string
     */
    public function getNote()
    {
        return $this->note;
    }

    /**
     * @param string $note
     */
    public function setNote($note)
    {
        $this->note = $note;
    }

    /**
     * @return string
     */
    public function getRequesterFirstName()
    {
        return $this->requester_first_name;
    }

    /**
     * @param string $requester_first_name
     */
    public function setRequesterFirstName($requester_first_name)
    {
        $this->requester_first_name = $requester_first_name;
    }

    /**
     * @return string
     */
    public function getRequesterLastName()
    {
        return $this->requester_last_name;
    }

    /**
     * @param string $requester_last_name
     */
    public function setRequesterLastName($requester_last_name)
    {
        $this->requester_last_name = $requester_last_name;
    }

    /**
     * @return mixed
     */
    public function getShippingMethod()
    {
        return $this->shipping_method;
    }

    /**
     * @param mixed $shipping_method
     */
    public function setShippingMethod($shipping_method)
    {
        $this->shipping_method = $shipping_method;
    }

    /**
     * @return string
     */
    public function getOrderNumber()
    {
        return $this->order_number;
    }

    /**
     * @param string $order_number
     */
    public function setOrderNumber($order_number)
    {
        $this->order_number = $order_number;
    }

    /**
     * @return \DateTime
     */
    public function getApproveDate()
    {
        return $this->approveDate;
    }

    /**
     * @param \DateTime $approveDate
     */
    public function setApproveDate($approveDate)
    {
        $this->approveDate = $approveDate;
    }

    /**
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param string $order_number
     */
    public function setType($type)
    {
        $this->type = $type;
    }
}

