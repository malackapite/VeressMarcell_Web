<?php

namespace App\Http\Controllers;

use App\Models\Szavak;
use Illuminate\Http\Request;

class SzavakController extends Controller
{
    //
    public function index(){
        return Szavak::all()->load("temaId");
    }

    public function filterbyTema($id){
        return Szavak::where("temaId",$id)->get();
    }
}
