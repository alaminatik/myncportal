<?php

use App\Http\Controllers\TiketController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/test', function () {
    return view('welcome');
});

Route::get('/', [TiketController::class, 'create'])->name('tiket.create');
Route::post('/store', [TiketController::class, 'store'])->name('tiket.store');
