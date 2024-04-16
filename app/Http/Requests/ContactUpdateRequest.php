<?php

namespace App\Http\Requests;

use App\Models\Contact;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ContactUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            // phone nmumber must be in phone number format
            'phone' => 'required|string|regex:/^([0-9\s\-\+\(\)]*)$/|min:10|max:15',
            'email' => 'required|string|lowercase|email|max:255',
            'address' => 'required|string|max:255',
            'worktime' => 'required|string|max:255',
        ];
    }

    // Translate error messages

    public function messages(): array
    {
        return [
            'phone.required' => 'Telefono Nr. yra privalomas',
            'phone.regex' => 'Telefono Nr. formatas yra neteisingas',
            'email.required' => 'El. paštas yra privalomas',
            'email.email' => 'El. pašto formatas yra neteisingas',
            'address.required' => 'Adresas yra privalomas',
            'worktime.required' => 'Darbo laikas yra privalomas',
        ];
    }
}