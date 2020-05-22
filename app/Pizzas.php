<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pizzas extends Model
{
    /**
     * @var string 
     */
    protected $table = 'pizzas';
    /**
     * @var array 
     */
    protected $fillable = ['title','description','price','avartar'];
}
