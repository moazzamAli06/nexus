<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Professional;
use App\Http\Requests;
use App\User;
use DateTime;
use App\Http\Controllers\Controller;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $now = new DateTime();
        // $teacher = new Student();
        //$profile->name = $request->input('name');
        //$profile->id = $request->input('id');
        // $teacher->country = $request->input('country');
        //$profile->city = $request->input('city');
        // $teacher->city = $request->input('city');;
        // $teacher->timezone = $now;//$request->input('timezone');
        // $teacher->dob = $request->input('month') .'/'. $request->input('day') .'/'. $request->input('year');
        // $teacher->gender = $request->input('gender');
        // $teacher->user_id = $request->input('user_id');
        // $profile->short_info = $profile->input('short_info');
        // $profile->long_info = $profile->input('long_info');
        // $profile->skype_id = $profile->input('skype_id');
        // $profile->face_time = $profile->input('face_time');
        // $profile->google_id = $profile->input('google_id');
        // $profilr->qq = $profile->input('qq');
        // $profile->save();
        // return $request->input('short_info');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
         $user = $request->session()->get('user');
         $value = Professional::where('user_id',$user->id) -> first();
         return $value;
         
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $now = new DateTime();
        //$profile = new Student();
        //$profile->name = $request->input('name');
        //$profile->id = $request->input('id');
        $teacher = Professional::find($request->input('id'));
        $teacher->username = $request->input('username');
        $teacher->fname = $request->input('fname');
        $teacher->social_id = $request->input('social_id');
        $teacher->account_id = $request->input('account_id');
        $teacher->country = $request->input('living_country');;
        //$teacher->city = $request->input('city');
        $teacher->living_country = $request->input('living_country');
        $teacher->C_fname = $request->input('C_fname');
        $teacher->C_lname = $request->input('C_lname');
        $teacher->C_streetadress = $request->input('C_streetadress');
        //$teacher->C_city = $request->input('C_city');
        $teacher->C_state = $request->input('C_state');
        $teacher->C_zip = $request->input('C_zip');
        $teacher->C_country = $request->input('C_country');
        $teacher->C_phone = $request->input('C_phone');
        $teacher->C_email = $request->input('C_email');
        $teacher->video_url = $request->input('video_url');
        $teacher->is_show_publicity = $request->input('is_show_publicity');
        $teacher->brief_into = $request->input('brief_into');
        //$teacher->long_intro = $request->input('long_intro');
        //$teacher->availble_status = $request->input('availble_status');
        $teacher->save();
        return $request->All();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
