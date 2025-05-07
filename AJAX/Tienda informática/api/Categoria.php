<?php 
class Categoria{
    public $id;
    public $nombre;

    public function __construct($id, $nom){
        $this->id= $id;
        $this->nombre=$nom;
    }
    
    public function getId(){
        return $this->id;
    }

    public function getNombre(){
        return $this->nombre;
    }
}
