<?php
session_start();

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);
$id_foro = $_POST['id_foro'];

// Preparamos la sentencia de borrado de foro.
$consulta="DELETE FROM foro WHERE id='$id_foro'";

// Realizamos el borrado.
$resultado_borrado=mysqli_query($conexion, $consulta);

mysqli_close($conexion);
?>