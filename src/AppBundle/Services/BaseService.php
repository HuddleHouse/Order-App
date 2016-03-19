<?php

namespace AppBundle\Services;

use Symfony\Component\DependencyInjection\ContainerInterface as Container;

class BaseService
{
    protected $container;

    public function __construct(Container $container)
    {
        $this->container = $container;
    }

}
