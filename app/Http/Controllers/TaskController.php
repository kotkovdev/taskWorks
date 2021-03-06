<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;
use App\Http\Helpers\ResponseHelper;
use App\Task;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function getAll()
    {
        try {
            $tasks = Task::orderBy('id', 'desc')->with(['owner', 'user', 'project', 'report'])->get();
            return ResponseHelper::success($tasks->toArray());
        } catch (\Exception $e) {
            return ResponseHelper::error($e->getMessage());
        }
    }

    public function getById(Request $request, $taskId)
    {
        try {
            $task = Task::where('id', '=', $taskId)->with(['owner', 'user', 'project', 'report'])->first();
            return ResponseHelper::success($task->toArray());
        } catch (\Exception $e) {
            ResponseHelper::error($e->getMessage());
        }
    }

    public function create(Request $request)
    {
         try {
            $data = $request->json()->all();
            $task = new Task();

            $task->title        = $data['title'];
            $task->user_id      = $data['user_id'];
            $task->project_id   = $data['project_id'];
            $task->report_id    = $data['report_id'];
            $task->status_id    = $data['status_id'];
            $task->description  = $data['description'];
            $task->owner_id     = Auth::id();
            
            $task->save();
            return ResponseHelper::success($task->toArray());
         } catch (\Exception $e) {
             return ResponseHelper::error($e->getMessage());
         }
    }
}
