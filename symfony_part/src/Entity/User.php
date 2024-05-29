<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\SerializedName;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     collectionOperations={
 *          "get",
 *          "post"={"access_control"="is_granted('IS_AUTHENTICATED_ANONYMOUSLY')"},
 *     },
 *     itemOperations={
 *      "get"={"access_control"="is_granted('ROLE_ADMIN') or is_granted('ROLE_USER') and object == user"},
 *      "put"={"access_control"="is_granted('ROLE_USER') and object == user or is_granted('ROLE_ADMIN')"},
 *      "delete"={"access_control"="is_granted('ROLE_ADMIN')"}
 *     },
 *     normalizationContext={"groups"={"read"}},
 *     denormalizationContext={"groups"={"user:write"}},
 * )

 * @ApiFilter(PropertyFilter::class)
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @method string getUserIdentifier()
 */
class User implements UserInterface, \Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface
{

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read", "user:write"})
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $password;

    /**
     * @Groups("user:write")
     * @SerializedName("password")
     */
    private $plainPassword;

    /**
     * @Groups("user:write")
     * @ORM\Column(type="string", length=30)
     * @Groups({"read"})
     */
    private $nickname;

    /**
     * @Groups("user:write")
     * @ORM\Column(type="string", length=150)
     * @Groups({"read"})
     */
    private $firstname;

    /**
     * @Groups("user:write")
     * @ORM\Column(type="string", length=155)
     * @Groups({"read"})
     */
    private $lastname;

    /**
     * @Groups("user:write")
     * @ORM\Column(type="string", length=255)
     * @Groups({"read"})
     */
    private $customerIdStripe;

    /**
     * @ORM\OneToMany(targetEntity=Order::class, mappedBy="user")
     * @Groups({"read"})
     */
    private $orders;

    /**
     * @Groups("user:write")
     * @ORM\Column(type="string", length=20)
     * @Groups({"read"})
     */
    private $role;

    /**
     * @Groups("user:write")
     * @ORM\Column(type="boolean", options={"default" : 1})
     */
    private $isActive;

    public function __construct()
    {
        $this->orders = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getPassword(): ?string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getNickname(): ?string
    {
        return $this->nickname;
    }

    public function setNickname(string $nickname): self
    {
        $this->nickname = $nickname;

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

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getCustomerIdStripe(): ?string
    {
        return $this->customerIdStripe;
    }

    public function setCustomerIdStripe(string $customerIdStripe): self
    {
        $this->customerIdStripe = $customerIdStripe;

        return $this;
    }

    /**
     * @return Collection<int, Order>
     */
    public function getOrders(): ?Collection
    {
        return $this->orders;
    }

    public function addOrder(Order $order): self
    {
        if (!$this->orders->contains($order)) {
            $this->orders[] = $order;
            $order->setUser($this);
        }

        return $this;
    }

    public function removeOrder(Order $order): self
    {
        if ($this->orders->removeElement($order)) {
            // set the owning side to null (unless already changed)
            if ($order->getUser() === $this) {
                $order->setUser(null);
            }
        }

        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(string $role): self
    {
        $this->role = $role;

        return $this;
    }

    public function getRoles()
    {
        if ($this->role === 'user')   {
            return ['ROLE_USER'];
        }
        if ($this->role === 'admin') {
            return ['ROLE_ADMIN'];
        }
    }

    public function getSalt()
    {
        return null;
    }

    public function eraseCredentials()
    {
        $this->plainPassword = null;
    }

    public function getUsername(): string
    {
        return $this->email;
    }

    public function __call($name, $arguments)
    {
        // TODO: Implement @method string getUserIdentifier()
    }

    public function isIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }
    public function setPlainPassword(string $plainPassword): self
    {
        $this->plainPassword = $plainPassword;
        return $this;
    }

}
