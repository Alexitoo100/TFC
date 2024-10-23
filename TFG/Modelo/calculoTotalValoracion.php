<?php
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

$id_juego = $_GET['id'];

// Consulta para obtener la fila si es que existe.
$consultaValoracion="SELECT SUM(graficos), SUM(optimizacion), SUM(jugabilidad)
FROM valoraciones WHERE id_juego LIKE '$id_juego'";

$consultaValoracionContador="SELECT COUNT(graficos), COUNT(optimizacion), COUNT(jugabilidad)
FROM valoraciones WHERE id_juego LIKE '$id_juego'";

// Realizamos la consulta.
$resultadosValoracionesFinales=mysqli_query($conexion, $consultaValoracion);

$resultadosCuentaValoracion=mysqli_query($conexion, $consultaValoracionContador);

// Metemos los resultados en un array.
$consultaValoracionesUsuarios=mysqli_fetch_all($resultadosValoracionesFinales);
$consultaContador=mysqli_fetch_all($resultadosCuentaValoracion);

mysqli_close($conexion);

// Definimos un array para almacenar las valoraciones.
$Valoraciones = array();

// Almacenamos las valoraciones en un array
foreach ($consultaValoracionesUsuarios as $valoracion) {
    
    $array = array("graficos" => $valoracion[0], "optimizacion" => $valoracion[1], "jugabilidad" => $valoracion[2]);
    
        array_push($Valoraciones, $array);
}

foreach ($consultaContador as $valoracionContador) {
    
  $array = array("cuentaGraficos" => $valoracionContador[0], "cuentaOptimizacion" => $valoracionContador[1], "cuentaJugabilidad" => $valoracionContador[2]);
  
      array_push($Valoraciones, $array);
}

  // Pasamos las valoraciones del array a formato json.
    echo json_encode($Valoraciones);

?>