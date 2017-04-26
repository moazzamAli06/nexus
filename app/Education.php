<?php
namespace App;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id','from_date','to_date','institute','topics','degree','description','is_approved','prof_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    //  protected $hidden = [
    //      'file_Url'
    //  ];
}