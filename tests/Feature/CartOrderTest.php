<?php

namespace Tests\Feature;

use App\CartOrders;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CartOrderTest extends TestCase
{
    use RefreshDatabase;
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
     * @return void
     */
    public function test_that_a_pizza_order_can_be_added()
    {
        $this->withoutExceptionHandling();
        $orders = factory(CartOrders::class)->make();
        //dd($orders);
        $data = array(
            'name'=>$orders->name,
            'email'=>$orders->email,
            'address'=>$orders->address,
            'location'=>$orders->location,
            'phone'=>$orders->phone,
        );
        $response = $this->post(route('orders.api.add'),$data);
        $response->assertStatus(201);
        $this->assertCount(1, CartOrders::all());
    }
}
