<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
/**
 * Invitationss
 *
 * @ORM\Table(name="invitation")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\InvitationRepository")
 */
class Invitation
{
    /** @ORM\Id @ORM\Column(type="string", length=6) */
    protected $code;

    /** @ORM\Column(type="string", length=256)
     *  @Assert\Email(message="Put yo damn email.")
     */
    protected $email;

    /**
     * When sending invitation be sure to set this value to `true'
     * It can prevent invitations from being sent twice
     *
     * @ORM\Column(type="boolean")
     */
    protected $sent = false;

    /**
     *
     * @ORM\Column(type="boolean")
     */
    protected $used = false;

    /**
     *
     * @ORM\Column(type="boolean")
     */
    protected $valid = false;

    /**
     *
     * @ORM\Column(type="boolean")
     */
    protected $admin = false;

    /**
     * @ORM\ManyToOne(targetEntity="Office")
     * @ORM\JoinColumn(name="office_id", referencedColumnName="id")
     */
    private $office;

    public function __construct()
    {
        // generate identifier only once, here a 6 characters length code
        $this->code = substr(md5(uniqid(rand(), true)), 0, 6);
    }


    public function getCode()
    {
        return $this->code;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function isSent()
    {
        return $this->sent;
    }

    public function send()
    {
        $this->sent = true;
    }

    public function useInvitation()
    {
        $this->used = true;
    }

    public function invalidate()
    {
        $this->valid = true;
    }

    public function makeAdmin()
    {
        $this->admin = true;
    }

    public function isAdmin()
    {
        return $this->admin;
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


}
