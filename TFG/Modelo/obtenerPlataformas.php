<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Consulta para obtener la fila si es que existe.
$consulta="SELECT * FROM plataformas";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar los plataformas.
$Plataformas = array();

// Almacenamos los plataformas en un array
foreach ($consulta_fin as $plataforma) {
    $array = array("id" => $plataforma[0], "nombre" => $plataforma[1]);
    array_push($Plataformas, $array);
}

// Pasamos los plataformas del array a formato json.
echo json_encode($Plataformas);

?>