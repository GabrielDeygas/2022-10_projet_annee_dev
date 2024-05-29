<?php

namespace App\Controller;

use App\Entity\Type;
use App\Repository\TypeRepository;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use \Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TypeController extends AbstractController
{

    /**
     * @var TypeRepository
     */
    private $typeRepo;

    public function __construct(TypeRepository $typeRepo)
    {
        $this->typeRepo = $typeRepo;
    }

    /**
     * @Route("/listtypes", methods={"GET"}))
     * @return JsonResponse
     */
    public function listTypes(): JsonResponse
    {
        return $this->json($this->typeRepo->findAll());
    }

    /**
     * @Route("/createtype", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function createType(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $serializer = $this->get('serializer');
        $type = $serializer->deserialize($request->getContent(), Type::class, 'json');
        $doctrine->getManager()->persist($type);
        $doctrine->getManager()->flush();

        return $this->json($this->typeRepo->findAll());
    }
}