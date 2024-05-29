<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\VideoYoutubeRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ApiResource(
 *           collectionOperations={
 *          "get",
 *          "post"={"access_control"="is_granted('ROLE_ADMIN')"}
 *     },
 *     itemOperations={
 *      "get",
 *      "put"={"access_control"="is_granted('ROLE_ADMIN')"},
 *      "delete"={"access_control"="is_granted('ROLE_ADMIN')"}
 *     }
 * )
 * @ORM\Entity(repositoryClass=VideoYoutubeRepository::class)
 */
class VideoYoutube
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
    private $link;

    /**
     * @ORM\ManyToOne(targetEntity=Game::class, inversedBy="videoYoutubes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $game;

    /**
     * @ORM\Column(type="string", length=155)
     * @Groups({"game_read"})
     */
    private $youtuber;

    /**
     * @ORM\Column(type="string", length=30)
     * @Groups({"game_read"})
     */
    private $episode;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getGame(): ?Game
    {
        return $this->game;
    }

    public function setGame(?Game $game): self
    {
        $this->game = $game;

        return $this;
    }

    public function getYoutuber(): ?string
    {
        return $this->youtuber;
    }

    public function setYoutuber(string $youtuber): self
    {
        $this->youtuber = $youtuber;

        return $this;
    }

    public function getEpisode(): ?string
    {
        return $this->episode;
    }

    public function setEpisode(string $episode): self
    {
        $this->episode = $episode;

        return $this;
    }
}
