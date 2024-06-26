<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Description;
use App\Models\Question;
use App\Models\Contact;
use App\Models\Hero;

class HomeController extends Controller
{
    public function index() {
        $categories = Category::orderBy('priority')->get();
        $description = Description::first();
        $questions = Question::orderBy('priority')->get();
        $contacts = Contact::first();

        $hero = Hero::first()->description;
        
        return view('home.index',[
            'categories' => $categories,
            'description' => $description->description,
            'questions' => $questions,
            'contacts' => $contacts,
            'hero' => $hero
        ]);
    }
}

