<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Cadastro;
use Exception;
use Illuminate\Support\Facades\DB;

class CadastroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Cadastro::getCadastros();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Cadastro::adicionar($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Cadastro::getCadastroById($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // return ($id);
        return Cadastro::updateCadastro($id, $request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Cadastro::deleteCadastro($id);
    }

    public static function filtrar(Request $request){
       if($request->tipo == "nomeCliente"){
           return Cadastro::getClientNome($request->nome);
       }else if($request->tipo == "nomeVendedor"){
        return Cadastro::getVendedorNome($request->nome);
       }else if($request->tipo == "intervalo"){
        return Cadastro::getIntervalo($request->inicio,$request->fim);
       }
       
    }
}
