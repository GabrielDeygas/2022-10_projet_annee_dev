<?php

namespace App\Controller;

use App\Entity\VideoYoutube;
use App\Repository\VideoYoutubeRepository;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use \Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class VideoYoutubeController extends AbstractController
{
    /**
     * @var VideoYoutubeRepository
     */
    private $videoYtRepo;

    public function __construct(VideoYoutubeRepository $videoYtRepo)
    {
        $this->videoYtRepo = $videoYtRepo;
    }

    /**
     * @Route("listvideosyt")
     * @return JsonResponse
     */
    public function listVideosYt(): JsonResponse
    {
        return $this->json($this->videoYtRepo->findAll());
    }

    /**
     * @Route("/createvideoyt", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function createVideoYt(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $serializer = $this->get('serializer');
        $videoYt = $serializer->deserialize($request->getContent(), VideoYoutube::class, 'json');
        $doctrine->getManager()->persist($videoYt);
        $doctrine->getManager()->flush();

        return $this->json($this->videoYtRepo->findAll());
    }

}