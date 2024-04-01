<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Description;

class HomeController extends Controller
{
    public function index() {
        // categories sorted by priority

        $categories = Category::orderBy('priority')->get();
        $description = Description::first();

        return view('home.index',[
            'categories' => $categories,
            'description' => $description->description
        ]);
    }
}
