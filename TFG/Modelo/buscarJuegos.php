<?php
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

$nombreJuego = $_GET['nombreJuego'];

// Consulta para obtener la fila si es que existe.
$consulta="SELECT id, nombre, precio, descripcion, genero, n_jugadores, img, certificaciones FROM juegos WHERE juegos.nombre LIKE '%$nombreJuego%'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar los juegos.
$Juegos = array();

// Almacenamos los juegos en un array
foreach ($consulta_fin as $juegos) {
    
    $array = array("id" => $juegos[0], "nombre" => $juegos[1], "precio" => $juegos[2], "descripcion" => $juegos[3], "genero" => $juegos[4], "n_jugadores" => $juegos[5],
    "img" => $juegos[6], "certificaciones" => $juegos[7]);
    
        array_push($Juegos, $array);
}

  // Pasamos los juegos del array a formato json.
    echo json_encode($Juegos);

?>