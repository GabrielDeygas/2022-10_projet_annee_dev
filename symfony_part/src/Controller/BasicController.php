<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class BasicController extends AbstractController
{

    /**
     * @var UserRepository
     */
    private $userRepo;

    public function __construct(UserRepository $userRepo)
    {
        $this->userRepo = $userRepo;
    }

    /**
     * @Route("/listusers", methods={"GET"})
     * @return JsonResponse
     */
    public function listUser(): JsonResponse
    {
        return $this->json($this->userRepo->findAll());
    }

    /**
     * @Route("/createuser", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function createUser(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $serializer = $this->get('serializer');
        $user = $serializer->deserialize($request->getContent(), User::class, 'json');
        $doctrine->getManager()->persist($user);
        $doctrine->getManager()->flush();

        return $this->json($this->userRepo->findAll());
    }
}