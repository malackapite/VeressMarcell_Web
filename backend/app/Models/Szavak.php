<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Szavak extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function temaId(){
        return $this->belongsTo(Tema::class, "id");
    }
}
