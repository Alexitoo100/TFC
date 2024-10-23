<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

$id_juego = $_GET['id'];

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Consulta para obtener la fila si es que existe.
$consulta="SELECT nombre FROM plataformas JOIN juegos_plataformas on plataformas.id=juegos_plataformas.id_plataformas WHERE id_juegos LIKE '$id_juego'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar las plataformas.
$Plataformas = array();

// Almacenamos las plataformas en un array
foreach ($consulta_fin as $plataforma) {
    $array = array("nombre" => $plataforma[0]);
    array_push($Plataformas, $array);
}

// Pasamos los plataformas del array a formato json.
echo json_encode($Plataformas);

?>