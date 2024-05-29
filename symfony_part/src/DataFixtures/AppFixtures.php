<?php

namespace App\DataFixtures;

use App\Entity\Game;
use App\Entity\Key;
use App\Entity\LignOrder;
use App\Entity\Order;
use App\Entity\Platform;
use App\Entity\Trailer;
use App\Entity\Type;
use App\Entity\User;
use App\Entity\VideoYoutube;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use DateTime;

class AppFixtures extends Fixture
{
    private $pass_hasher;

    public function __construct(UserPasswordHasherInterface $password_hasher)
    {
        $this->pass_hasher = $password_hasher;
    }

    public function load(ObjectManager $manager): void
    {
        $arr_games_img      = ['ff7remakecover.jpeg', 'ff15cover.jpg', 'tboicover.jpeg', 'skyrimcover.jpeg',
            'thewitcher3cover.jpeg', 'xenobladechroniclescover.jpg', 'eldenringcover.jpg', 'persona5cover.jpeg',
            'yakuza6cover.jpeg'];
        $arr_games_name     = ['Final Fantasy 7 Remake', 'Final Fantasy 15', 'The Binding of Isaac', 'Skyrim', 'The Witcher 3',
            'Xenoblade Chronicles', 'Elden Ring', 'Persona 5', 'Yakuza 6'];
        $arr_trailer_vid    = ['ff7remaketrailer.mp4', 'ff15trailer.mp4', 'tboitrailer.mp4', 'skyrimtrailer.mp4',
            'thewitcher3trailer.mp4', 'xenobladetrailer.mp4', 'eldenringtrailer.mp4', 'persona5trailer.mp4',
            'yakuza6trailer.mp4'];
        $arr_platform_name  = ['Switch', 'PlayStation 4', 'XboX One', 'PC'];
        $arr_type_name      = ['RPG', 'Action', 'Aventure', 'Dark-Fantasy', 'Rogue-like'];
        $arr_date_release   = ['17-06-2022', '06-03-2018', '28-09-2011', '11-11-2011', '18-05-2015', '10-06-2010',
            '25-02-2022', '15-09-2016', '08-12-2016'];
        $arr_name_youtuber = ['At0miumVOD', 'At0miumVOD', 'MisterMV', 'AlderiateVOD', 'Bob Lennon', 'Alliance Rainbow',
            'At0miumVOD', 'AlexYuki', 'CohhCarnage'];
        $arr_links_youtube = [
            [
                'I0h69c5ihE0', '4lz7dlcmuFo', 'pUQEMT4A7is', 'tODK1gYo1gM', 'f9Pteibou6w', '_ltoVMWO6WY', 'flsknKrer7w',
                '39Zlyuvo7is', 'CW1hVjUOdjo', 'DgmBHBr1xTo', 'TjdKOKsNs90', 'mGKTGzvhbrI'
            ],
            [
                'WAd1UUgTV_I', 'sQo6OqiQ32c', 'w6ezlITORcY', 'e98SQmW6Znk', '7HX6fPDv5Qo', 'NRS8LJUEF9g', 'jqp3S22NBvk',
                '36pINX_iHLo', 'kReSByM5ghQ', 'po15mJCSJ00', 'PXhbJCc7Q1M', 'OG76P-GRvXg'
            ],
            [
                'efus_V-9izk', 'WvozEvamYZ0', 'tKoJWtHvVPg', 'e87HpThhfS8', 'YbEDuy-ZfXw', '6Zc_7KBgkvA', 'LGbE_WczCHM',
                'Zg0mkFeqL58', '3lX9RSGzNp0', '8bvjLufdrjs', 'sj9aXiX8W2c', 'zOOCRDB-fo8'
            ],
            [
                'mih2Wepd9z8', '98QIc_x4jsM', 'lf2CoC-vlt8', 'LtP9uEd8k94', 'Yl2ojtaFFA4', 'qWk2xAAw1aM', 'ltt7AwbKOi8',
                'w4TcYZXtPio', 'OXQi2aqo6E4', 'X5jwglPMcxA', 'XTOjQSPr7C0', 'wCW2QWoaIps'
            ],
            [
                'oQOW9O6yxQI', 'xgCNyyICIJY', '7_BCXMVHwtc', 'KEgeZaOII24', 'rylxVBfar_M', 'W3kvmFr88O0', 'Zer5Ep7YJbQ',
                'uJc2fTake8Y', 'x6go-o0TNd4', 'gTgVcK8E7tM', 'KHgaC_ZC7Ag', 'sq_aVmWhDjI'
            ],
            [
                'EAE34br20gw', 'GXvMId39Lv0', 'bfx9EsQt9W4', 'HngIORzVHjY', 'bnHXg06yDIc', 'iuCciPxPMYU', '-Fpmjl8DwIk',
                'RPk2NRNsBWE', '3WxifisMFkE', 'kHirq2q0ktg', 'pOVuttP722k', 'wqmR36gKj9Y'
            ],
            [
                'NNKo6xzit_s', 'Cx-wZnQquSQ', '0HBav8iR3-A', 'E_aW9iWajZ8', 'jTIYW9zZe5w', '0ALLU3hTw34', 'giCD1q7BWqo',
                'hoFRraotZbM', '3QtYoBcJO7g', 'yguaCTHNi3k', 'jT2ZOo5EsQ8', 'HBiNpaocNLA'
            ],

            [
                '-3o-Q_QoJvk', 'Y_APHeS1pmE', 'nMvTNzK3jD0', 'yHvIXsuhyzQ', 'N8V2-5bQmJA', 'akImCUC44Mg', 'WrbTu5uk1KE',
                'D-CiBiT5QRc', 'Pl9_sfGT1_0', 'MiQbkt7Xui8', 'HxJKtJKoMLA', 'Hb6EFqrHIyM'
            ],
            [
                'xZqnAUKCM80', 'bO9_WEgBCjo', 'iU3NgWrdT1w', 'jPMAI-QHlNk', 'N9U1KrrJ07I', '7QLRjLf8u14', 'wdT-UoFnCxw',
                'DAnVK9fad5U', 'hv6K9bwglqg', 'GEKBGpxiE4o', 'IW247LTTK_E', 'yTpUroHRClE'
            ],
        ];

        $faker = Factory::create('fr-FR');

        for($i = 0; $i < count($arr_trailer_vid); $i++) {
            $trailer = new Trailer();
            $trailer->setPathVideo($arr_trailer_vid[$i]);
            $manager->persist($trailer);
            $this->addReference('trailer' . $i, $trailer);
        }

        for($i = 0; $i < 10; $i++) {

            if($i === 0) {
                $user = new User();
                $user->setEmail('admin@admin.com')
                    ->setPassword($this->pass_hasher->hashPassword($user, 'admin'))
                    ->setRole("admin")
                    ->setFirstname($faker->firstName)
                    ->setLastname($faker->lastName)
                    ->setNickname($faker->userName)
                    ->setIsActive(1)
                    ->setCustomerIdStripe('fafjz');
                $manager->persist($user);
                $this->addReference('user' . $i, $user);
                }
            if ($i === 1) {
                $user = new User();
                $user->setEmail('toto@toto.com')
                    ->setPassword($this->pass_hasher->hashPassword($user, 'toto'))
                    ->setRole('user')
                    ->setFirstname($faker->firstName)
                    ->setLastname($faker->lastName)
                    ->setNickname($faker->userName)
                    ->setIsActive(1)
                    ->setCustomerIdStripe('fafjz');
                $manager->persist($user);
                $this->addReference('user' . $i, $user);
            }
            if ($i > 1) {
                $user = new User();
                $user->setEmail($faker->email)
                    ->setPassword($this->pass_hasher->hashPassword($user, $faker->password))
                    ->setRole('user')
                    ->setFirstname($faker->firstName)
                    ->setLastname($faker->lastName)
                    ->setNickname($faker->userName)
                    ->setCustomerIdStripe('fafjz')
                    ->setIsActive($faker->boolean);
                $manager->persist($user);
                $this->addReference('user' . $i, $user);
            }
        }

        for($i = 0; $i < count($arr_platform_name); $i++) {
            $platform = new Platform();
            $platform->setName($arr_platform_name[$i]);
            $manager->persist($platform);
            $this->addReference('platform' . $i, $platform);
        }

        for ($i = 0; $i < count($arr_type_name); $i++) {
            $type = new Type();
            $type->setName($arr_type_name[$i]);
            $manager->persist($type);
        }

        for ($i = 0; $i < count($arr_games_name); $i++) {
            $game = new Game();
            $game->setName($arr_games_name[$i])
                ->setDateRelease(new DateTime($arr_date_release[$i]))
                ->setDescription($faker->paragraph(3))
                ->setDeveloper($faker->company)
                ->setEditor($faker->company)
                ->setPathImg($arr_games_img[$i])
                ->setTrailer($this->getReference('trailer' . $i));
            $manager->persist($game);
            $this->addReference('game' . $i, $game);
        }

        for ($i = 0; $i < 100; $i++) {
            $prices = [2000, 3000, 4000];
            $prices_id = ['price_1M3hOdAzFZHUM3llGEHykOmW', 'price_1M3hOdAzFZHUM3llLxSNQVGI', 'price_1M3hOdAzFZHUM3llXdsmghBk'];
            $rand_price = rand(0,2);
            $rand_bool_sold_out = rand(0,1);
            $rand_int_user = rand(1,9);
            $index_game = rand(1, count($arr_games_name)-1);
            $key = new Key();
            $key->setGame($this->getReference('game' . $index_game))
                ->setPrice($prices[$rand_price])
                ->setPlatform($this->getReference('platform' . rand(0, count($arr_platform_name)-1)))
                ->setPriceId($prices_id[$rand_price])
                ->setCode('KEYNUMBER' . $i);
            if ($rand_bool_sold_out) {
                $key->setSoldOut($faker->dateTimeBetween('-30 days', 'now'));
            }
            $manager->persist($key);
            $this->addReference('key' . $i, $key);
        }

        for ($i = 0; $i < 25; $i++) {
            $rand_index_user = rand(1,8);
            $order = new Order();
            $order->setCompanyName('WatchAndPlay')
                ->setFirstname($faker->firstName)
                ->setName($faker->lastName)
                ->setEmail($faker->email)
                ->setUser($this->getReference('user' . $rand_index_user));
            $manager->persist($order);
            $this->addReference('order' . $i, $order);
        }

        for ($i = 0; $i < 9; $i++) {

                for ($j = 0; $j < count($arr_links_youtube[$i]); $j++) {
                    $video = new VideoYoutube();
                    $video->setGame($this->getReference('game' . $i))
                        ->setEpisode('Episode' . ($j+1))
                        ->setYoutuber($arr_name_youtuber[$i])
                        ->setLink($arr_links_youtube[$i][$j]);
                    $manager->persist($video);
                }
        }

        $k = 0;
        for ($i = 0; $i < 25; $i++) {

            $rand_item_bought = rand(1, 4);

            for ($j = 0; $j < $rand_item_bought; $j++) {
                $lign_order = new LignOrder();
                $lign_order->setKeytable($this->getReference('key'. $k))
                           ->setOrdertable($this->getReference('order' . $i));
                $k++;
                $manager->persist($lign_order);
            }
        }

        $manager->flush();
    }
}
