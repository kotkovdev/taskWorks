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
            $table->bigInteger('project_id')->nullable()->default(null);
            $table->bigInteger('status_id');
            $table->json('observers')->nullable()->default(null);
            $table->integer('completion')->nullable()->default(null);
            $table->string('branch')->nullable()->default(null);
            $table->bigInteger('owner_id');
            $table->bigInteger('report_id');
            $table->bigInteger('user_id')->nullable()->default(null);
            $table->longText('description')->nullable()->default(null);
            $table->json('attachments')->nullable()->default(null);
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
