<?php
namespace AppBundle\Menu;

use Knp\Menu\FactoryInterface;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerAwareTrait;

class MainMenuBuilder implements ContainerAwareInterface
{
    use ContainerAwareTrait;

    public function mainMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');
//        $menu->setChildrenAttribute('class', 'page-sidebar-menu');

        $menu->addChild('User')->setAttribute('class', 'start');
        $menu['User']->addChild('Profile', array('uri' => '#'))
            ->setAttribute('', true);

        $menu['User']->addChild('Logout', array('uri' => '#'));


        $menu->addChild('Language')
            ->setAttribute('dropdown', true)
            ->setAttribute('divider_prepend', true);
        $menu['Language']->addChild('Deutsch', array('uri' => '#'));
        $menu['Language']->addChild('English', array('uri' => '#'));
        return $menu;
    }
}