<?php

namespace App\Models;

use Brick\Math\BigInteger;
use Dflydev\DotAccessData\Data;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Exception;


class Cadastro extends Model
{
    use HasFactory;
    protected $table = 'cadastro';
    protected $fillable = [
        'id',
        'cliente',
        'data',
        'hora',
        'vendedor',
        'descricao',
        'valor',

    ];


    protected $casts = [
        'data' => 'date',
    ];

    static public function adicionar($data)
    {
        try {
            return Cadastro::create($data->all());
        } catch (Exception $e) {
            return response()->json(['error' => $data->all()], 422);
        }
    }


    static public function getCadastros()
    {
        return DB::table('cadastro')->orderBy('data')->get();
    }

    static public function getCadastroById($id)
    {
        return DB::table('cadastro')->find($id);
    }

    static public function updateCadastro($id, $data)
    {
        return DB::table('cadastro')->where('id', $id)->update($data->all());
    }

    static public function deleteCadastro($id)
    {
        return DB::table('cadastro')->where('id', $id)->delete();
    }

    static public function getClientNome($nome){
        return DB::table('cadastro')->where('cliente', $nome)
        ->orderBy('data')->get();
    }

    static public function getVendedorNome($nome){
        return DB::table('cadastro')->where('vendedor', $nome)
        ->orderBy('data')->get();
    }

    static public function getIntervalo($inicio, $fim){
        return DB::table('cadastro')->whereBetween('data', [$inicio, $fim])
        ->orderBy('data')->get();
    }
}
