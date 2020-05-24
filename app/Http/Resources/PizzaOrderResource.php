<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PizzaOrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return array(
            'id'=>$this->id,
            'name'=>$this->name,
            'email'=>$this->email,
            'location'=>$this->location,
            'address'=>$this->address,
            'phone'=>$this->phone
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
                    'linkedin'=>'https://www.linkedin.com/in/dickens-odera-135782167/'
                )
            )
        );
    }
}
