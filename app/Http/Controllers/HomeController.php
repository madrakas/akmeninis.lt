<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Description;
use App\Models\Question;

class HomeController extends Controller
{
    public function index() {
        // categories sorted by priority

        $categories = Category::orderBy('priority')->get();
        $description = Description::first();
        $questions = Question::orderBy('priority')->get();

        return view('home.index',[
            'categories' => $categories,
            'description' => $description->description,
            'questions' => $questions
        ]);
    }
}
