<?php

namespace App\Controller;

use App\Entity\LignOrder;
use App\Repository\LignOrderRepository;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class LignOrderController extends AbstractController
{

    public function __construct(LignOrderRepository $lignOrderRepo)
    {
        $this->lignOrderRepo = $lignOrderRepo;
    }

    /**
     * @Route("/listlignsorder", methods={"GET"})
     * @return void
     */
    public function listLignOrders(): JsonResponse
    {
        return $this->json($this->lignOrderRepo->findAll());
    }

    /**
     * @Route("/createlignorder", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function createLignOrder(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $serializer = $this->get('serializer');
        $lignOrder = $serializer->deserialize($request->getContent(), LignOrder::class, 'json');
        $doctrine->getManager()->persist($lignOrder);
        $doctrine->getManager()->flush();

        return $this->json($this->lignOrderRepo->findAll());
    }

}