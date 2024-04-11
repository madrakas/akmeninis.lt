<?php

namespace App\Http\Requests;

use App\Models\Question;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class QuestionUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'question' => 'required|string',
            'answer' => 'required|string',
        ];
    }

    // Translate error messages

    public function messages(): array
    {
        return [
            'question.required' => 'Klausimas yra privalomas',
            'answer.required' => 'Atsakymas yra privalomas',
        ];
    }
}