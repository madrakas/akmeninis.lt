<?php

namespace App\Http\Requests;

use App\Models\Description;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AboutUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'description' => 'required|string',
        ];
    }
}