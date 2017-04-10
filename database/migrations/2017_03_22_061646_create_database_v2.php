<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDatabaseV2 extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        //
        Schema::defaultStringLength(191);
        Schema::create('roles', function($table) {
            $table->increments('id');
            $table->string('title');
            $table->timestamps();
        });

        Schema::create('users', function($table) {
            
            $table->increments('id');
            $table->string('username');
            $table->string('email')->unique();
            $table->string('password')->default("");
            $table->string('imageUrl')->default("");
            $table->string('token')->default("");
            $table->string('expiry_date')->default("");
            $table->timestamps();
            $table->integer('role_id')->unsigned();
//            $table->foreign('role_id')->refrances('id')->on('roles');
            $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
        });
        
        Schema::create('students', function($table) {
            
            $table->increments('id');
            $table->string('name');
            $table->string('country');
            $table->string('city');
            $table->dateTimeTz('timezone');
            $table->string('dob');
            $table->string('gender');
            
            $table->integer('user_id')->unsigned();
            $table->string('image_url');
            $table->string('short_info');
            $table->string('long_info');
            $table->string('skype_id');
            $table->string('face_time');
            $table->string('google_id');
            $table->string('qq');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
         Schema::create('courses', function($table){
            $table->increments('id');
            $table->string('title');
            $table->timestamps();
        });

        Schema::create('languages', function($table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
             $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->integer('lang_id')->unsigned();
             $table->foreign('lang_id')->references('id')->on('courses')->onDelete('cascade');
            $table->string('level');
            $table->string('is_native');
            $table->string('is_primary');
            $table->string('is_learning');
            $table->timestamps();
          
        });
       
        Schema::create('professional', function($table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('fname');
            $table->string('lname');
            $table->string('user_name');
            $table->string('social_id');
            $table->string('account_id');
            $table->string('country');
            $table->string('city');
            $table->string('living_country');
            $table->string('C_fname');
            $table->string('C_lname');
            $table->string('C_streetadress');
            $table->string('C_city');
            $table->string('C_state');
            $table->integer('C_zip');
            $table->string('C_country');
            $table->integer('C_phone');
            $table->string('C_email');
            $table->string('video_url');
            $table->string('is_show_publicity');
            $table->string('brief_into');
            $table->string('long_intro');
            $table->string('availble_status');
            $table->timestamps();
             $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
        

        Schema::create('skills', function($table) {
            $table->increments('id');
            $table->integer('prof_id')->unsigned();
            $table->integer('lang_id')->unsigned();
            $table->string('level');
            $table->timestamps();
            $table->foreign('prof_id')->references('id')->on('professional')->onDelete('cascade');
            $table->foreign('lang_id')->references('id')->on('languages')->onDelete('cascade');
       
        });
        
        Schema::create('timetable', function($table) {
            $table->increments('id');
            $table->string('day');
            $table->string('time_to');
            $table->string('time_from');
            $table->timestamps();
            $table->integer('prof_id')->unsigned();
            $table->foreign('prof_id')->references('id')->on('professional')->onDelete('cascade');
           
        });
        
         Schema::create('tags', function($table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('prof_id')->unsigned();
            $table->foreign('prof_id')->references('id')->on('professional')->onDelete('cascade');
           
        });

         Schema::create('wallet', function($table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('amount');
            $table->timestamps();
             $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
        
       Schema::create('schedule', function($table) {
            $table->increments('id');
            $table->integer('std_id')->unsigned();
            $table->integer('prof_id')->unsigned();
            $table->integer('lang_id')->unsigned();
            $table->timestamps();
            $table->string('is_reserved');
               $table->foreign('lang_id')->references('id')->on('languages')->onDelete('cascade');
               $table->foreign('prof_id')->references('id')->on('professional')->onDelete('cascade');
               $table->foreign('std_id')->references('id')->on('students')->onDelete('cascade');
        });
        
         Schema::create('education', function($table) {
            $table->increments('id');
            $table->string('from_date');
            $table->string('to_date');
            $table->string('institute');
           $table->string('topics');
            $table->string('degree');
            $table->string('description');
            $table->string('file_url');
            $table->string('is_approved');
            $table->timestamps();
            $table->integer('prof_id')->unsigned();
               $table->foreign('prof_id')->references('id')->on('professional')->onDelete('cascade');
        });
        
         Schema::create('experince', function($table) {
            $table->increments('id');
            $table->string('from_date');
            $table->string('to_date');
            $table->string('position');
           $table->string('country');
            $table->string('city');
            $table->string('company');
            $table->string('description');
            $table->string('is_approved');
            $table->timestamps();
            $table->integer('prof_id')->unsigned();
               $table->foreign('prof_id')->references('id')->on('professional')->onDelete('cascade');
        });
        
          Schema::create('certificates', function($table) {
            $table->increments('id');
            $table->string('delete_record');
            $table->string('name');
            $table->string('institute');
            $table->string('description');
            $table->string('file_url');
            $table->string('is_approved');
            $table->timestamps();
            $table->integer('prof_id')->unsigned();
               $table->foreign('prof_id')->references('id')->on('professional')->onDelete('cascade');
        });
   
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        //
        Schema::dropIfExists('users');
    }

}
