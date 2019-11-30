<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use illuminate\Http\Request;

use App\User;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function generateToken($email)
    {
        $hash = Hash::make(time() . $email);
        return $hash;
    }

    /**
     * Custom user authorization
     */
    public function login(Request $request)
    {
        $data = $request->json()->all();
        if (Auth::attempt(['email' => $data['email'], 'password' => $data['password']])) {
            $user = User::where('email', $data['email'])->first()->toArray();
            Auth::loginUsingId($user['id']);
            $token = $this->generateToken($data['email']);
            session(['token' => $token]);
            return response()->json([
                'success' => true,
                'errors' => false,
                'token' => $token
            ]);
        }
    }
}
