<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

$id_usuario = $_GET['idUsuario'];
$passwordSinMd5 = $_SESSION['passwd-sin-md5'];

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Consulta para obtener la fila si es que existe.
$consulta="SELECT username, nombre, apellidos, correo, password FROM usuarios WHERE id LIKE '$id_usuario'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar los datos del usuario.
$usuarioMod = array();

// Almacenamos los usuarios en un array
foreach ($consulta_fin as $datosUsuario) {
    $array = array("username" => $datosUsuario[0], "nombre" => $datosUsuario[1], 
    "apellidos" => $datosUsuario[2], "correo" => $datosUsuario[3], 
    "password" => $datosUsuario[4], "passwordSinMd5" => $passwordSinMd5);
    array_push($usuarioMod, $array);
}

// Pasamos los usuarios del array a formato json.
echo json_encode($usuarioMod);

?>