<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\User;

class UserController extends Controller
{
    function getUserById(Request $request, $userId)
    {
        $user = User::find($userId)->toArray();
        return response()->json($user);
    }

    function getAllUsers()
    {
        $users = User::all();
        return response()->json($users);
    }

    function login()
    {
        return response()->json([
            'error' => true,
            'message' => 'You must be logged in'
        ]);
    }
}
