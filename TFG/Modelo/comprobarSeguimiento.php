<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

$id_usuario = $_SESSION['id_usuario'];
$id_foro = $_GET['id_foro'];

// Consulta para obtener la fila si es que existe.
$consulta="SELECT id FROM usuarios_foros WHERE id_usuario LIKE '$id_usuario' AND id_foro LIKE '$id_foro'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

$tuplas=mysqli_fetch_row($resultados_consulta);

if ($tuplas == "") {
    echo "false";
} else {
    echo "true";
}

mysqli_close($conexion);

?>