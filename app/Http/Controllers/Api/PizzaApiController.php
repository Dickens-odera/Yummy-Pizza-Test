<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PizzaApiResource;
use Illuminate\Http\Request;
use App\Http\Resources\PostApiResource;
use App\Pizzas;

class PizzaApiController extends Controller
{
    public $pizzas;
    public function __construct(Pizzas $pizzas)
    {
        $this->middleware('api');
        $this->pizzas = $pizzas;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PizzaApiResource::collection($this->pizzas->all());
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
        $items = array(
            //'id'=>$request->id,
            'title'=>$request->title,
            'description'=>$request->description,
            'price'=>$request->price,
            'avartar'=>$request->avartar
        );
        $this->pizzas->create($items);
        return new PizzaApiResource($items);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $pizza = Pizzas::findOrFail($id);
        return new PizzaApiResource($pizza);
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
       $pizza = Pizzas::findOrFail($id);
       $pizza->update($request->all());
       return new PizzaApiResource($pizza);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pizza = Pizzas::findOrFail($id);
        $pizza->delete();
        return response()->json('Record Successfuly Deleted');
    }
}