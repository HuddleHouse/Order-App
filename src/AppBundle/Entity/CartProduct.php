<?php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * CartProduct
 *
 * @ORM\Table(name="cart_products")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\CartProductRepository")
 */
class CartProduct
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
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Cart", inversedBy="cart_products")
     * @ORM\JoinColumn(name="cart_id", referencedColumnName="id")
     */
    private $cart;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Part")
     * @ORM\JoinColumn(name="part_id", referencedColumnName="id")
     */
    private $part;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\StockLocation")
     * @ORM\JoinColumn(name="stock_location_id", referencedColumnName="id")
     */
    private $stockLocation;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\PartNumberPrefix")
     * @ORM\JoinColumn(name="part_number_prefix_id", referencedColumnName="id")
     */
    private $partNumberPrefix;

    /**
     * @var int
     *
     * @ORM\Column(name="quantity", type="integer")
     */
    private $quantity = 0;

    /**
     * @var int
     *
     * @ORM\Column(name="ship_quantity", type="integer")
     */
    private $shipQuantity = 0;

    /**
     * @var int
     *
     * @ORM\Column(name="back_order_quantity", type="integer")
     */
    private $backOrderQuantity = 0;

    /**
     * @var int
     *
     * @ORM\Column(name="back_order_ship_quantity", type="integer")
     */
    private $backOrderShipQuantity = 0;

    /**
     * @var int
     *
     * @ORM\Column(name="returned_items_quantity", type="integer")
     */
    private $returnedItemsQuantity = 0;

    /**
     * @var int
     *
     * @ORM\Column(name="returned_items_shipped_quantity", type="integer")
     */
    private $returnedItemsShippedQuantity = 0;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="return_received_date", type="datetime", nullable=true)
     */
    private $returnReceivedDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="return_ship_date", type="datetime", nullable=true)
     */
    private $returnShipDate;

    /**
     * @var string
     *
     * @ORM\Column(name="note", type="text", nullable=true)
     */
    private $note;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", nullable=true)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="stock_number", type="string", nullable=true)
     */
    private $stockNumber;

    /**
     * @var bool
     *
     * @ORM\Column(name="created_by_admin", type="boolean", nullable=true)
     */
    private $createdByAdmin;

    /**
     * @var bool
     *
     * @ORM\Column(name="return_required", type="boolean", nullable=true)
     */
    private $returnRequired;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\CartProductLineNumber", cascade={"remove"}, mappedBy="cartProduct")
     */
    private $cartProductLineNumbers;

    /**
     * @var string
     *
     * @ORM\Column(name="image_path", type="string", nullable=true)
     */
    private $imagePath;

    public function __construct()
    {
        $this->cartProductLineNumbers = new ArrayCollection();
        $this->createdByAdmin = false;
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
     * @return mixed
     */
    public function getCart()
    {
        return $this->cart;
    }

    /**
     * @param mixed $cart
     */
    public function setCart($cart)
    {
        $this->cart = $cart;
    }

    /**
     * @return Part
     */
    public function getPart()
    {
        return $this->part;
    }

    /**
     * @param mixed $part
     */
    public function setPart($part)
    {
        $this->part = $part;
    }

    /**
     * @return string
     */
    public function getStockLocation()
    {
        return $this->stockLocation;
    }

    /**
     * @param string $stockLocation
     */
    public function setStockLocation($stockLocation)
    {
        $this->stockLocation = $stockLocation;
    }

    /**
     * @return int
     */
    public function getQuantity()
    {
        return $this->quantity;
    }

    /**
     * @param int $quantity
     */
    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;
    }

    /**
     * @return int
     */
    public function getShipQuantity()
    {
        return $this->shipQuantity;
    }

    /**
     * @param int $shipQuantity
     */
    public function setShipQuantity($shipQuantity)
    {
        $this->shipQuantity = $shipQuantity;
    }

    /**
     * @return int
     */
    public function getBackOrderQuantity()
    {
        return $this->backOrderQuantity;
    }

    /**
     * @param int $backOrderQuantity
     */
    public function setBackOrderQuantity($backOrderQuantity)
    {
        $this->backOrderQuantity = $backOrderQuantity;
    }

    /**
     * @return string
     */
    public function getNote()
    {
        return $this->note;
    }

    /**
     * @param string $notes
     */
    public function setNote($note)
    {
        $this->note = $note;
    }

    public function addCartProductLineNumber(\AppBundle\Entity\CartProductLineNumber $cartProductLineNumber)
    {
        $this->cartProductLineNumbers[] = $cartProductLineNumber;

        return $this;
    }

    /**
     * Remove payTypes
     *
     * @param \AppBundle\Entity\User $user
     */
    public function removeCartProductLineNumber(\AppBundle\Entity\CartProductLineNumber $cartProductLineNumber)
    {
        $this->cartProductLineNumbers->removeElement($cartProductLineNumber);
    }

    /**
     * Get payTypes
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getCartProductLineNumbers()
    {
        return $this->cartProductLineNumbers;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        if ($this->isUnknown() || $this->createdByAdmin) {
            return $this->description;
        } else {
            return $this->getPart()->getDescription();
        }
    }

    /**
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @return mixed
     */
    public function getPartNumberPrefix()
    {
        return $this->partNumberPrefix;
    }

    /**
     * @param mixed $partNumberPrefix
     */
    public function setPartNumberPrefix($partNumberPrefix)
    {
        $this->partNumberPrefix = $partNumberPrefix;
    }

    public function isUnknown()
    {
        return null == $this->getPart() || '999-999-99999' === $this->getPart()->getStockNumber();
    }

    public function isCreatedByAdmin()
    {
        return $this->createdByAdmin;
    }

    public function setCreatedByAdmin($createdByAdmin)
    {
        $this->createdByAdmin = $createdByAdmin;
    }

    public function setReturnRequired($returnRequired)
    {
        $this->returnRequired = $returnRequired;
    }

    public function isReturnRequired()
    {
        if ($this->createdByAdmin) {
            return $this->returnRequired;
        } else if ($this->isUnknown()) {
            return false;
        } else {
            return $this->getPart()->getRequireReturn();
        }
    }

    public function getStockNumber()
    {
        return $this->stockNumber ? $this->stockNumber : $this->getPart()->getStockNumber() ? $this->getPart()->getStockNumber() : '';
    }

    public function setStockNumber($stockNumber)
    {
        $this->stockNumber = $stockNumber;
    }

    /**
     * @return string|null
     */
    public function getImagePath()
    {
        return $this->imagePath;
    }

    /**
     * @param string $imagePath
     */
    public function setImagePath(string $imagePath)
    {
        $this->imagePath = $imagePath;
    }

    /**
     * @return int
     */
    public function getBackOrderShipQuantity()
    {
        return $this->backOrderShipQuantity;
    }

    /**
     * @param int $backOrderShipQuantity
     */
    public function setBackOrderShipQuantity($backOrderShipQuantity)
    {
        $this->backOrderShipQuantity = $backOrderShipQuantity;
    }

    /**
     * @return int
     */
    public function getReturnedItemsQuantity()
    {
        return $this->returnedItemsQuantity;
    }

    /**
     * @param int $returnedItemsQuantity
     */
    public function setReturnedItemsQuantity($returnedItemsQuantity)
    {
        $this->returnedItemsQuantity = $returnedItemsQuantity;
    }

    /**
     * @return \DateTime
     */
    public function getReturnReceivedDate()
    {
        return $this->returnReceivedDate;
    }

    /**
     * @param \DateTime $returnReceivedDate
     */
    public function setReturnReceivedDate($returnReceivedDate)
    {
        $this->returnReceivedDate = $returnReceivedDate;
    }

    /**
     * @return \DateTime
     */
    public function getReturnShipDate()
    {
        return $this->returnShipDate;
    }

    /**
     * @param \DateTime $returnShipDate
     */
    public function setReturnShipDate($returnShipDate)
    {
        $this->returnShipDate = $returnShipDate;
    }

    /**
     * @return int
     */
    public function getReturnedItemsShippedQuantity()
    {
        return $this->returnedItemsShippedQuantity;
    }

    /**
     * @param int $returnedItemsShippedQuantity
     */
    public function setReturnedItemsShippedQuantity($returnedItemsShippedQuantity)
    {
        $this->returnedItemsShippedQuantity = $returnedItemsShippedQuantity;
    }



}
