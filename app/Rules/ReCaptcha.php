<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Http;

class ReCaptcha implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        // Make sure we have a value to validate
        if (empty($value)) {
            $fail('The reCAPTCHA response is required.');
            return;
        }

        // Verify with Google's reCAPTCHA API
        $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => config('services.recaptcha.secret_key'),
            'response' => $value,
            'remoteip' => request()->ip()
        ]);

        $body = $response->json();

        // Check if verification was successful
        if (!$response->successful() || !$body['success']) {
            $fail('The reCAPTCHA verification failed. Please try again.');
        }

        // Optional: Check for a minimum score (for v3)
        if (isset($body['score']) && $body['score'] < 0.5) {
            $fail('The reCAPTCHA score is too low. Please try again.');
        }
    }
}