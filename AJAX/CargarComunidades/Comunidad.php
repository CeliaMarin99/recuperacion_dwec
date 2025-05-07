<?php 
class Comunidad {

    public $nombre;
    public $id;

    public function __construct($nom, $id)
    {
        $this->nombre=$nom;
        $this->id=$id;
    }

    public function getNombre(){
        return $this->nombre;
    }

    public function getId(){
        return $this->id;
    }
}