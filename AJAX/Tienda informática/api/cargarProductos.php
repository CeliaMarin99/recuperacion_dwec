<?php 
include_once "config.php";
include_once "Producto.php";

try {
    // Crear una nueva conexión PDO usando las variables del archivo de configuración
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_nombre;charset=$db_charset", $db_usuario, $db_contraseña);
    // Configurar el modo de error de PDO
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die ("Error en la conexión: " . $e->getMessage());
}
$id= $_REQUEST['id'];

$vec=[]; // Array en el que se almacenarán los objetos Periferico

//Recuperar productos con el id
$consulta = $conexion->query("SELECT * FROM productos WHERE id_categoria=$id");
while ($reg = $consulta->fetchObject()) {
  $vec[] = new Producto($reg->id, $reg->nombre, $reg->precio, $reg->descripcion, $reg->imagen,$reg->caracteristicas);
}

// $vec contiene un array de objetos Periferico

//var_dump($vec);die();

// Añadimos la cabecera de tipo JSON
header('Content-Type: application/json; charset=utf-8');
print json_encode($vec);  // json_encode convierte un array en formato JSON