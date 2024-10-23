<?php
session_start();

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);
$id_plataforma = $_POST['id_plataforma'];

// Preparamos la sentencia de borrado de plataformas.
$consulta="DELETE FROM plataformas WHERE id='$id_plataforma'";

// Realizamos la consulta.
$resultado_borrado=mysqli_query($conexion, $consulta);

mysqli_close($conexion);
?>