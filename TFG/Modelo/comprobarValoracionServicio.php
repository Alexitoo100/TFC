<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

$id_usuario = $_GET['id'];

// Consulta para obtener la fila si es que existe.
$consulta="SELECT id, valoracion, mensaje FROM valoracion_servicio WHERE id_usuario LIKE '$id_usuario'";

// Ejecutamos la consulta y guardamos los resultados en una variable.
$consulta_fin=mysqli_query($conexion, $consulta);

if (mysqli_num_rows($consulta_fin) > 0) {
// Metemos los resultados en un array.
$filaVal=mysqli_fetch_row($consulta_fin);

// Almacenamos la valoracion del servicio en un array
    $array = array("id" => $filaVal[0], "valoracion" => $filaVal[1], "mensaje" => $filaVal[2]);
    
// Pasamos la valoracion del servicio del array a formato json.
    echo json_encode($array);
} else {
  echo "vacio";
}

mysqli_close($conexion);
?>