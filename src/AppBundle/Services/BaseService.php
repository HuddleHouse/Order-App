<?php

namespace AppBundle\Services;

use Symfony\Component\DependencyInjection\ContainerInterface as Container;

class BaseService
{
    protected $container;
    protected $mailer;

    public function __construct(\Swift_Mailer $mailer)
    {
        $this->mailer = $mailer;
    }
}
