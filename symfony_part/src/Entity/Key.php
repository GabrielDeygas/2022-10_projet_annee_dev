<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\KeyRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"key_read"}},
 *     denormalizationContext={"groups"={"key_write"}},
 *       collectionOperations={
 *          "get"={"access_control"="is_granted('ROLE_ADMIN')"},
 *          "post"={"access_control"="is_granted('ROLE_ADMIN')"}
 *     },
 *     itemOperations={
 *      "get"={"access_control"="is_granted('ROLE_ADMIN')"},
 *      "put"={"access_control"="is_granted('ROLE_ADMIN')"},
 *      "delete"={"access_control"="is_granted('ROLE_ADMIN')"}
 *     }
 * )
 * @ORM\Entity(repositoryClass=KeyRepository::class)
 * @ORM\Table(name="`key`")
 * @ApiFilter(SearchFilter::class, properties={"id": "exact"})
 */
class Key
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"order_read"})
     * @Groups({"key_read"})
     * @Groups({"game_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"order_read"})
     * @Groups({"key_read"})
     * @Groups({"key_write"})
     */
    private $code;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"key_read"})
     * @Groups({"key_write"})
     * @Groups({"game_read"})
     */
    private $soldOut;

    /**
     * @ORM\ManyToOne(targetEntity=Game::class, inversedBy="gameKeys")
     * @Groups({"order_read"})
     * @Groups({"key_read"})
     * @Groups({"key_write"})
     */
    private $game;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"order_read"})
     * @Groups({"key_read"})
     * @Groups({"key_write"})
     * @Groups({"game_read"})
     */
    private $price;

    /**
     * @ORM\ManyToOne(targetEntity=Platform::class)
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"key_read"})
     * @Groups({"key_write"})
     * @Groups({"game_read"})
     */
    private $platform;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"order_read"})
     * @Groups({"key_read"})
     * @Groups({"key_write"})
     * @Groups({"game_read"})
     */
    private $priceId;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getSoldOut(): ?\DateTimeInterface
    {
        return $this->soldOut;
    }

    public function setSoldOut(?\DateTimeInterface $soldOut): self
    {
        $this->soldOut = $soldOut;

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

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getPlatform(): ?Platform
    {
        return $this->platform;
    }

    public function setPlatform(?Platform $platform): self
    {
        $this->platform = $platform;

        return $this;
    }

    public function getPriceId(): ?string
    {
        return $this->priceId;
    }

    public function setPriceId(string $priceId): self
    {
        $this->priceId = $priceId;

        return $this;
    }
}
