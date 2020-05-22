<?php

namespace Tests\Feature;

use App\Pizzas;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ShoppingCartTest extends TestCase
{
    use RefreshDataBase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    /**
     * @test
     */
    public function test_that_pizza_items_get_loaded_on_home_page()
    {
        $this->withoutExceptionHandling();
        $data = factory(Pizzas::class)->make();
        $response = $this->get(route('pizzas.all'),array(
            'title'=>$data->title,
            'description'=>$data->description,
            'price'=>$data->price,
            'avartar'=>$data->avartar
        ));
        $response->assertStatus(200);
    }
    /**
     * @test
     */
    public function test_that_a_pizza_item_can_be_added()
    {
        $this->withoutExceptionHandling();
        $items = factory(Pizzas::class)->make();
        $response = $this->post(route('pizzas.api.add'),[
            'title'=>$items->title,
            'description'=>$items->description,
            'price'=>$items->price,
            'avartar'=>$items->avartar
        ]);

        $response->assertOk();
        $this->assertCount(1, Pizzas::all());
    }
}
