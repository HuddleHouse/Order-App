<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;


/**
 * PartCategory
 *
 * @ORM\Table(name="part_categories")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\PartCategoryRepository")
 */
class PartCategory
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
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="name_cononical", type="string", length=255)
     */
    private $name_cononical;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\Part", mappedBy="part_category")
     */
    private $parts;

    public function __construct()
    {
        $this->parts = new ArrayCollection();
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
     * Set name
     *
     * @param string $name
     *
     * @return PartCategory
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return mixed
     */
    public function getParts()
    {
        return $this->parts;
    }

    public function addPart(\AppBundle\Entity\Part $part)
    {
        $this->parts[] = $part;
    }

    /**
     * @return mixed
     */
    public function getNameCononical()
    {
        return $this->name_cononical;
    }

    /**
     * @param mixed $name_cononical
     */
    public function setNameCononical($name_cononical)
    {
        $this->name_cononical = $name_cononical;
    }

}

