<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class HomeController extends Controller
{
    public function index() {
        // categories sorted by priority

        $categories = Category::orderBy('priority')->get();
        
        return view('home.index',[
            'categories' => $categories
        ]);
    }
}
