<?php
session_start();

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";


// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

$id_respuesta = $_POST['id_respuesta'];
$id_post = $_POST['id_post'];

// Preparamos la sentencia de borrado de respuestas.
$consulta="DELETE FROM respuestas WHERE id LIKE '$id_respuesta' AND id_post LIKE '$id_post'";

// Realizamos la consulta.
$resultado_borrado=mysqli_query($conexion, $consulta);

mysqli_close($conexion);
?>