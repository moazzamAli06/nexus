<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<html ng-app="convopal" ng-init="isAuthorized = false">
<head>

    <meta charset="UTF-8" />

    <title>Convopal</title><!--insert your title here-->
    <meta name="description" content="Education - Learning theme for your business" /><!--insert your description here-->
    <meta name="author" content="nicdark" /><!--insert your name here-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /><!--meta responsive-->

    <!--START CSS-->
    <link rel="stylesheet" href="{{ asset("css/nicdark_style.min.css") }}" />
    <link href="{{ asset("css/bootstrap.min.css") }}" rel="stylesheet" />
    <link rel="stylesheet" href="{{ asset("css/model-css.css") }}"> 
     <link href="{{ asset("css/profile.css") }}" rel="stylesheet" />
     <link href="{{ asset("css/teacher.css") }}" rel="stylesheet" />
    <!--<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">-->

    <!-- <script src="bower_components/angular-local-storage/dist/angular-local-storage.min.js"></script>
<script src="bower_components/restangular/dist/restangular.min.js"></script> -->
    <!--google fonts-->
    <!-- <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'> -->

    <!--[if lt IE 9]>  
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>  
<![endif]-->

    <!--FAVICONS-->
    <link rel="shortcut icon" href="img/favicon/favicon.ico" />
    <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png" />
    <!--END FAVICONS-->

    <base href="/" />
</head>
<body id="start_nicdark_framework" >



    <!--START nicdark_site-->
    <div class="nicdark_site">

        <!--START nicdark_site_fullwidth-->
        <div class="nicdark_site_fullwidth nicdark_site_fullwidth_boxed nicdark_clearfix">



            <!--START search container-->
            <div class="nicdark_display_table nicdark_transition_all_08_ease nicdark_navigation_3_search_content nicdark_bg_greydark_alpha_9 nicdark_position_fixed nicdark_width_100_percentage nicdark_height_100_percentage nicdark_z_index_1_negative nicdark_opacity_0">

                <!--close-->
                <div class="nicdark_cursor_zoom_out nicdark_navigation_3_close_search_content nicdark_width_100_percentage nicdark_height_100_percentage nicdark_position_absolute nicdark_z_index_1_negative"></div>


                <div class="nicdark_display_table_cell nicdark_vertical_align_middle nicdark_text_align_center">
                    <div class="nicdark_width_700 nicdark_width_250_all_iphone nicdark_display_inline_block">
                        <div class="nicdark_width_80_percentage nicdark_padding_5 nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative">
                            <input class="nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0 nicdark_first_font nicdark_color_white nicdark_placeholder_color_white nicdark_font_size_30 nicdark_line_height_30" type="text" placeholder="Search" />
                        </div>
                        <div class="nicdark_width_20_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative">
                            <a class="nicdark_width_55 nicdark_height_55 nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_bg_green nicdark_padding_15 nicdark_border_radius_3 " href="courses.html">
                                <img alt="" width="25" src="img/icons/icon-search-white.svg" />
                            </a>
                        </div>
                    </div>
                </div>



            </div>
            <!--END search container-->




            <!--START menu responsive-->
            <div class="nicdark_navigation_3_sidebar_content nicdark_padding_40 nicdark_box_sizing_border_box nicdark_overflow_hidden nicdark_overflow_y_auto nicdark_transition_all_08_ease nicdark_bg_green nicdark_height_100_percentage nicdark_position_fixed nicdark_width_300 nicdark_right_300_negative nicdark_z_index_9">

                <img alt="" width="25" class="nicdark_close_navigation_3_sidebar_content nicdark_cursor_pointer nicdark_right_20 nicdark_top_20 nicdark_position_absolute" src="img/icons/icon-close-white.svg" />



                <div class="nicdark_navigation_3_sidebar">
                    <ul>
                        <li>
                            <a href="index-2.html">HOME</a>

                            <ul class="nicdark_sub_menu">
                                <li>
                                    <a href="index-2.html">Home 1</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="courses.html">COURSES</a>

                            <ul class="nicdark_sub_menu">
                                <li>
                                    <a href="courses.html">Archive</a>
                                </li>
                                <li>
                                    <a href="single-course.html">Single Course</a>
                                </li>
                                <li>
                                    <a href="account.html">User Pages</a>

                                    <ul class="nicdark_sub_menu">
                                        <li>
                                            <a href="account.html">My Account</a>
                                        </li>
                                        <li>
                                            <a href="compare.html">Compare</a>
                                        </li>
                                    </ul>

                                </li>
                                <li>
                                    <a href="courses.html">Shop</a>

                                    <ul class="nicdark_sub_menu">
                                        <li>
                                            <a href="cart.html">Cart</a>
                                        </li>
                                        <li>
                                            <a href="checkout.html">Checkout</a>
                                        </li>
                                        <li>
                                            <a href="thankyou.html">Thank You</a>
                                        </li>
                                    </ul>

                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="teachers.html">TEACHERS</a>

                            <ul class="nicdark_sub_menu">
                                <li>
                                    <a href="teachers.html">Archive</a>
                                </li>
                                <li>
                                    <a href="single-teacher.html">Single Teacher</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="#">PAGES</a>

                            <ul class="nicdark_sub_menu">
                                <li>
                                    <a href="about-us.html">About Us</a>
                                </li>
                                <li>
                                    <a href="services.html">Services</a>
                                </li>
                                <li>
                                    <a href="single-course.html">Single Course</a>
                                </li>
                                <li>
                                    <a href="single-teacher.html">Single Teacher</a>
                                </li>
                                <li>
                                    <a href="contact-1.html">Contact</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="blog-standard.html">BLOG</a>

                            <ul class="nicdark_sub_menu">
                                <li>
                                    <a href="blog-standard.html">Archive Standard</a>
                                </li>
                                <li>
                                    <a href="blog-masonry.html">Archive Masonry</a>
                                </li>
                                <li>
                                    <a href="single.html">Post Right Sidebar</a>
                                </li>
                                <li>
                                    <a href="single-full-width.html">Post Full Width</a>
                                </li>
                                <li>
                                    <a href="single-left-sidebar.html">Post Left Sidebar</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="contact-1.html">CONTACT</a>
                        </li>

                    </ul>

                </div>



            </div>
            <!--END menu responsive-->
            <div header ></div>
 
            <div ng-view></div>
            <!-- <ng-view></ng-view> -->


            <div class="nicdark_section nicdark_bg_greydark">

                <div class="nicdark_section nicdark_height_50"></div>

                <!--start nicdark_container-->
                <div class="nicdark_container nicdark_clearfix">


                    <div class="grid grid_12 nicdark_text_align_center">

                        <div class="nicdark_section">
                            <a href="index-2.html">
                                <img alt="" width="200" class="" src="img/logos/logo-elearning-white.svg" />
                            </a>
                        </div>

                        <div class="nicdark_section nicdark_height_20"></div>

                        <div class="nicdark_display_inline_block">
                            <a href="index-2.html">
                                <img alt="" width="40" class="nicdark_margin_right_10" src="img/icons/icon-facebook-circle.svg" />
                            </a>
                            <a href="index-2.html">
                                <img alt="" width="40" class="nicdark_margin_right_10" src="img/icons/icon-twitter-circle.svg" />
                            </a>
                            <a href="index-2.html">
                                <img alt="" width="40" class="nicdark_margin_right_10" src="img/icons/icon-pinterest-circle.svg" />
                            </a>
                            <a href="index-2.html">
                                <img alt="" width="40" class="nicdark_margin_right_10" src="img/icons/icon-linkedin-circle.svg" />
                            </a>
                            <a href="index-2.html">
                                <img alt="" width="40" class="nicdark_margin_right_10" src="img/icons/icon-youtube-circle.svg" />
                            </a>
                        </div>

                    </div>

                </div>
                <!--end container-->
                <div class="nicdark_section nicdark_height_50"></div>

            </div>

            <div class="nicdark_section nicdark_bg_greydark">

                <!--start nicdark_container-->
                <div class="nicdark_container nicdark_clearfix nicdark_border_top_1_solid_greydark">


                    <div class="grid grid_6 nicdark_text_align_center_responsive">
                        <p class="nicdark_color_grey nicdark_font_size_14">© Copyright 2016 CleanThemes.net - e-Learning Theme</p>
                    </div>

                    <div class="grid grid_6 nicdark_text_align_right nicdark_text_align_center_responsive nicdark_border_top_1_solid_greydark_responsive nicdark_display_none_all_iphone">

                        <div class="nicdark_navigation_copyright">
                            <ul>
                                <li>
                                    <a href="index-2.html">HOME</a>
                                </li>
                                <li>
                                    <a href="about-us.html">ABOUT US</a>
                                </li>
                                <li>
                                    <a href="services.html">SERVICES</a>
                                </li>
                                <li>
                                    <a href="contact-1.html">CONTACT</a>
                                </li>
                            </ul>
                        </div>

                    </div>


                </div>
                <!--end container-->

            </div>

        </div>
    </div>

    <!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></script> -->

    <!--js-->
    <script src="{{ asset("js/jquery.min.js") }}"></script>
    <script src="{{ asset("js/angular.min.js") }}"></script>
    
 <!--<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
     <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js"></script>-->

  <!-- Angular Material Library -->
 <!-- <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>-->

    <script src="{{ asset("js/angular-route.min.js") }}"></script>
    <!--<script src="{{ asset("js/nicdark_plugins.min.js") }}" type="text/javascript"></script>-->
   
    <script src="{{ asset("js/bootstrap.min.js") }}"></script>
    <!--<script src="{{ asset("js/login-model.js") }}" class"ng-scope"></script>-->
    <script src="{{ asset("js/angularjs-social-login.js") }}"></script>
    <script src="{{ asset("angular/app.js") }}"></script>
    <script src="{{ asset("js/moment.js") }}"></script>
     <script src="{{ asset("js/angular-moment.min.js") }}"></script>
    <!--    <script src="{{ asset("angular/angular_social_login.js") }}"></script> -->
    <script src="{{ asset("angular/controllers/MainController.js") }}"></script>
    <!--<script src="{{ asset("angular/services/techerprofile.js") }}"></script>-->
    <script src="{{ asset("angular/controllers/UserController.js") }}"></script>
    <script src="{{ asset("angular/controllers/ProfileController.js") }}"></script>
    <script src="{{ asset("angular/controllers/TeacherController.js") }}"></script>
     <script src="{{ asset("angular/controllers/StudentDashboardController.js") }}"></script>
      <script src="{{ asset("angular/controllers/TeacherDashboardController.js") }}"></script>
     <script src="{{ asset("angular/services/authService.js") }}"></script>
     <script src="{{ asset("angular/services/profileService.js") }}"></script>
    <!-- <script src="js/controllers.js"></script> -->

</body>

</html>