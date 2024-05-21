<?php

use App\Models\Szavak;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('szavaks', function (Blueprint $table) {
            $table->id();
            $table->string('angol');
            $table->string('magyar');
            $table->foreignId('temaId')->constrained("temas");
            $table->timestamps();
        });

        Szavak::create([
            "angol"=> "cat",
            "magyar" => "macska",
            "temaId" => 1,
        ]);
        Szavak::create([
            "angol"=> "dog",
            "magyar" => "kutya",
            "temaId" => 1,
        ]);
        Szavak::create([
            "angol"=> "goat",
            "magyar" => "kecske",
            "temaId" => 1,
        ]);
        Szavak::create([
            "angol"=> "card",
            "magyar" => "kártya",
            "temaId" => 2,
        ]);
        Szavak::create([
            "angol"=> "interface",
            "magyar" => "interfész",
            "temaId" => 2,
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('szavaks');
    }
};
