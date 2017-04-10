<?php

namespace App\Http\Controllers;

 use Illuminate\Http\Request;

use AppHttpRequests;
use AppHttpControllersController;
use App\User;

class AuthenticateController extends Controller
{
     protected $request;

    public function __construct(Request $request) {
        $this->request = $request;
    }
      public function authenticate(Request $request)
    {
        $user = new $User(); 
    //     $user->username = $request->input('name');
    //     $user->email = $request->input('email');
    //     $user->role_id = 1;
    //    $user->save();
        //  $email = $request->input('email');
        //print_r($user->id);
         //$name = $this->request->input('name');
         print_r("ali");
        //$name = $request->input('name');
        //return 
        //var_dump($userDetails);
    }
    public function get()
    {
 print_r("ali");
        //echo "ali";
    }
    //  public function show($id) {
    //     return Employee::find($id);
    // }
    //  public function update(Request $request, $id) {
    //     $employee = Employee::find($id);

    //     $employee->name = $request->input('name');
    //     $employee->email = $request->input('email');
    //     $employee->contact_number = $request->input('contact_number');
    //     $employee->position = $request->input('position');
    //     $employee->save();

    //     return "Sucess updating user #" . $employee->id;
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @param  int  $id
    //  * @return Response
    //  */
    // public function destroy(Request $request) {
    //     $employee = Employee::find($request->input('id'));

    //     $employee->delete();

    //     return "Employee record successfully deleted #" . $request->input('id');
    // }
}
