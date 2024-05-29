<?php

namespace App\Controller;

use App\Entity\Platform;
use App\Repository\PlatformRepository;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use \Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PlatformController extends AbstractController
{

    /**
     * @var PlatformRepository
     */
    private $platformRepo;

    public function __construct(PlatformRepository $platformRepo)
    {
        $this->platformRepo = $platformRepo;
    }

    /**
     * @Route("/listplatforms", methods={"GET"})
     * @return JsonResponse
     */
    public function listPlatforms(): JsonResponse
    {
        return $this->json($this->platformRepo->findAll());
    }

    /**
     * @Route("/createplatform", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function createPlatform(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $serializer = $this->get('serializer');
        $platform = $serializer->deserialize($request->getContent(), Platform::class, 'json');
        $doctrine->getManager()->persist($platform);
        $doctrine->getManager()->flush();

        return $this->json($this->platformRepo->findAll());
    }

}