<?php
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
*/
 
Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');
Route::get('/tasksList/{q?}','ProductController@index');
Route::post('/tasksList','ProductController@store');
Route::get('/tasks/{id}','ProductController@edit');
Route::patch('/tasks/{id}','ProductController@update');
Route::delete('/tasks/{id}','ProductController@destroy');