<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

/**
 * Users
 */
Route::post('/login', 'Auth\LoginController@login');
Route::post('/user/new', 'Auth\RegisterController@new');

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/user/all', 'UserController@getAllUsers');
    Route::get('/user/{id}', 'UserController@getUserById');

    /**
     * Reports
     */
    Route::get('/report/statistic', 'ReportController@statistic');
    Route::post('/report/new', 'ReportController@new');
    Route::post('/report/{id}', 'ReportController@update');
    Route::get('/report/all', 'ReportController@getAll');
    Route::get('/report/{id}', 'ReportController@getById');
    /**
     * Projects
     */
    Route::get('/project/all', 'ProjectController@getAll');
    /**
     * Tasks
     */
    Route::get('/task/all', 'TaskController@getAll');
    Route::get('/task/{id}', 'TaskController@getById');
    Route::post('/task/new', 'TaskController@create');

    Route::post('/messages/new', 'MessagesController@new');
    Route::get('/messages/{id}', 'MessagesController@list');
});
