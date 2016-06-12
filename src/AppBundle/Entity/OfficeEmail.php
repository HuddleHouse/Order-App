<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * OfficeEmail
 *
 * @ORM\Table(name="office_email")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\OfficeEmailRepository")
 */
class OfficeEmail
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
     * @ORM\Column(name="email", type="string", length=255)
     */
    private $email;

    /**
     * @var int
     *
     * @ORM\Column(name="office_id", type="integer")
     */
    private $officeId;


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
     * Set email
     *
     * @param string $email
     *
     * @return OfficeEmail
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set officeId
     *
     * @param integer $officeId
     *
     * @return OfficeEmail
     */
    public function setOfficeId($officeId)
    {
        $this->officeId = $officeId;

        return $this;
    }

    /**
     * Get officeId
     *
     * @return int
     */
    public function getOfficeId()
    {
        return $this->officeId;
    }
}

