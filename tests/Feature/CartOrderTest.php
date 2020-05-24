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
    /**
     * @test
     * @return void
     */
    public function test_that_pizza_orders_can_be_listed()
    {
        $this->withoutExceptionHandling();
        $data = factory(CartOrders::class)->make();
        $response = $this->get(route('orders.api.list'),array(
            'name'=>$data->name,
            'email'=>$data->email,
            'address'=>$data->address,
            'location'=>$data->location,
            'phone'=>$data->phone
        ));
        $response->assertOk();
    }
    /**
     * @test
     * 
     * @return void
     */
    public function test_than_a_single_order_item_can_be_shown()
    {
        $this->withoutExceptionHandling();
        $item = factory(CartOrders::class)->create();
        $response = $this->get(route('orders.api.show', $item->id),[
            'name'=>$item->name,
            'email'=>$item->email,
            'address'=>$item->address,
            'location'=>$item->location,
            'phone'=>$item->phone
        ]);
        $response->assertStatus(200);
    }
    /**
     * @test
     * 
     * @return void
     */
    public function test_that_an_order_item_can_be_updated()
    {
        $this->withoutExceptionHandling();
        $order_item = factory(CartOrders::class)->create();
        $data = array(
            'name'=>$order_item->name,
            'email'=>$order_item->email,
            'address'=>$order_item->address,
            'location'=>$order_item->location,
            'phone'=>$order_item->phone
        );
        $response = $this->put(route('orders.api.update',$order_item->id),$data);
        $response->assertStatus(200);
    }
    /**
     * @test
     * 
     * @return void
     */
    public function test_that_an_order_item_can_be_deleted()
    {
        $this->withoutExceptionHandling();
        $item = factory(CartOrders::class)->create();
        $response = $this->delete(route('orders.api.delete',$item->id));
        $response->assertStatus(200);
    }
}
