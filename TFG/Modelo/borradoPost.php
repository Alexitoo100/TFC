<?php
session_start();

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);
$id_comentario = $_POST['id_comentario'];

// Preparamos la sentencia de borrado de post.
$consulta="DELETE FROM post WHERE id='$id_comentario'";

// Realizamos la consulta.
$resultado_borrado=mysqli_query($conexion, $consulta);

mysqli_close($conexion);
?>