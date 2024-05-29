<?php

namespace App\DataPersister;

use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserDataPersister implements DataPersisterInterface
{
    private $entityManager;
    private $pass_hasher;

    public function __construct(EntityManagerInterface $entityManager, UserPasswordHasherInterface $password_hasher)
    {
        $this->entityManager = $entityManager;
        $this->pass_hasher = $password_hasher;
    }

    public function supports($data): bool
    {
        return $data instanceof User;
    }

    /**
     * @param User $data
     */
    public function persist($data)
    {
        if($data->getPlainPassword()) {
            $data->setPassword(
                $this->pass_hasher->hashPassword($data, $data->getPlainPassword())
            );
            $data->eraseCredentials();
        }

        $this->entityManager->persist($data);
        $this->entityManager->flush();
    }

    public function remove($data)
    {
        $this->entityManager->remove($data);
        $this->entityManager->flush();
    }
}
