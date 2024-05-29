<?php

namespace App\Controller;


use App\Entity\Trailer;
use App\Repository\TrailerRepository;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use \Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TrailerController extends AbstractController
{

    /**
     * @var TrailerRepository
     */
    private $trailerRepo;

    public function __construct(TrailerRepository $trailerRepo)
    {
        $this->trailerRepo = $trailerRepo;
    }

    /**
     * @Route("/listtrailers", methods={"GET"}))
     * @return JsonResponse
     */
    public function listTrailers(): JsonResponse
    {
        return $this->json($this->trailerRepo->findAll());
    }

    /**
     * @Route("/createtrailer", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function createTrailer(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $serializer = $this->get('serializer');
        $trailer = $serializer->deserialize($request->getContent(), Trailer::class, 'json');
        $doctrine->getManager()->persist($trailer);
        $doctrine->getManager()->flush();

        return $this->json($this->trailerRepo->findAll());
    }

}