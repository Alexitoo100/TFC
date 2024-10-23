<?php
session_start();

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);
$id_desarrolladora = $_POST['id_desarrolladora'];

// Preparamos la sentencia de borrado de valoraciones.
$consulta="DELETE FROM desarrolladoras WHERE id='$id_desarrolladora'";

// Realizamos el borrado.
$resultado_borrado=mysqli_query($conexion, $consulta);

mysqli_close($conexion);
?>