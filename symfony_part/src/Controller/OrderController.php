<?php

namespace App\Controller;

use App\Entity\Order;
use App\Repository\OrderRepository;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use \Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class OrderController extends AbstractController
{
    /**
     * @var OrderRepository
     */
    private $orderRepo;

    public function __construct(OrderRepository $orderRepo)
    {
        $this->orderRepo = $orderRepo;;
    }

    /**
     * @Route("/listorders", methods={"GET"})
     * @return JsonResponse
     */
    public function listOrders(): JsonResponse
    {
        return $this->json($this->orderRepo->findAll());
    }

    /**
     * @Route("/createorder", methods={"POST"})
     */
    public function createOrder(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $serializer = $this->get('serializer');
        $order = $serializer->deserialize($request->getContent(), Order::class, 'json');
        $doctrine->getManager()->persist($order);
        $doctrine->getManager()->flush();
        return $this->json($this->orderRepo->findAll());
    }
}