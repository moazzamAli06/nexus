<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Experience;
class ExperienceController extends Controller
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
    public function create(Request $request)
    {
        $exp = new Experience();
        $exp->from_date = $request->input('from_date');
        $exp->to_date = $request->input('to_date');
        $exp->position = $request->input('position');
        $exp->country = $request->input('country');
        $exp->city = $request->input('city');
        $exp->company = $request->input('company');
        $exp->description = $request->input('description');
        $exp->is_approved = "false";
        $exp->prof_id = $request->input('prof_id');
        $exp->save();
        return $exp;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        // $user = $request->session()->get('user');
        // $value = Student::where('user_id',$user->id) -> first();
        // if($value != null)
        //  {
        //      $value->isAuthorized = true;
        //  }
        // return $value;
         
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
    //     $data = $request->input('imageUrl');
    //     $png_url = "img-".time().".jpeg";
    //     $path = public_path().'/'. $png_url;
    //     $img = Image::make(file_get_contents($data));
    //     $img->save($path);
    //     return $path;
        
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
