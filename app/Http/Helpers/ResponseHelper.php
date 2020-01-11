<?php

namespace App\Http\Helpers;

class ResponseHelper {
    public static function error($message) {
        return response()->json([
            'error' => true,
            'message' => $message
        ]);
    }

    public static function success($data) {
        return response()->json($data);
    }
}