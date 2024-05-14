<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
// */

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/', function () {
//     return Inertia::render('Welcome', );
// });

// Route::get('/Dashboard', function () {
//     return Inertia::render('admin.index');
// })->middleware(['auth', 'verified'])->name('dashboard');




Route::prefix('admin')->middleware('auth')->name('admin.')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('index');
    Route::put('/hero', [AdminController::class, 'updateHero'])->name('updateHero');
    Route::put('/about', [AdminController::class, 'updateAbout'])->name('updateAbout');
    Route::put('/faq', [AdminController::class, 'updateFaq'])->name('updateFaq');
    Route::put('/faqorder', [AdminController::class, 'updateFaqOrder'])->name('updateFaqOrder');
    Route::delete('/faq/{id}', [AdminController::class, 'deleteFaq'])->name('deleteFaq');
    Route::post('/faq', [AdminController::class, 'addFaq'])->name('addFaq');
    Route::put('/cat', [AdminController::class, 'updateCat'])->name('updateCat');
    Route::put('/catorder', [AdminController::class, 'updateCatOrder'])->name('updateCatOrder');
    Route::delete('/cat/{id}', [AdminController::class, 'deleteCat'])->name('deleteCat');
    Route::post('/cat', [AdminController::class, 'addCat'])->name('addCat');
    Route::put('/contact', [AdminController::class, 'updateContact'])->name('updateContact');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

require __DIR__.'/auth.php';
