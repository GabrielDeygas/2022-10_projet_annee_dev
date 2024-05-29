<?php

namespace App\Controller;

use App\Entity\Key;
use App\Repository\KeyRepository;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use \Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class KeyController extends AbstractController
{
    /**
     * @var KeyRepository
     */
    private $keyRepo;

    public function __construct(KeyRepository $keyRepo)
    {
        $this->keyRepo = $keyRepo;
    }

    /**
     * @Route("/listkeys", name="key")
     * @return JsonResponse
     */
    public function listKeys(): JsonResponse
    {
        return $this->json($this->keyRepo->findAll());
    }

    /**
     * @Route("/createKey", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function createKey(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $serializer = $this->get('serializer');
        $key = $serializer->deserialize($request->getContent(), Key::class, 'json');
        $doctrine->getManager()->persist($key);
        $doctrine->getManager()->flush();

        return $this->json($this->keyRepo->findAll());
    }
}