<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::post('authenticate', 'AuthenticateController@authenticate');
Route::post('user/store','UserController@store');
Route::get('user/show','UserController@show');
Route::post('profile/store','ProfileController@store');
Route::get('profile/show','ProfileController@show');
Route::post('profile/update','ProfileController@update');

Route::post('teacher/store','TeacherController@store');
Route::get('teacher/show','TeacherController@show');
Route::post('teacher/update','TeacherController@update');

// Route::get('session/get','SessionController@accessSessionData');
// Route::get('session/set','SessionController@storeSessionData');
// Route::get('session/remove','SessionController@deleteSessionData');

// Route::post('store/{userDetails}',function($userDetails){
//    echo 'ID: '.$userDetails.name;
// });
