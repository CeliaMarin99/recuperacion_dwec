<?php 
include_once "config.php";
include_once "Categoria.php";


try {
    // Crear una nueva conexión PDO usando las variables del archivo de configuración
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_nombre;charset=$db_charset", $db_usuario, $db_contraseña);
    // Configurar el modo de error de PDO
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die ("Error en la conexión: " . $e->getMessage());
}

$vec = []; 

$consulta = $conexion->query("SELECT id, nombre FROM categorias");

while ($reg = $consulta->fetchObject()) {
  $vec[] = new Categoria($reg->id, $reg->nombre);
}


// Crear la estructura XML usando SimpleXMLElement
$xmlstr = "<?xml version='1.0' encoding='UTF-8'?>\n".
          "<categorias></categorias>";
$xml = new SimpleXMLElement($xmlstr);

foreach ($vec as $categoria) {
    $item = $xml->addChild('categoria');
    $item->addChild('id', $categoria->id);
    $item->addChild('nombre', $categoria->nombre);

}

// Configurar el encabezado para XML
header('Content-Type: application/xml; charset=utf-8');
// Imprimir el XML generado
print $xml->asXML();