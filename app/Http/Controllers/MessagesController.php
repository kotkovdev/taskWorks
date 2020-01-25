<?php

namespace App\Http\Controllers;

use App\Http\Helpers\ResponseHelper;
use App\Message;
use App\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessagesController extends Controller
{
    public function new(Request $request)
    {
        try {
            $data = $request->json()->all();
            $message = new Message();
            $message->user_id = Auth::id();
            $message->text = $data['message'];
            $message->task_id = $data['task_id'];
            $message->save();
            $task = Task::find($data['task_id']);
            $task->completion = $data['completion'];
            $task->status_id = $data['status'];
            $task->save();
            return ResponseHelper::success($this->getMessages($data['task_id'])->original);

        } catch (Exception $e) {
            ResponseHelper::error($e->getMessage());
        }
    }

    public function list(Request $request, $taskId)  
    {
        try {
            return $this->getMessages($taskId);
        } catch (Exception $e) {
            ResponseHelper::error($e->getMessage());
        }
    }

    public function getMessages($taskId)
    {
        try {
            $messages = Message::where('task_id', '=', $taskId)->with('user')->get()->toArray();
            return ResponseHelper::success($messages);
        } catch (Exception $e) {
            ResponseHelper::error($e->getMessage());
        }
    }
}
