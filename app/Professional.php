<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Professional extends Model
{
    //
     protected $fillable = [
        'id','username','imageUrl','social_id','account_id','country', 'city', 'living_country', 'C_fname', 'C_lname',
        'C_streetadress', 'C_city', 'C_state', 'C_zip', 'C_country', 'C_phone',
        'C_email', 'video_url', 'is_show_publicity', 'brief_into', 'long_intro', 'availble_status',
        'created_at'
    ];

}