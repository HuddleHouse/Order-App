<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\Group as BaseGroup;

/**
 * Office
 *
 * @ORM\Table(name="office")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\OfficeRepository")
 */
class Office extends BaseGroup
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string
     *
     * @ORM\Column(name="office_name", type="string", length=255)
     */
    protected $officeName;

    /**
     * @var string
     *
     * @ORM\Column(name="office_number", type="integer")
     */
    protected $officeNumber;

    /**
     * @var string
     *
     * @ORM\Column(name="city", type="string", length=255)
     */
    protected $city;

    /**
     * @var string
     *
     * @ORM\Column(name="state", type="string", length=255)
     */
    protected $state;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getOfficeName()
    {
        return $this->officeName;
    }

    /**
     * @param string $officeName
     */
    public function setOfficeName($officeName)
    {
        $this->officeName = $officeName;
    }

    /**
     * Set officeNumber
     *
     * @param string $officeNumber
     * @return Office
     */
    public function setOfficeNumber($officeNumber)
    {
        $this->officeNumber = $officeNumber;

        return $this;
    }

    /**
     * Get officeNumber
     *
     * @return string
     */
    public function getOfficeNumber()
    {
        return $this->officeNumber;
    }

    /**
     * Set city
     *
     * @param string $city
     * @return Office
     */
    public function setCity($city)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city
     *
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set state
     *
     * @param string $state
     * @return Office
     */
    public function setState($state)
    {
        $this->state = $state;

        return $this;
    }

    /**
     * Get state
     *
     * @return string
     */
    public function getState()
    {
        return $this->state;
    }
}
