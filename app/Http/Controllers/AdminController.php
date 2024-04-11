<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Hero;
use App\Models\Description;
use App\Models\Question;
use App\Http\Requests\HeroUpdateRequest;
use App\Http\Requests\AboutUpdateRequest;
use App\Http\Requests\QuestionUpdateRequest;

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

    public function updateFaq(QuestionUpdateRequest $request){
        $faqId = $request->id;
        $faq = Question::find($faqId);
        $faq->question = $request->question;
        $faq->answer = $request->answer;
        $faq->priority = $request->priority;
        $faq->save();
        $message = 'Duomenys išdsaugoti';
        return ['faq' => Question::find($faqId), 
                'message' => $message
            ];
    }

    public function updateFaqOrder(Request $request){
        
        dump( $request->faqOrder);

        // userialize orders Json
        $orders = json_decode($request->faqOrder, true);
        
        dump($orders);
        foreach ($orders as $order) {
            $faqId = $order[0];
            $faq = Question::find($faqId);

            dump('Faq id: ' . $faq->id . 
                '<br />Faq priority: ' . $faq->priority . 
                '<br/>Order ID: ' . $order[0] .
                '<br/>New priority: ' . $order[1]);

            
            $faq->priority = $order[1];
            $faq->save();
        }

        $message = 'Duomenys išdsaugoti';
        return ['message' => $message
            ];
    }
}