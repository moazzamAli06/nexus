<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\User;
use App\Student;
use App\Professional;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return "ali";
        print_r("ali");
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
        
        $email = $request->input('email');
        //$value = DB::table('users')->where('email', $email)->value('email');
        
        $value = User::where('email',$email) -> first();
        if($value === null)
        {
            $user = new User(); 
            //$user->username = $request->input('name');
            $user->email = $request->input('email');
            //$user->imageUrl = $request->input('imageUrl');
           
            if($request->input('UserType') == "1")
            {
                
                $user->role_id = 1;
                $user->save(); 
                $profile = new Student();
                $profile->username = $request->input('name');
                $profile->imageUrl = $request->input('imageUrl');
                $profile->country = "";
                $profile->city = "";
                $profile->timezone = "";
                $profile->dob = "";
                $profile->gender = "";
                $profile->user_id = $user->id;
                $profile->short_info ="hello";
                $profile->save();
            }
            else if($request->input('UserType') == "2")
            {
                $user->role_id = 2;
                $user->save(); 
                $profile = new Professional();
                $profile->username = $request->input('name');
                $profile->imageUrl = $request->input('imageUrl');
                $profile->user_id = $user->id;
                $profile->save();
            }
        }
        $request->session()->put('user', $value);
        return $value;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        
     
    
        // dd($request->session()->get('email'));

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
    public function update(Request $request, $id)
    {
        $name =  $request->input('name');
        return $name;
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
