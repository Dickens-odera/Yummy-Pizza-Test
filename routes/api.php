<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['prefix' => 'v1', 'middleware' => 'api'], function()
{
    Route::group(['prefix' => 'pizzas'], function () {
        Route::post('add','Api\PizzaApiController@store')->name('pizzas.api.add');
        Route::get('list','Api\PizzaApiController@index')->name('pizzas.api.all');
        Route::put('update/{id}','Api\PizzaApiController@update')->name('pizzas.api.update');
        Route::delete('delete/{id}','Api\PizzaApiController@destroy')->name('pizzas.api.delete');
        Route::get('show/{id}','Api\PizzaApiController@show')->name('pizzas.api.show');    
    });

    Route::group(['prefix'=>'orders'], function(){
        Route::post('add','Api\CartOrderController@store')->name('orders.api.add');
        Route::get('list','Api\CartOrderController@index')->name('orders.api.list');
        Route::get('show/{id}','Api\CartOrderController@show')->name('orders.api.show');
        Route::delete('delete/{id}','Api\CartOrderController@destroy')->name('orders.api.delete');
    });
});
