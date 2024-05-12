<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Hero;
use App\Models\Description;
use App\Models\Category;
use App\Models\Question;
use App\Models\Contact;
use App\Http\Requests\HeroUpdateRequest;
use App\Http\Requests\AboutUpdateRequest;
use App\Http\Requests\QuestionUpdateRequest;
use App\Http\Requests\QuestionAddRequest;
use App\Http\Requests\CategoryUpdateRequest;
use App\Http\Requests\ContactUpdateRequest;

class AdminController extends Controller
{
    public function index()
    {
        $data = [
            'hero' => Hero::first(),
            'about'=> Description::first(),
            'faq' => Question::orderBy('priority')->get(),
            'contact' => Contact::first(),
            'categories' => Category::orderBy('priority')->get(),
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
        $message = 'Duomenys išsaugoti';
        return ['hero' => Hero::find($heroId), 
                'message' => $message
            ];
    }

    public function updateAbout(AboutUpdateRequest $request){
        $descriptionID = $request->id;
        $about = Description::find($descriptionID);
        $about->description = $request->description;
        $about->save();
        $message = 'Duomenys išsaugoti';
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
        $message = 'Duomenys išsaugoti';
        return ['faq' => Question::find($faqId), 
                'message' => $message
            ];
    }

    public function updateFaqOrder(Request $request){
        
        dump( $request->faqOrder);

        // userialize orders Json
        $orders = json_decode($request->faqOrder, true);
        
        // dump($orders);
        foreach ($orders as $order) {
            $faqId = $order[0];
            $faq = Question::find($faqId);

            // dump('Faq id: ' . $faq->id . 
            //     '<br />Faq priority: ' . $faq->priority . 
            //     '<br/>Order ID: ' . $order[0] .
            //     '<br/>New priority: ' . $order[1]);

            
            $faq->priority = $order[1];
            $faq->save();
        }

        $message = 'Duomenys išsaugoti';
        return ['message' => $message];
    }

    public function deleteFaq($id){
        $faq = Question::find($id);
        $faq->delete();
        $message = 'Duomenys ištrinti';
        return ['message' => $message];
    }

    public function addFaq(QuestionAddRequest $request){
        $faq = new Question();
        $faq->question = $request->question;
        $faq->answer = $request->answer;
        //max priority
        $priority = Question::max('priority');
        $faq->priority = $priority + 1;
        $faq->save();
        $id = $faq->id;
        $message = 'Duomenys išsaugoti';
        return [
            'message' => $message,
            'id' => $id,
            'priority' => $faq->priority
            ];
    }

    public function updateCat(CategoryUpdateRequest $request){
        $catId = $request->id;
        $cat = Category::find($catId);
        $cat->name = $request->name;
        $cat->description = $request->description;
        $cat->priority = $request->priority;
        $cat->save();
        $message = 'Duomenys išsaugoti';
        return ['message' => $message];
    }

    public function updateCatOrder(Request $request){
        $orders = json_decode($request->catOrder, true);
        foreach ($orders as $order) {
            $catId = $order[0];
            $cat = Category::find($catId);
            $cat->priority = $order[1];
            $cat->save();
        }
        $message = 'Duomenys išsaugoti';
        return ['message' => $message];
    }

    public function deleteCat($id){
        $cat = Category::find($id);
        $cat->delete();
        $message = 'Duomenys ištrinti';
        return ['message' => $message];
    }

    public function addCat(CategoryUpdateRequest $request){
        $cat = new Category();
        $cat->name = $request->name;
        $priority = Category::max('priority');
        $cat->priority = $priority + 1;
        $cat->description = $request->description;
        // Temporal image placholder
        $cat->featured_image_id = 0;
        $cat->save();
        $message = 'Duomenys išsaugoti';
        return ['message' => $message];
    }

    public function updateContact(ContactUpdateRequest $request){
        $contactId = $request->id;
        $contact = Contact::find($contactId);
        $contact->address = $request->address;
        $contact->phone = $request->phone;
        $contact->email = $request->email;
        $contact->worktime = $request->worktime;
        $contact->save();
        $message = 'Duomenys išsaugoti';
        return ['contact' => Contact::find($contactId), 
                'message' => $message
            ];
    }
}
