<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Part
 *
 * @ORM\Table(name="parts")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\PartRepository")
 */
class Part
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
     * @var string
     *
     * @ORM\Column(name="stock_number", type="string", length=255)
     */
    private $stockNumber;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255)
     */
    private $description;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\PartCategory", inversedBy="parts")
     * @ORM\JoinColumn(name="part_category_id", referencedColumnName="id")
     */
    protected $part_category;

    /**
     * @var string
     *
     * @ORM\Column(name="require_return", type="boolean")
     */
    private $require_return;

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
     * Set stockNumber
     *
     * @param string $stockNumber
     *
     * @return Part
     */
    public function setStockNumber($stockNumber)
    {
        $this->stockNumber = $stockNumber;

        return $this;
    }

    /**
     * Get stockNumber
     *
     * @return string
     */
    public function getStockNumber()
    {
        return $this->stockNumber;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Part
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @return mixed
     */
    public function getPartCategory()
    {
        return $this->part_category;
    }

    /**
     * @param mixed $part_category
     */
    public function setPartCategory($part_category)
    {
        $this->part_category = $part_category;
    }

    /**
     * @return string
     */
    public function getRequireReturn()
    {
        return $this->require_return;
    }

    /**
     * @param string $require_return
     */
    public function setRequireReturn($require_return)
    {
        $this->require_return = $require_return;
    }

}

