<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Education;
class EducationController extends Controller
{

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
        $edu = new Education();
        $edu->from_date = $request->input('from_date');
        $edu->to_date = $request->input('to_date');
        $edu->institute = $request->input('institute');
        $edu->topics = $request->input('topics');
        $edu->degree = $request->input('degree');
        $edu->description = $request->input('description');
        $edu->is_approved = "false";
        $edu->prof_id = $request->input('prof_id');
        $edu->save();
        return $edu;
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
