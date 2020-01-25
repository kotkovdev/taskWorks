<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Report;
use App\Http\Helpers\ResponseHelper;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Carbon\CarbonPeriod;

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

    public function getById(Request $request, $reportId)
    {
        try {
            $report = Report::find($reportId);
            return ResponseHelper::success($report->toArray());
        } catch (\Exception $e) {
            return ResponseHelper::error($e->getMessage());
        }
    }

    public function update(Request $request, $reportId)
    {
        try {
            $report = Report::find($reportId);
            $data = $request->json()->all();
            $report->title = $data['title'];
            $report->description = $data['description'];
            $report->save();
            return ResponseHelper::success($report->toArray());
        } catch (\Exception $e) {
            return ResponseHelper::error($e->getMessage());
        }
    }

    public function statistic(Request $request)
    {
        try {
            $reports = Report::where('created_at', '>=', \Carbon\Carbon::now()->subMonth())
                            ->groupBy('date')
                            ->orderBy('date', 'ASC')
                            ->get(array(
                                DB::raw('Date(created_at) as date'),
                                DB::raw('COUNT(*) as "throubles"')
                            ));
            $returnData = [
                'dates'     => [],
                'throubles' => []
            ];
            $reports = $reports->toArray();
            foreach ($reports as $key => $element) {
                if (isset($returnData['dates'][$key - 1])) {
                    $period = CarbonPeriod::create($returnData['dates'][$key - 1], $element['date']);
                    $dates = $period->toArray();
                    foreach ($dates as $date) {
                        $returnData['dates'][] = $date->format('Y-m-d');
                        $returnData['throubles'][] = 0;
                    }
                }
                $returnData['dates'][]      = $element['date'];
                $returnData['throubles'][]  = $element['throubles'];
            }
            return response()->json($returnData);
        } catch (\Exception $e) {
            ResponseHelper::error($e->getMessage());
        }
    }
}
