<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Hero;
use App\Models\Description;
use App\Models\Question;
use App\Http\Requests\HeroUpdateRequest;
use App\Http\Requests\AboutUpdateRequest;

class AdminController extends Controller
{
    public function index()
    {
        $data = [
            'hero' => Hero::first(),
            'about'=> Description::first(),
            'faq' => Question::orderBy('priority')->get(),
        ];
            
        return Inertia::render('Admin/Index',  [
            'data' => $data
        ]);
    }

    public function updateHero(HeroUpdateRequest $request){
        
        $heroId = $request->id;
        $hero = Hero::find($heroId);
        $hero->description = $request->description;
        $hero->save();
        $message = 'Duomenys išdsaugoti';
        return ['hero' => Hero::find($heroId), 
                'message' => $message
            ];
    }

    public function updateAbout(AboutUpdateRequest $request){
        $descriptionID = $request->id;
        $about = Description::find($descriptionID);
        $about->description = $request->description;
        $about->save();
        $message = 'Duomenys išdsaugoti';
        return ['about' => Description::find($descriptionID), 
                'message' => $message
            ];
    }
}