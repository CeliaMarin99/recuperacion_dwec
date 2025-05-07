<?php 
class Producto{
    public $id;
    public $nombre;
    public $precio;
    public $descripcion;
    public $imagen;
    public $caracteristicas;

    public function __construct($id, $nombre, $precio, $descripcion, $imagen, $caracteristicas)
    {
        $this->id=$id;
        $this->nombre=$nombre;
        $this->precio=$precio;
        $this->descripcion=$descripcion;
        $this->imagen=$imagen;
        $this->caracteristicas=$caracteristicas;
    }


}