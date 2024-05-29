<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\TrailerRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ApiResource(
 *     collectionOperations={
 *          "get",
 *          "post" ={"access_control"="is_granted('ROLE_ADMIN')"}
 *     },
 *     itemOperations={
 *      "get",
 *      "put"={"access_control"="is_granted('ROLE_ADMIN')"},
 *      "delete"={"access_control"="is_granted('ROLE_ADMIN')"}
 *     }
 * )
 * @ORM\Entity(repositoryClass=TrailerRepository::class)
 */
class Trailer
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"game_read"})
     */
    private $pathVideo;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPathVideo(): ?string
    {
        return $this->pathVideo;
    }

    public function setPathVideo(string $pathVideo): self
    {
        $this->pathVideo = $pathVideo;

        return $this;
    }
}
