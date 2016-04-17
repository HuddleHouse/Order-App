<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ClientTaxPeriod
 *
 * @ORM\Table(name="client_tax_period")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ClientTaxPeriodRepository")
 */
class ClientTaxPeriod
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
     * @var \DateTime
     *
     * @ORM\Column(name="filing_date", type="datetime", nullable=true)
     */
    private $filingDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="due_date", type="datetime")
     */
    private $dueDate;

    /**
     * @var int
     *
     * @ORM\Column(name="tax_type_id", type="integer")
     */
    private $taxTypeId;

    /**
     * @var string
     *
     * @ORM\Column(name="filing_month", type="string", length=255, nullable=true)
     */
    private $filingMonth;

    /**
     * @var int
     *
     * @ORM\Column(name="filing_year", type="integer", nullable=true)
     */
    private $filingYear;

    /**
     * @var int
     *
     * @ORM\Column(name="previous_balance", type="integer", nullable=true)
     */
    private $previousBalance;

    /**
     * @var int
     *
     * @ORM\Column(name="previous_balance_penalty", type="integer", nullable=true)
     */
    private $previousBalancePenalty;

    /**
     * @var int
     *
     * @ORM\Column(name="previous_balance_interest", type="integer", nullable=true)
     */
    private $previousBalanceInterest;

    /**
     * @var int
     *
     * @ORM\Column(name="taxable_proceeds", type="integer", nullable=true)
     */
    private $taxableProceeds;

    /**
     * @var int
     *
     * @ORM\Column(name="tax_owed", type="integer", nullable=true)
     */
    private $taxOwed;

    /**
     * @var int
     *
     * @ORM\Column(name="penalty_fee", type="integer")
     */
    private $penaltyFee;

    /**
     * @var int
     *
     * @ORM\Column(name="interest_fee", type="integer", nullable=true)
     */
    private $interestFee;

    /**
     * @var int
     *
     * @ORM\Column(name="vender_comp", type="integer", nullable=true)
     */
    private $venderComp;

    /**
     * @var int
     *
     * @ORM\Column(name="amount_due", type="integer", nullable=true)
     */
    private $amountDue;

    /**
     * @var int
     *
     * @ORM\Column(name="amount_paid", type="integer", nullable=true)
     */
    private $amountPaid;


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
     * Set filingDate
     *
     * @param \DateTime $filingDate
     *
     * @return ClientTaxPeriod
     */
    public function setFilingDate($filingDate)
    {
        $this->filingDate = $filingDate;

        return $this;
    }

    /**
     * Get filingDate
     *
     * @return \DateTime
     */
    public function getFilingDate()
    {
        return $this->filingDate;
    }

    /**
     * Set dueDate
     *
     * @param \DateTime $dueDate
     *
     * @return ClientTaxPeriod
     */
    public function setDueDate($dueDate)
    {
        $this->dueDate = $dueDate;

        return $this;
    }

    /**
     * Get dueDate
     *
     * @return \DateTime
     */
    public function getDueDate()
    {
        return $this->dueDate;
    }

    /**
     * Set taxTypeId
     *
     * @param integer $taxTypeId
     *
     * @return ClientTaxPeriod
     */
    public function setTaxTypeId($taxTypeId)
    {
        $this->taxTypeId = $taxTypeId;

        return $this;
    }

    /**
     * Get taxTypeId
     *
     * @return int
     */
    public function getTaxTypeId()
    {
        return $this->taxTypeId;
    }

    /**
     * Set filingMonth
     *
     * @param string $filingMonth
     *
     * @return ClientTaxPeriod
     */
    public function setFilingMonth($filingMonth)
    {
        $this->filingMonth = $filingMonth;

        return $this;
    }

    /**
     * Get filingMonth
     *
     * @return string
     */
    public function getFilingMonth()
    {
        return $this->filingMonth;
    }

    /**
     * Set filingYear
     *
     * @param integer $filingYear
     *
     * @return ClientTaxPeriod
     */
    public function setFilingYear($filingYear)
    {
        $this->filingYear = $filingYear;

        return $this;
    }

    /**
     * Get filingYear
     *
     * @return int
     */
    public function getFilingYear()
    {
        return $this->filingYear;
    }

    /**
     * Set previousBalance
     *
     * @param integer $previousBalance
     *
     * @return ClientTaxPeriod
     */
    public function setPreviousBalance($previousBalance)
    {
        $this->previousBalance = $previousBalance;

        return $this;
    }

    /**
     * Get previousBalance
     *
     * @return int
     */
    public function getPreviousBalance()
    {
        return $this->previousBalance;
    }

    /**
     * Set previousBalancePenalty
     *
     * @param integer $previousBalancePenalty
     *
     * @return ClientTaxPeriod
     */
    public function setPreviousBalancePenalty($previousBalancePenalty)
    {
        $this->previousBalancePenalty = $previousBalancePenalty;

        return $this;
    }

    /**
     * Get previousBalancePenalty
     *
     * @return int
     */
    public function getPreviousBalancePenalty()
    {
        return $this->previousBalancePenalty;
    }

    /**
     * Set previousBalanceInterest
     *
     * @param integer $previousBalanceInterest
     *
     * @return ClientTaxPeriod
     */
    public function setPreviousBalanceInterest($previousBalanceInterest)
    {
        $this->previousBalanceInterest = $previousBalanceInterest;

        return $this;
    }

    /**
     * Get previousBalanceInterest
     *
     * @return int
     */
    public function getPreviousBalanceInterest()
    {
        return $this->previousBalanceInterest;
    }

    /**
     * Set taxableProceeds
     *
     * @param integer $taxableProceeds
     *
     * @return ClientTaxPeriod
     */
    public function setTaxableProceeds($taxableProceeds)
    {
        $this->taxableProceeds = $taxableProceeds;

        return $this;
    }

    /**
     * Get taxableProceeds
     *
     * @return int
     */
    public function getTaxableProceeds()
    {
        return $this->taxableProceeds;
    }

    /**
     * Set taxOwed
     *
     * @param integer $taxOwed
     *
     * @return ClientTaxPeriod
     */
    public function setTaxOwed($taxOwed)
    {
        $this->taxOwed = $taxOwed;

        return $this;
    }

    /**
     * Get taxOwed
     *
     * @return int
     */
    public function getTaxOwed()
    {
        return $this->taxOwed;
    }

    /**
     * Set penaltyFee
     *
     * @param integer $penaltyFee
     *
     * @return ClientTaxPeriod
     */
    public function setPenaltyFee($penaltyFee)
    {
        $this->penaltyFee = $penaltyFee;

        return $this;
    }

    /**
     * Get penaltyFee
     *
     * @return int
     */
    public function getPenaltyFee()
    {
        return $this->penaltyFee;
    }

    /**
     * Set interestFee
     *
     * @param integer $interestFee
     *
     * @return ClientTaxPeriod
     */
    public function setInterestFee($interestFee)
    {
        $this->interestFee = $interestFee;

        return $this;
    }

    /**
     * Get interestFee
     *
     * @return int
     */
    public function getInterestFee()
    {
        return $this->interestFee;
    }

    /**
     * Set venderComp
     *
     * @param integer $venderComp
     *
     * @return ClientTaxPeriod
     */
    public function setVenderComp($venderComp)
    {
        $this->venderComp = $venderComp;

        return $this;
    }

    /**
     * Get venderComp
     *
     * @return int
     */
    public function getVenderComp()
    {
        return $this->venderComp;
    }

    /**
     * Set amountDue
     *
     * @param integer $amountDue
     *
     * @return ClientTaxPeriod
     */
    public function setAmountDue($amountDue)
    {
        $this->amountDue = $amountDue;

        return $this;
    }

    /**
     * Get amountDue
     *
     * @return int
     */
    public function getAmountDue()
    {
        return $this->amountDue;
    }

    /**
     * Set amountPaid
     *
     * @param integer $amountPaid
     *
     * @return ClientTaxPeriod
     */
    public function setAmountPaid($amountPaid)
    {
        $this->amountPaid = $amountPaid;

        return $this;
    }

    /**
     * Get amountPaid
     *
     * @return int
     */
    public function getAmountPaid()
    {
        return $this->amountPaid;
    }
}

