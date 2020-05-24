<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CartOrders;
use Faker\Generator as Faker;

$factory->define(CartOrders::class, function (Faker $faker) {
    return [
        'name'=>$faker->name,
        'email'=>$faker->safeEmail,
        'address'=>$faker->address,
        'location'=>$faker->locale,
        'phone'=>$faker->phoneNumber
    ];
});
