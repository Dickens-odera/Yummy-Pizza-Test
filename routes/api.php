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
    Route::post('pizzas','Api\PizzaApiController@store')->name('pizzas.api.add');
    Route::get('pizzas','Api\PizzaApiController@index')->name('pizzas.api.all');
    Route::put('pizzas/{id}','Api\PizzaApiController@update')->name('pizzas.api.update');
    Route::delete('pizzas/{id}','Api\PizzaApiController@destroy')->name('pizzas.api.delete');
    Route::get('pizza/{id}','Api\PizzaApiController@show')->name('pizzas.api.show');
});
