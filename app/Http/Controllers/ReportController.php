<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Report;

class ReportController extends Controller
{
    public function new(Request $request)
    {
        try {
            $data = $request->json()->all();
            $report = new Report();
            $report->title = $data['title'];
            $report->description = $data['description'];
            $report->save();
            return response()->json([
                'success' => true,
                'error' => false,
                'report_id' => $report->id
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false, 
                'error' => true,
                'message' => $e->getMessage()
            ]);
        }
        
    }

    public function getAll()
    {
        $reports = Report::all()->toArray();
        return response()->json([
            'reports' => $reports
        ]);
    }
}
