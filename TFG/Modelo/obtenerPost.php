<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

$id_foro = $_GET['id'];

// Consulta para obtener la fila si es que existe.
$consulta="SELECT post.id, f_publicacion, contenido, username, post.id_usuario FROM post JOIN usuarios on usuarios.id=post.id_usuario WHERE id_foro LIKE '$id_foro' ORDER BY f_publicacion ASC";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar los post.
$Post = array();

// Almacenamos los post en un array
foreach ($consulta_fin as $post) {
    $array = array("id" => $post[0], "fecha" => $post[1], "mensaje" => $post[2], "usuario" => $post[3], "id_usuario" => $post[4]);
    array_push($Post, $array);
}

// Pasamos los post del array a formato json.
echo json_encode($Post);

?>