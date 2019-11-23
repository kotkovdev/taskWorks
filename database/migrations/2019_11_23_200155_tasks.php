<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Tasks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->bigInteger('project_id');
            $table->bigInteger('status_id');
            $table->json('observers');
            $table->integer('completetion');
            $table->string('branch');
            $table->bigInteger('owner_id');
            $table->bigInteger('user_id');
            $table->longText('description');
            $table->json('attachments');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
