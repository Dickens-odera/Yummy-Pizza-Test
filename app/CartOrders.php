<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CartOrders extends Model
{
    /**
     * @var string 
     */
    protected $table = 'cart_orders';
    /**
     * @var array 
     */
    protected $fillable = ['id','name','email','address','location','phone'];
}
