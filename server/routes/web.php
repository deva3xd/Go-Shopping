<?php

use Laravel\Sanctum\Http\Controllers\CsrfCookieController;
use Illuminate\Support\Facades\Route;

// Route::post('/register', [RegisterController::class, 'store']);
// Route::post('/login', [LoginController::class, 'store']);

Route::get('/sanctum/csrf-cookie', [CsrfCookieController::class, 'show'])->name('sanctum.csrf-cookie');