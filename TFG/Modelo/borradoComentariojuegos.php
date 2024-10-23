<?php
session_start();

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";
$id = $_POST['id_comentario'];


// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Preparamos la sentencia de borrado de valoraciones.
$borradoValoraciones="DELETE FROM valoraciones WHERE id='$id'";

// Realizamos el borrado.
$resultado_borrado=mysqli_query($conexion, $borradoValoraciones);

mysqli_close($conexion);
?>