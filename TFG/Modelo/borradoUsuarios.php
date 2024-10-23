<?php
session_start();

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);
$id_usuario = $_POST['id_usuario'];

// Preparamos la sentencia de borrado de usuarios.
$consulta="DELETE FROM usuarios WHERE id='$id_usuario'";

// Realizamos la consulta.
$resultado_borrado=mysqli_query($conexion, $consulta);

mysqli_close($conexion);
?>