<?php 
class Provincia {

    public $id;
    public $nombre;
    public $idComunidad;

    public function __construct($id, $nom, $idC)
    {
        $this->id=$id;
        $this->nombre=$nom;
        $this->idComunidad=$idC;
    }

    public function getNombre(){
        return $this->nombre;
    }

    public function getId(){
        return $this->id;
    }

    
    public function getIdC(){
        return $this->idComunidad;
    }

}