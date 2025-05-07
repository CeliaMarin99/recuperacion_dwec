<?php
require_once 'config.php';
require_once 'Comunidad.php';

try {
    // Crear una nueva conexión PDO usando las variables del archivo de configuración
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_nombre;charset=$db_charset", $db_usuario, $db_contraseña);
    // Configurar el modo de error de PDO
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die ("Error en la conexión: " . $e->getMessage());
}

$vec=[]; // Array en el que se almacenarán los objetos Comunidad

$consulta = $conexion->query("SELECT id, nombre FROM comunidades_autonomas");
while ($reg = $consulta->fetchObject()) {
  $vec[] = new Comunidad($reg->nombre,$reg->id);
}

// $vec contiene un array de objetos Periferico

//var_dump($vec);

// Añadimos la cabecera de tipo JSON
header('Content-Type: application/json; charset=utf-8');
$json= json_encode($vec);  // json_encode convierte un array en formato JSON

print $json;