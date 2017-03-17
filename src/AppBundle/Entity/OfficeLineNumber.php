<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * OfficeLineNumber
 *
 * @ORM\Table(name="office_line_numbers")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\OfficeLineNumberRepository")
 */
class OfficeLineNumber
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
     * @ORM\Column(name="line_number", type="string", length=255, nullable=true)
     */
    private $lineNumber;


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
     * Set office
     *
     * @param string $office
     *
     * @return OfficeLineNumber
     */
    public function setOffice($office)
    {
        $this->office = $office;

        return $this;
    }

    /**
     * Get office
     *
     * @return string
     */
    public function getOffice()
    {
        return $this->office;
    }

    /**
     * Set lineNumber
     *
     * @param string $lineNumber
     *
     * @return OfficeLineNumber
     */
    public function setLineNumber($lineNumber)
    {
        $this->lineNumber = $lineNumber;

        return $this;
    }

    /**
     * Get lineNumber
     *
     * @return string
     */
    public function getLineNumber()
    {
        return $this->lineNumber;
    }
}

