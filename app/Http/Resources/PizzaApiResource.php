<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PizzaApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return array(
            'id'=>$request->id,
            'title'=>$request->title,
            'description'=>$request->description,
            'avartar'=>$request->avartar
        );
    }
    public function with($request)
    {
        return array(
            'version'=>'0.0.1',
            'author'=>array(
                'name'=>'Dickens Odera',
                'email'=>'dickensodera9@gmail.com',
                'github'=>'Dickens-odera',
                'social'=>array(
                    'twitter'=>'@dickensodera',
                    'facebook'=>'dickens.odera',
                    'linkedin'=>'Dickens Odera'
                )
            )
        );
    }
}
