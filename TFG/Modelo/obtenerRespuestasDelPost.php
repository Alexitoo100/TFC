<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

$id_post = $_GET['id_post'];

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Consulta para obtener las respuestas de los post.
$consulta="SELECT respuestas.id, contenido, f_publicacion, usuarios.username, usuarios.id FROM respuestas JOIN usuarios ON usuarios.id=respuestas.id_usuario
WHERE id_post LIKE '$id_post'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar las respuestas de los post.
$Respuestas = array();

// Almacenamos las respuestas de los post en un array
foreach ($consulta_fin as $respuestas) {
    $array = array("id" => $respuestas[0], "contenido" => $respuestas[1], "f_publicacion" => $respuestas[2], 
    "nombre_usuario" => $respuestas[3], "id_usuario" => $respuestas[4]);
    array_push($Respuestas, $array);
}

// Pasamos las respuestas de los post del array a formato json.
echo json_encode($Respuestas);

?>