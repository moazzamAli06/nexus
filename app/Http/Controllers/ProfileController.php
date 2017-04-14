<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student;
use App\Http\Requests;
use App\User;
use DateTime;
use App\Http\Controllers\Controller;

class ProfileController extends Controller
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
        $now = new DateTime();
        $profile = new Student();
        //$profile->name = $request->input('name');
        //$profile->id = $request->input('id');
        $profile->country = $request->input('country');
        //$profile->city = $request->input('city');
        $profile->city = $request->input('city');;
        $profile->timezone = $now;//$request->input('timezone');
        $profile->dob = $request->input('month') .'/'. $request->input('day') .'/'. $request->input('year');
        $profile->gender = $request->input('gender');
        $profile->user_id = $request->input('user_id');
        // $profile->short_info = $profile->input('short_info');
        // $profile->long_info = $profile->input('long_info');
        // $profile->skype_id = $profile->input('skype_id');
        // $profile->face_time = $profile->input('face_time');
        // $profile->google_id = $profile->input('google_id');
        // $profilr->qq = $profile->input('qq');
        $profile->save();
        return $request->input('short_info');
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
        $value = Student::where('user_id',$user->id) -> first();
       
    //    if(session()->has('email'))
    //      echo session()->get('email');
    //   else
    //      echo 'No data in the session';
        return $value;
        //$value = $request->session()->get('email', '$email');
        //
        //$user = new User();
        //$userData = User::where('email',$request->input('email')) -> first();
        //$profileData = Student::where('user_id',$userData->id)->first();
        // return $email;
         
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
        $profile = Student::find($request->input('id'));
        $profile->username = $request->input('name');
        $profile->imageUrl = $request->input('imageUrl');
        $profile->country = $request->input('country');
        $profile->city = $request->input('city');;
        $profile->timezone = $request->input('timezone');
        $profile->dob = $request->input('month') .'/'. $request->input('day') .'/'. $request->input('year');
        $profile->gender = $request->input('gender');
        $profile->user_id = $request->input('user_id');
        $profile->short_info = $request->input('short_info');
        $profile->long_info = $request->input('long_info');
        $profile->skype_id = $request->input('skype_id');
        $profile->face_time = $request->input('face_time');
        $profile->google_id = $request->input('google_id');
        $profile->qq = $request->input('qq');
        $profile->save();
        return $profile->All();
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
