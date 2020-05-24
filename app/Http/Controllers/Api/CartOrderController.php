<?php

namespace App\Http\Controllers\Api;

use App\CartOrders;
use App\Http\Controllers\Controller;
use App\Http\Resources\PizzaApiResource;
use App\Http\Resources\PizzaOrderResource;
use Illuminate\Http\Request;

class CartOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PizzaOrderResource::collection(CartOrders::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pizza_order = new CartOrders;
        $pizza_order->name = $request->name;
        $pizza_order->email = $request->email;
        $pizza_order->address = $request->address;
        $pizza_order->location = $request->location;
        $pizza_order->phone = $request->phone;
        $pizza_order->save();
        return new PizzaOrderResource($pizza_order);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cartOrders = CartOrders::findOrFail($id);
        return new PizzaOrderResource($cartOrders);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cartOrder = CartOrders::findOrFail($id);
        $cartOrder->delete();
        //return  new PizzaOrderResource($cartOrder);
        return response()->json("Order item successfully delete");

    }
}
