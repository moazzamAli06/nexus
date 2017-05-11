<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Timetable extends Model
{
    //
     protected $fillable = [
        'id','day','time_to','time_from','pro_id'
        ];

}
