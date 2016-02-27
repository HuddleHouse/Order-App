<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class InvitationType extends AbstractType
{
    private $choices = array();
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('email', 'email');
        $builder->add('admin', CheckboxType::class, array(
            'label' => 'Give user admin privileges?',
            'required' => false,
        ));
        $builder->add('office', 'choice', array(
            'label' => 'Office to assign to?',
            'mapped' => true,
            'choices' => $this->choices
        ));

    }
    
    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
    ));
    }

    public function __construct($choices)
    {
        $this->choices = $choices;
    }
}
