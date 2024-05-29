<?php

use Stripe\Stripe;
use Stripe\Checkout\Session;

require 'vendor/autoload.php';

// This is your test secret API key.
Stripe::setApiKey('sk_test_51Ld7NuAzFZHUM3llbQfISfMXVziyuKuWPYq4vh6Nbjf5TjCUhrExUIod5x7uBouOo8xPAAUtBNzM1KSMoTBE16qk00AqXqdRic');

header('Content-Type: application/json');

$YOUR_DOMAIN = 'http://localhost:3000';

$checkout_session = Session::create([
    'line_items' => [[
        'price' => '{{PRICE_ID}}',
        'quantity' => 1,
    ]],
    'mode' => 'payment',
    'success_url' => $YOUR_DOMAIN . '?success=true',
    'cancel_url' => $YOUR_DOMAIN . '?canceled=true',
]);


header("HTTP/1.1 303 See Other");
header("Location: " . $checkout_session->url);