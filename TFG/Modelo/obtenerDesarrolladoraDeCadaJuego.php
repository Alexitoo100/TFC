<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

$id_juego = $_GET['idJuego'];

// Consulta para obtener la fila si es que existe.
$consulta="SELECT nombre FROM desarrolladoras JOIN juegos_desarrolladoras on desarrolladoras.id=juegos_desarrolladoras.id_desarrolladoras WHERE id_juegos LIKE '$id_juego'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar las desarrolladoras.
$Desarrolladoras = array();

// Almacenamos las desarrolladoras en un array
foreach ($consulta_fin as $desarrolladora) {
    $array = array("nombre" => $desarrolladora[0]);
    array_push($Desarrolladoras, $array);
}

// Pasamos las desarrolladoras del array a formato json.
echo json_encode($Desarrolladoras);

?>