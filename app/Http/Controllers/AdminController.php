<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Hero;
use App\Http\Requests\HeroUpdateRequest;

class AdminController extends Controller
{
    public function index()
    {
        
        $data = [
            'hero' => Hero::first()
        ];
            
        return Inertia::render('Admin/Index',  [
            'data' => $data
        ]);

    }

    //Validate request
    public function update(HeroUpdateRequest $request){
        
        $heroId = $request->id;
        $hero = Hero::find($heroId);
        $hero->description = $request->description;
        $hero->save();
        $message = 'Duomenys išdsaugoti';
        return ['hero' => Hero::find($heroId), 
                'message' => $message
            ];
    }

}
