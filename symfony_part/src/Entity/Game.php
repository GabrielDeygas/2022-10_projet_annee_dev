<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\GameRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"game_read"}},
 *       collectionOperations={
 *          "get",
 *          "post"={"access_control"="is_granted('ROLE_ADMIN')"}
 *     },
 *     itemOperations={
 *      "get",
 *      "put"={"access_control"="is_granted('ROLE_ADMIN')"},
 *      "delete"={"access_control"="is_granted('ROLE_ADMIN')"}
 *     }
 * )
 * @ORM\Entity(repositoryClass=GameRepository::class)
 */
class Game
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"key_read"})
     * @Groups({"game_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=155)
     * @Groups({"order_read"})
     * @Groups({"key_read"})
     * @Groups({"game_read"})
     */
    private $name;

    /**
     * @ORM\Column(type="date")
     * @Groups({"game_read"})
     */
    private $dateRelease;

    /**
     * @ORM\Column(type="string", length=155)
     * @Groups({"game_read"})
     */
    private $editor;

    /**
     * @ORM\Column(type="string", length=155)
     * @Groups({"game_read"})
     */
    private $developer;

    /**
     * @ORM\Column(type="text")
     * @Groups({"game_read"})
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"game_read"})
     */
    private $pathImg;

    /**
     * @ORM\OneToOne(targetEntity=Trailer::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"game_read"})
     */
    private $trailer;

    /**
     * @ORM\OneToMany(targetEntity=Key::class, mappedBy="game")
     * @Groups({"game_read"})
     */
    private $gameKeys;

    /**
     * @ORM\OneToMany(targetEntity=VideoYoutube::class, mappedBy="game")
     * @Groups({"game_read"})
     */
    private $videoYoutubes;

    /**
     * @ORM\ManyToMany(targetEntity=Platform::class, inversedBy="games")
     * @Groups({"game_read"})
     */
    private $platform;

    /**
     * @ORM\ManyToMany(targetEntity=Type::class, inversedBy="games")
     * @Groups({"game_read"})
     */
    private $types;

    public function __construct()
    {
        $this->gameKeys = new ArrayCollection();
        $this->videoYoutubes = new ArrayCollection();
        $this->platform = new ArrayCollection();
        $this->types = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDateRelease(): ?\DateTimeInterface
    {
        return $this->dateRelease;
    }

    public function setDateRelease(\DateTimeInterface $dateRelease): self
    {
        $this->dateRelease = $dateRelease;

        return $this;
    }

    public function getEditor(): ?string
    {
        return $this->editor;
    }

    public function setEditor(string $editor): self
    {
        $this->editor = $editor;

        return $this;
    }

    public function getDeveloper(): ?string
    {
        return $this->developer;
    }

    public function setDeveloper(string $developer): self
    {
        $this->developer = $developer;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPathImg(): ?string
    {
        return $this->pathImg;
    }

    public function setPathImg(string $pathImg): self
    {
        $this->pathImg = $pathImg;

        return $this;
    }

    public function getTrailer(): ?Trailer
    {
        return $this->trailer;
    }

    public function setTrailer(Trailer $trailer): self
    {
        $this->trailer = $trailer;

        return $this;
    }

    /**
     * @return Collection<int, Key>
     */
    public function getGameKeys(): Collection
    {
        return $this->gameKeys;
    }

    public function addGameKey(Key $gameKey): self
    {
        if (!$this->gameKeys->contains($gameKey)) {
            $this->gameKeys[] = $gameKey;
            $gameKey->setGame($this);
        }

        return $this;
    }

    public function removeGameKey(Key $gameKey): self
    {
        if ($this->gameKeys->removeElement($gameKey)) {
            // set the owning side to null (unless already changed)
            if ($gameKey->getGame() === $this) {
                $gameKey->setGame(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, VideoYoutube>
     */
    public function getVideoYoutubes(): Collection
    {
        return $this->videoYoutubes;
    }

    public function addVideoYoutube(VideoYoutube $videoYoutube): self
    {
        if (!$this->videoYoutubes->contains($videoYoutube)) {
            $this->videoYoutubes[] = $videoYoutube;
            $videoYoutube->setGame($this);
        }

        return $this;
    }

    public function removeVideoYoutube(VideoYoutube $videoYoutube): self
    {
        if ($this->videoYoutubes->removeElement($videoYoutube)) {
            // set the owning side to null (unless already changed)
            if ($videoYoutube->getGame() === $this) {
                $videoYoutube->setGame(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Platform>
     */
    public function getPlatform(): Collection
    {
        return $this->platform;
    }

    public function addPlatform(Platform $platform): self
    {
        if (!$this->platform->contains($platform)) {
            $this->platform[] = $platform;
        }

        return $this;
    }

    public function removePlatform(Platform $platform): self
    {
        $this->platform->removeElement($platform);

        return $this;
    }

    /**
     * @return Collection<int, Type>
     */
    public function getTypes(): Collection
    {
        return $this->types;
    }

    public function addType(Type $type): self
    {
        if (!$this->types->contains($type)) {
            $this->types[] = $type;
        }

        return $this;
    }

    public function removeType(Type $type): self
    {
        $this->types->removeElement($type);

        return $this;
    }
}
