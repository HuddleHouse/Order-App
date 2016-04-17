<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Client
 *
 * @ORM\Table(name="client")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ClientRepository")
 */
class Client
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
     * @ORM\Column(name="first_name", type="string", length=255, nullable=true)
     */
    private $firstName;

    /**
     * @var string
     *
     * @ORM\Column(name="last_name", type="string", length=255, nullable=true)
     */
    private $lastName;

    /**
     * @var int
     *
     * @ORM\Column(name="acount_number", type="integer", nullable=true)
     */
    private $acountNumber;

    /**
     * @var string
     *
     * @ORM\Column(name="fed_tax_id", type="string", length=255)
     */
    private $fedTaxId;

    /**
     * @var string
     *
     * @ORM\Column(name="status", type="string", length=255)
     */
    private $status;

    /**
     * @var string
     *
     * @ORM\Column(name="company_name", type="string", length=255)
     */
    private $companyName;

    /**
     * @var string
     *
     * @ORM\Column(name="dba", type="string", length=255, nullable=true)
     */
    private $dba;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="email2", type="string", length=255, nullable=true)
     */
    private $email2;

    /**
     * @var string
     *
     * @ORM\Column(name="area_code", type="string", length=6, nullable=true)
     */
    private $areaCode;

    /**
     * @var string
     *
     * @ORM\Column(name="phone_number", type="string", length=12, nullable=true)
     */
    private $phoneNumber;

    /**
     * @var string
     *
     * @ORM\Column(name="phone_number_ext", type="string", length=10, nullable=true)
     */
    private $phoneNumberExt;

    /**
     * @var string
     *
     * @ORM\Column(name="comments", type="text", nullable=true)
     */
    private $comments;

    /**
     * @var string
     *
     * @ORM\Column(name="mailing_address", type="string", length=255, nullable=true)
     */
    private $mailingAddress;

    /**
     * @var string
     *
     * @ORM\Column(name="mailing_city", type="string", length=255, nullable=true)
     */
    private $mailingCity;

    /**
     * @var string
     *
     * @ORM\Column(name="mailing_state", type="string", length=255, nullable=true)
     */
    private $mailingState;

    /**
     * @var string
     *
     * @ORM\Column(name="mailing_county", type="string", length=255, nullable=true)
     */
    private $mailingCounty;

    /**
     * @var string
     *
     * @ORM\Column(name="location_address", type="string", length=255, nullable=true)
     */
    private $locationAddress;

    /**
     * @var string
     *
     * @ORM\Column(name="location_city", type="string", length=255, nullable=true)
     */
    private $locationCity;

    /**
     * @var string
     *
     * @ORM\Column(name="location_state", type="string", length=255, nullable=true)
     */
    private $locationState;

    /**
     * @var string
     *
     * @ORM\Column(name="location_zip", type="string", length=255, nullable=true)
     */
    private $locationZip;

    /**
     * @var string
     *
     * @ORM\Column(name="location_county", type="string", length=255, nullable=true)
     */
    private $locationCounty;

    /**
     * @var string
     *
     * @ORM\Column(name="online_first_name", type="string", length=255, nullable=true)
     */
    private $onlineFirstName;

    /**
     * @var string
     *
     * @ORM\Column(name="online_last_name", type="string", length=255, nullable=true)
     */
    private $onlineLastName;

    /**
     * @var string
     *
     * @ORM\Column(name="online_company_name", type="string", length=255, nullable=true)
     */
    private $onlineCompanyName;

    /**
     * @var string
     *
     * @ORM\Column(name="mailing_address2", type="string", length=255, nullable=true)
     */
    private $mailingAddress2;

    /**
     * @var string
     *
     * @ORM\Column(name="location_address2", type="string", length=255, nullable=true)
     */
    private $locationAddress2;

    /**
     * @var string
     *
     * @ORM\Column(name="online_address", type="string", length=255, nullable=true)
     */
    private $onlineAddress;

    /**
     * @var string
     *
     * @ORM\Column(name="online_address2", type="string", length=255, nullable=true)
     */
    private $onlineAddress2;

    /**
     * @var string
     *
     * @ORM\Column(name="online_city", type="string", length=255, nullable=true)
     */
    private $onlineCity;

    /**
     * @var string
     *
     * @ORM\Column(name="online_state", type="string", length=255, nullable=true)
     */
    private $onlineState;

    /**
     * @var string
     *
     * @ORM\Column(name="online_zip", type="string", length=255, nullable=true)
     */
    private $onlineZip;

    /**
     * @var string
     *
     * @ORM\Column(name="online_email", type="string", length=255, nullable=true)
     */
    private $onlineEmail;

    /**
     * @var string
     *
     * @ORM\Column(name="online_phone", type="string", length=255, nullable=true)
     */
    private $onlinePhone;


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
     * Set firstName
     *
     * @param string $firstName
     *
     * @return Client
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * Get firstName
     *
     * @return string
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set lastName
     *
     * @param string $lastName
     *
     * @return Client
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get lastName
     *
     * @return string
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set acountNumber
     *
     * @param integer $acountNumber
     *
     * @return Client
     */
    public function setAcountNumber($acountNumber)
    {
        $this->acountNumber = $acountNumber;

        return $this;
    }

    /**
     * Get acountNumber
     *
     * @return int
     */
    public function getAcountNumber()
    {
        return $this->acountNumber;
    }

    /**
     * Set fedTaxId
     *
     * @param string $fedTaxId
     *
     * @return Client
     */
    public function setFedTaxId($fedTaxId)
    {
        $this->fedTaxId = $fedTaxId;

        return $this;
    }

    /**
     * Get fedTaxId
     *
     * @return string
     */
    public function getFedTaxId()
    {
        return $this->fedTaxId;
    }

    /**
     * Set status
     *
     * @param string $status
     *
     * @return Client
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * Get status
     *
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Set companyName
     *
     * @param string $companyName
     *
     * @return Client
     */
    public function setCompanyName($companyName)
    {
        $this->companyName = $companyName;

        return $this;
    }

    /**
     * Get companyName
     *
     * @return string
     */
    public function getCompanyName()
    {
        return $this->companyName;
    }

    /**
     * Set dba
     *
     * @param string $dba
     *
     * @return Client
     */
    public function setDba($dba)
    {
        $this->dba = $dba;

        return $this;
    }

    /**
     * Get dba
     *
     * @return string
     */
    public function getDba()
    {
        return $this->dba;
    }

    /**
     * Set email
     *
     * @param string $email
     *
     * @return Client
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
     * Set email2
     *
     * @param string $email2
     *
     * @return Client
     */
    public function setEmail2($email2)
    {
        $this->email2 = $email2;

        return $this;
    }

    /**
     * Get email2
     *
     * @return string
     */
    public function getEmail2()
    {
        return $this->email2;
    }

    /**
     * Set areaCode
     *
     * @param string $areaCode
     *
     * @return Client
     */
    public function setAreaCode($areaCode)
    {
        $this->areaCode = $areaCode;

        return $this;
    }

    /**
     * Get areaCode
     *
     * @return string
     */
    public function getAreaCode()
    {
        return $this->areaCode;
    }

    /**
     * Set phoneNumber
     *
     * @param string $phoneNumber
     *
     * @return Client
     */
    public function setPhoneNumber($phoneNumber)
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    /**
     * Get phoneNumber
     *
     * @return string
     */
    public function getPhoneNumber()
    {
        return $this->phoneNumber;
    }

    /**
     * Set phoneNumberExt
     *
     * @param string $phoneNumberExt
     *
     * @return Client
     */
    public function setPhoneNumberExt($phoneNumberExt)
    {
        $this->phoneNumberExt = $phoneNumberExt;

        return $this;
    }

    /**
     * Get phoneNumberExt
     *
     * @return string
     */
    public function getPhoneNumberExt()
    {
        return $this->phoneNumberExt;
    }

    /**
     * Set comments
     *
     * @param string $comments
     *
     * @return Client
     */
    public function setComments($comments)
    {
        $this->comments = $comments;

        return $this;
    }

    /**
     * Get comments
     *
     * @return string
     */
    public function getComments()
    {
        return $this->comments;
    }

    /**
     * Set mailingAddress
     *
     * @param string $mailingAddress
     *
     * @return Client
     */
    public function setMailingAddress($mailingAddress)
    {
        $this->mailingAddress = $mailingAddress;

        return $this;
    }

    /**
     * Get mailingAddress
     *
     * @return string
     */
    public function getMailingAddress()
    {
        return $this->mailingAddress;
    }

    /**
     * Set mailingCity
     *
     * @param string $mailingCity
     *
     * @return Client
     */
    public function setMailingCity($mailingCity)
    {
        $this->mailingCity = $mailingCity;

        return $this;
    }

    /**
     * Get mailingCity
     *
     * @return string
     */
    public function getMailingCity()
    {
        return $this->mailingCity;
    }

    /**
     * Set mailingState
     *
     * @param string $mailingState
     *
     * @return Client
     */
    public function setMailingState($mailingState)
    {
        $this->mailingState = $mailingState;

        return $this;
    }

    /**
     * Get mailingState
     *
     * @return string
     */
    public function getMailingState()
    {
        return $this->mailingState;
    }

    /**
     * Set mailingCounty
     *
     * @param string $mailingCounty
     *
     * @return Client
     */
    public function setMailingCounty($mailingCounty)
    {
        $this->mailingCounty = $mailingCounty;

        return $this;
    }

    /**
     * Get mailingCounty
     *
     * @return string
     */
    public function getMailingCounty()
    {
        return $this->mailingCounty;
    }

    /**
     * Set locationAddress
     *
     * @param string $locationAddress
     *
     * @return Client
     */
    public function setLocationAddress($locationAddress)
    {
        $this->locationAddress = $locationAddress;

        return $this;
    }

    /**
     * Get locationAddress
     *
     * @return string
     */
    public function getLocationAddress()
    {
        return $this->locationAddress;
    }

    /**
     * Set locationCity
     *
     * @param string $locationCity
     *
     * @return Client
     */
    public function setLocationCity($locationCity)
    {
        $this->locationCity = $locationCity;

        return $this;
    }

    /**
     * Get locationCity
     *
     * @return string
     */
    public function getLocationCity()
    {
        return $this->locationCity;
    }

    /**
     * Set locationState
     *
     * @param string $locationState
     *
     * @return Client
     */
    public function setLocationState($locationState)
    {
        $this->locationState = $locationState;

        return $this;
    }

    /**
     * Get locationState
     *
     * @return string
     */
    public function getLocationState()
    {
        return $this->locationState;
    }

    /**
     * Set locationZip
     *
     * @param string $locationZip
     *
     * @return Client
     */
    public function setLocationZip($locationZip)
    {
        $this->locationZip = $locationZip;

        return $this;
    }

    /**
     * Get locationZip
     *
     * @return string
     */
    public function getLocationZip()
    {
        return $this->locationZip;
    }

    /**
     * Set locationCounty
     *
     * @param string $locationCounty
     *
     * @return Client
     */
    public function setLocationCounty($locationCounty)
    {
        $this->locationCounty = $locationCounty;

        return $this;
    }

    /**
     * Get locationCounty
     *
     * @return string
     */
    public function getLocationCounty()
    {
        return $this->locationCounty;
    }

    /**
     * Set onlineFirstName
     *
     * @param string $onlineFirstName
     *
     * @return Client
     */
    public function setOnlineFirstName($onlineFirstName)
    {
        $this->onlineFirstName = $onlineFirstName;

        return $this;
    }

    /**
     * Get onlineFirstName
     *
     * @return string
     */
    public function getOnlineFirstName()
    {
        return $this->onlineFirstName;
    }

    /**
     * Set onlineLastName
     *
     * @param string $onlineLastName
     *
     * @return Client
     */
    public function setOnlineLastName($onlineLastName)
    {
        $this->onlineLastName = $onlineLastName;

        return $this;
    }

    /**
     * Get onlineLastName
     *
     * @return string
     */
    public function getOnlineLastName()
    {
        return $this->onlineLastName;
    }

    /**
     * Set onlineCompanyName
     *
     * @param string $onlineCompanyName
     *
     * @return Client
     */
    public function setOnlineCompanyName($onlineCompanyName)
    {
        $this->onlineCompanyName = $onlineCompanyName;

        return $this;
    }

    /**
     * Get onlineCompanyName
     *
     * @return string
     */
    public function getOnlineCompanyName()
    {
        return $this->onlineCompanyName;
    }

    /**
     * Set mailingAddress2
     *
     * @param string $mailingAddress2
     *
     * @return Client
     */
    public function setMailingAddress2($mailingAddress2)
    {
        $this->mailingAddress2 = $mailingAddress2;

        return $this;
    }

    /**
     * Get mailingAddress2
     *
     * @return string
     */
    public function getMailingAddress2()
    {
        return $this->mailingAddress2;
    }

    /**
     * Set locationAddress2
     *
     * @param string $locationAddress2
     *
     * @return Client
     */
    public function setLocationAddress2($locationAddress2)
    {
        $this->locationAddress2 = $locationAddress2;

        return $this;
    }

    /**
     * Get locationAddress2
     *
     * @return string
     */
    public function getLocationAddress2()
    {
        return $this->locationAddress2;
    }

    /**
     * Set onlineAddress
     *
     * @param string $onlineAddress
     *
     * @return Client
     */
    public function setOnlineAddress($onlineAddress)
    {
        $this->onlineAddress = $onlineAddress;

        return $this;
    }

    /**
     * Get onlineAddress
     *
     * @return string
     */
    public function getOnlineAddress()
    {
        return $this->onlineAddress;
    }

    /**
     * Set onlineAddress2
     *
     * @param string $onlineAddress2
     *
     * @return Client
     */
    public function setOnlineAddress2($onlineAddress2)
    {
        $this->onlineAddress2 = $onlineAddress2;

        return $this;
    }

    /**
     * Get onlineAddress2
     *
     * @return string
     */
    public function getOnlineAddress2()
    {
        return $this->onlineAddress2;
    }

    /**
     * Set onlineCity
     *
     * @param string $onlineCity
     *
     * @return Client
     */
    public function setOnlineCity($onlineCity)
    {
        $this->onlineCity = $onlineCity;

        return $this;
    }

    /**
     * Get onlineCity
     *
     * @return string
     */
    public function getOnlineCity()
    {
        return $this->onlineCity;
    }

    /**
     * Set onlineState
     *
     * @param string $onlineState
     *
     * @return Client
     */
    public function setOnlineState($onlineState)
    {
        $this->onlineState = $onlineState;

        return $this;
    }

    /**
     * Get onlineState
     *
     * @return string
     */
    public function getOnlineState()
    {
        return $this->onlineState;
    }

    /**
     * Set onlineZip
     *
     * @param string $onlineZip
     *
     * @return Client
     */
    public function setOnlineZip($onlineZip)
    {
        $this->onlineZip = $onlineZip;

        return $this;
    }

    /**
     * Get onlineZip
     *
     * @return string
     */
    public function getOnlineZip()
    {
        return $this->onlineZip;
    }

    /**
     * Set onlineEmail
     *
     * @param string $onlineEmail
     *
     * @return Client
     */
    public function setOnlineEmail($onlineEmail)
    {
        $this->onlineEmail = $onlineEmail;

        return $this;
    }

    /**
     * Get onlineEmail
     *
     * @return string
     */
    public function getOnlineEmail()
    {
        return $this->onlineEmail;
    }

    /**
     * Set onlinePhone
     *
     * @param string $onlinePhone
     *
     * @return Client
     */
    public function setOnlinePhone($onlinePhone)
    {
        $this->onlinePhone = $onlinePhone;

        return $this;
    }

    /**
     * Get onlinePhone
     *
     * @return string
     */
    public function getOnlinePhone()
    {
        return $this->onlinePhone;
    }
}

