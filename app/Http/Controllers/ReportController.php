<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Report;
use App\Http\Helpers\ResponseHelper;

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
            return ResponseHelper::success($report->toArray());
        } catch (\Exception $e) {
            return ResponseHelper::error($e->GetMessage());
        }
        
    }

    public function getAll()
    {
        $reports = Report::orderBy('id', 'desc')->get()->toArray();
        return ResponseHelper::success($reports);
    }
}
