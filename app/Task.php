<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $table = 'tasks';
    
    protected $fillable = [
        'id', 'title', 'project_id', 'status_id', 'observers', 'completion', 'branch', 'owner_id', 'user_id', 'description', 'attachments'
    ];

    public function owner()
    {
        return $this->belongsTo('App\User');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function project()
    {
        return $this->belongsTo('App\Project');
    }

    public function report()
    {
        return $this->belongsTo('App\Report');
    }
}
