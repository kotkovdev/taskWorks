<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'id', 'title', 'project_id', 'status_id', 'observers', 'completion', 'branch', 'owner_id', 'user_id', 'description', 'attachments'
    ];
}
