<?php
session_start();

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);
$id_juego = $_POST['id_juego'];

// Preparamos la sentencia de borrado de juegos.
$consulta="DELETE FROM juegos WHERE id = '$id_juego'";

// Realizamos el borrado.
$resultado_borrado=mysqli_query($conexion, $consulta);

mysqli_close($conexion);
?>