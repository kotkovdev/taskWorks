<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
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

    /**
     * Custom user authorization
     */
    public function login(Request $request)
    {
        $data = $request->json()->all();
        if (Auth::attempt(['email' => $data['email'], 'password' => $data['password']], true)) {
            $user = User::where('email', $data['email'])->first();
            //Auth::login($user, true);
            $token = Str::random(80);
            session(['token' => $token]);
            $user->api_token = $token;
            $user->save();
            return response()->json([
                'success' => true,
                'errors' => false,
                'api_token' => $token
            ]);
        } else {
            return response()->json([
                'success' => false,
                'errors' => 'Unknow user',
            ]);
        }
    }

    public function webLogin(Request $request)
    {
        if ($request->input('email') && $request->input('password')) {
            $auth = Auth::attempt([
                'email' => $request->input('email'),
                'password' => $request->input('password')
            ], true);
            if ($auth) {
                return response()->redirectTo('/');
            }
        }
        return view('login');
    }
}
