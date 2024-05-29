<?php

namespace App\Controller;


use App\Entity\Game;
use App\Repository\GameRepository;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use \Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class GameController extends AbstractController
{
    /**
     * @var GameRepository
     */
    private $gameRepo;


    public function __construct(GameRepository $gameRepo)
    {
        $this->gameRepo = $gameRepo;
    }

    /**
     * @Route("/listgames", methods={"GET"})
     * @return JsonResponse
     */
    public function listGames(): JsonResponse
    {
        return $this->json($this->gameRepo->findAll());
    }

    /**
     * @Route("/creategame", methods={"POST"})
     * @param Request $request
     * @param ManagerRegistry $doctrine
     * @return JsonResponse
     */
    public function createGame(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $serializer = $this->get('serializer');
        $game = $serializer->deserialize($request->getContent(), Game::class, 'json');
        $doctrine->getManager()->persist($game);
        $doctrine->getManager()->flush();

        return $this->json($this->gameRepo->findAll());
    }

}