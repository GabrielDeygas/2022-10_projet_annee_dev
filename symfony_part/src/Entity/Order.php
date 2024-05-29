<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\OrderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     collectionOperations={
 *          "get"={"access_control"="is_granted('ROLE_ADMIN')"},
 *          "post"
 *     },
 *     itemOperations={
 *      "get"={"access_control"="is_granted('ROLE_ADMIN')"},
 *      "put"={"access_control"="is_granted('ROLE_ADMIN')"},
 *      "delete"={"access_control"="is_granted('ROLE_ADMIN')"}
 *     }
 * )
 * @ORM\Entity(repositoryClass=OrderRepository::class)
 * @ORM\Table(name="`order`")
 */
class Order
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="orders")
     */
    public $user;

    /**
     * @ORM\OneToMany(targetEntity=LignOrder::class, mappedBy="ordertable")
     */
    private $lignOrders;

    /**
     * @ORM\Column(type="string", length=12)
     * @Groups({"order_read"})
     */
    private $companyName;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    public function __construct()
    {
        $this->lignOrders = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection<int, LignOrder>
     */
    public function getLignOrders(): Collection
    {
        return $this->lignOrders;
    }

    public function addLignOrder(LignOrder $lignOrder): self
    {
        if (!$this->lignOrders->contains($lignOrder)) {
            $this->lignOrders[] = $lignOrder;
            $lignOrder->setOrdertable($this);
        }

        return $this;
    }

    public function removeLignOrder(LignOrder $lignOrder): self
    {
        if ($this->lignOrders->removeElement($lignOrder)) {
            // set the owning side to null (unless already changed)
            if ($lignOrder->getOrdertable() === $this) {
                $lignOrder->setOrdertable(null);
            }
        }

        return $this;
    }

    public function getCompanyName(): ?string
    {
        return $this->companyName;
    }

    public function setCompanyName(string $companyName): self
    {
        $this->companyName = $companyName;

        return $this;
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

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

}
