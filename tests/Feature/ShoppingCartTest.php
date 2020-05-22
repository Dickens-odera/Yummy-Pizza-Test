<?php

namespace Tests\Feature;

use App\Pizzas;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Http\UploadedFile;

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
        $response = $this->get(route('pizzas.api.all'),array(
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
    /**
     * @test
     */
    public function test_that_a_pizza_item_can_be_updated()
    {
        $this->withoutExceptionHandling();
        $item = factory(Pizzas::class)->create();
        $this->assertInstanceOf(Pizzas::class, $item);

        $temp_data = factory(Pizzas::class)->make([
            'title'=>'test',
            'description'=>'test desc',
            'price'=>1000,
            'avartar'=>'test image'
        ]);
        $data = [
            'title'=>$temp_data->title,
            'description'=>$temp_data->description,
            'price'=>$temp_data->price,
            'avartar'=>$temp_data->avartar
        ];
        $this->assertNotEquals($item->title, $data['title']);
        //$item->fresh();
        $response = $this->put(route('pizzas.api.update', $item->id), $data);
        $response->assertStatus(200);
    }
    /**
     * @test
     */
    public function test_that_a_pizza_item_can_be_deleted()
    {
        $this->withoutExceptionHandling();
        $item = factory(Pizzas::class)->create();
        $this->assertInstanceOf(Pizzas::class, $item);

        $pizza_item = factory(Pizzas::class)->make();
        $data = array(
            'title'=>$pizza_item->title,
            'description'=>$pizza_item->description,
            'price'=>$pizza_item->price,
            'avatar'=>$pizza_item->avartar
        );
        $response = $this->delete(route('pizzas.api.delete',$item->id),$data);
        $response->assertStatus(200);
    }
    /**
     * @test
     */
    public function test_that_a_single_pizza_item_can_be_shown()
    {
        $this->withoutExceptionHandling();
        $data = factory(Pizzas::class)->create();
        $response = $this->get(route('pizzas.api.show',$data->id),[
            'title'=>$data->title,
            'description'=>$data->descreption,
            'price'=>$data->price,
            'avartar'=>$data->avartar
        ]);
        $response->assertOk();
    }
}
