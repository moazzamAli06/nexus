<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    //
     protected $fillable = [
        'username','imageUrl','country','city', 'timezone', 'dob', 'gender', 'user_id',
        'short_info', 'long_info', 'skype_id', 'face_time', 'google_id', 'qq',
        'created_at'
    ];

}
