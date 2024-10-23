<?php
session_start();

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

$id_usu = $_SESSION['id_usuario'];
$id_foro = $_GET['id_foro'];

// Preparamos la consulta de foro.
$consulta="SELECT n_integrantes FROM foro WHERE id LIKE '$id_foro'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consultaFinal=mysqli_fetch_row($resultados_consulta);

echo $consultaFinal[0];

mysqli_close($conexion);
?>