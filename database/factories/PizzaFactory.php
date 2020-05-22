<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Pizzas;
use Faker\Generator as Faker;

$factory->define(Pizzas::class, function (Faker $faker) {
    return [
        'title'=>$faker->name,
        'description'=>$faker->text(50),
        'price'=>$faker->numberBetween(0,1500),
        'avartar'=>$faker->image(null, 200, 200)
    ];
});
