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



Route::get('/login', 'Auth\LoginController@webLogin')->name('login');
Route::post('/login', 'Auth\LoginController@webLogin');

/**
 * Send all rquests to angular app
 */
Route::get('/{any}', 'HomeController@index')->where('any', '.*')->middleware('auth');
