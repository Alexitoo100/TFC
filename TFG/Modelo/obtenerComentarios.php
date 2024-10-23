<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

$id_juego = $_GET['id'];

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Consulta para obtener la fila si es que existe.
$consulta="SELECT usuarios.id, comentario, username, tipo, valoraciones.id FROM valoraciones JOIN usuarios on valoraciones.id_usuario=usuarios.id WHERE id_juego LIKE '$id_juego'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar los comentarios.
$Comentarios = array();

// Almacenamos los comentarios en un array
foreach ($consulta_fin as $comentario) {
    $array = array("id_usuario" => $comentario[0], "comentario" => $comentario[1], "usuario" => $comentario[2], "tipo" => $comentario[3], "id_comentario" => $comentario[4]);
    array_push($Comentarios, $array);
}

// Pasamos los comentarios del array a formato json.
echo json_encode($Comentarios);

?>