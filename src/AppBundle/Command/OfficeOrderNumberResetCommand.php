<?php

namespace AppBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class OfficeOrderNumberResetCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('app:office:reset-order-no')
            ->setDescription('Resets the starting order number per office according the up-to-date data set.')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $io = new SymfonyStyle($input, $output);

        try {
            $this->getContainer()->get('doctrine')->getRepository('AppBundle:Office')->resetOrderNumberPerOffice();
            $io->success('Done');
        } catch (\Exception $e) {
            $io->error($e->getMessage());
        }
    }
}
