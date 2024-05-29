<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\LignOrderRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"order_read"}},
 *     denormalizationContext={"groups"={"order_write"}},
 *           collectionOperations={
 *          "get",
 *          "post"
 *     },
 *     itemOperations={
 *      "get"={"access_control"="is_granted('ROLE_ADMIN')"},
 *      "put"={"access_control"="is_granted('ROLE_ADMIN')"},
 *      "delete"={"access_control"="is_granted('ROLE_ADMIN')"}
 *     }
 * )
 * @ORM\Entity(repositoryClass=LignOrderRepository::class)
 * @ApiFilter(SearchFilter::class, properties={"ordertable": "exact"})
 */
class LignOrder
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"order_read"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Order::class, inversedBy="lignOrders")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"order_read"})
     */
    private $ordertable;

    /**
     * @ORM\OneToOne(targetEntity=Key::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"order_read"})
     */
    private $keytable;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrdertable(): ?Order
    {
        return $this->ordertable;
    }

    public function setOrdertable(?Order $ordertable): self
    {
        $this->ordertable = $ordertable;

        return $this;
    }

    public function getKeytable(): ?Key
    {
        return $this->keytable;
    }

    public function setKeytable(Key $keytable): self
    {
        $this->keytable = $keytable;

        return $this;
    }
}
