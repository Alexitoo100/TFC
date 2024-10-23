<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Consulta para obtener la fila si es que existe.
$consulta="SELECT DISTINCT juegos.id, juegos.nombre, precio, descripcion, genero, n_jugadores, img, certificaciones, f_lanzamiento, comentario, username FROM valoraciones 
JOIN usuarios on valoraciones.id_usuario=usuarios.id JOIN juegos on valoraciones.id_juego=juegos.id ORDER BY RAND() LIMIT 0,6";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar los comentarios de la página principal.
$Comentarios = array();

// Almacenamos los comentarios en un array
foreach ($consulta_fin as $comentario) {
    $array = array("id_juegos" => $comentario[0], "nombre_juegos" => $comentario[1], "precio" => $comentario[2], "descripcion" => $comentario[3], "genero" => $comentario[4],
    "n_jugadores" => $comentario[5], "img" => $comentario[6], "certificaciones" => $comentario[7], "f_lanzamiento" => $comentario[8], "comentario" => $comentario[9],
    "username" => $comentario[10]);
    array_push($Comentarios, $array);
}

// Pasamos los comentarios del array a formato json.
echo json_encode($Comentarios);

?>