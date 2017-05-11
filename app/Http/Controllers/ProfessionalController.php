<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Professional;
use App\Experience;
use App\Education;
use App\Http\Requests;
use App\User;
use App\Timetable;
use DateTime;
use App\Http\Controllers\Controller;

class ProfessionalController extends Controller
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
         $value->experiences = Experience::where('prof_id',$value->id)->get();
         $value->educations = Education::where('prof_id',$value->id)->get();
         if($value != null)
         {
             $value->isAuthorized = true;
         }
         
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
        $professional = Professional::find($request->input('id'));
       
        $professional->username = $request->input('username');
        $professional->fname = $request->input('fname');
        $professional->lname = $request->input('lname');
        $professional->social_id = $request->input('social_id');
        $professional->account_id = $request->input('account_id');
        $professional->country = $request->input('living_country');;
        //$professional->city = $request->input('city');
        $professional->living_country = $request->input('living_country');
        $professional->C_fname = $request->input('C_fname');
        $professional->C_lname = $request->input('C_lname');
        $professional->C_streetadress = $request->input('C_streetadress');
        $professional->C_city = $request->input('C_city');
        $professional->C_state = $request->input('C_state');
        $professional->C_zip = $request->input('C_zip');
        $professional->C_country = $request->input('C_country');
        $professional->C_phone = $request->input('C_phone');
        $professional->C_email = $request->input('C_email');
        $professional->video_url = $request->input('video_url');
        //$professional->is_show_publicity = $request->input('is_show_publicity');
        $professional->brief_into = $request->input('brief_into');
        $professional->long_intro = $request->input('long_intro');
        $professional->availble_status = $request->input('availble_status');
        $professional->save();
        // $timeTable = Timetable::where('prof_id',$professional->id) -> get();
        // $schedules = $request->input('schedule');
        // foreach ($request->input('schedule') as $item ) {
        //         // if($timeTable === null)
        //         // {
        //              $timeTable = new Timetable();
        //         // }
                
        //         //$timeTable->day = "Monday";
        //         // $timeTable->day = $item->day;
        //         // $timeTable->time_from = $item->timeFrom;
        //         // $timeTable->time_to = $item->timeTo;
        //         $timeTable->day ="Mondays";
        //         $timeTable->time_from = "10:00 AM";
        //         $timeTable->time_to = "10:00 PM";
        //         $timeTable->prof_id = $professional->id;
        //         $timeTable->save();
               
        // }
        return $professional;
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
