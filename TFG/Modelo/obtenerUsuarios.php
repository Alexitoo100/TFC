<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Consulta para obtener la fila si es que existe.
$consulta="SELECT id, username, nombre, apellidos, correo, password, tipo FROM usuarios";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar los usuarios.
$Usuarios = array();

// Almacenamos los usuarios en un array
foreach ($consulta_fin as $usuarios) {
    $array = array("id" => $usuarios[0], "username" => $usuarios[1], "nombre" => $usuarios[2], "apellidos" => $usuarios[3], "correo" => $usuarios[4], "password" => md5($usuarios[5]),
    "tipo" => $usuarios[6]);
    array_push($Usuarios, $array);
}

// Pasamos los usuarios del array a formato json.
echo json_encode($Usuarios);

?>