<?php

namespace App\EventListener;

use App\Entity\User;
use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;

class JWTCreatedListener
{

    /**
     * @param JWTCreatedEvent $event
     * @return void
     */
    public function onJWTCreated(JWTCreatedEvent $event)
    {
        $data = $event->getData();
        $user = $event->getUser();

        if (!$user instanceof User) {
            return;
        }

        $data['data'] = [
            'prenom'    => $user->getFirstname(),
            'nom'       => $user->getLastname(),
            'id'        => $user->getId(),
        ];

        $event->setData($data);

        $header        = $event->getHeader();
        $header['cty'] = 'JWT';

        $event->setHeader($header);
    }


    // /**
    //  * @param JWTCreatedEvent $event
    //  *
    //  * @return void
    //  */
    // public function onJWTCreated(JWTCreatedEvent $event)
    // {
    //     $request = $this->requestStack->getCurrentRequest();
//
    //     $payload       = $event->getData();
    //     $payload['ip'] = $request->getClientIp();
//
    //     $event->setData($payload);
//
    //     $header        = $event->getHeader();
    //     $header['cty'] = 'JWT';
//
    //     $event->setHeader($header);
    // }
}