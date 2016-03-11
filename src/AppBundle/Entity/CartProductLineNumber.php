<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CartProductLineNumber
 *
 * @ORM\Table(name="cart_product_line_numbers")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\CartProductLineNumberRepository")
 */
class CartProductLineNumber
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
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\CartProduct", inversedBy="cartProductLineNumbers")
     * @ORM\JoinColumn(name="cart_product_id", referencedColumnName="id")
     */
    private $cartProduct;

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
     * Set cartProduct
     *
     * @param string $cartProduct
     *
     * @return CartProductLineNumber
     */
    public function setCartProduct($cartProduct)
    {
        $this->cartProduct = $cartProduct;

        return $this;
    }

    /**
     * Get cartProduct
     *
     * @return string
     */
    public function getCartProduct()
    {
        return $this->cartProduct;
    }

    /**
     * Set lineNumber
     *
     * @param string $lineNumber
     *
     * @return CartProductLineNumber
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

