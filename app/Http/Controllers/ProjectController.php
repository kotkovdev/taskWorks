<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Helpers\ResponseHelper;
use App\Project;

class ProjectController extends Controller
{
    public function getAll()
    {
        try {
            $projects = Project::orderBy('id', 'desc')->get();
            return ResponseHelper::success($projects->toArray());
        } catch (\Exception $e) {
            return ResponseHelper::error($e->getMessage());
        }
    }
}
