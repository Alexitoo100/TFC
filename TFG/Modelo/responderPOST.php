<?php
session_start();

function curdate() {
    return date('Y-m-d h:i:s');
}

function guidv4($data = null) {
    // Generate 16 bytes (128 bits) of random data or use the data passed into the function.
    $data = $data ?? random_bytes(16);
    assert(strlen($data) == 16);

    // Set version to 0100
    $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
    // Set bits 6-7 to 10
    $data[8] = chr(ord($data[8]) & 0x3f | 0x80);

    // Output the 36 character UUID.
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Variables a usar
$id = guidv4();
$fecha = curdate();
$respuestaEnPost = $_POST['respuesta'];
$id_usu = $_SESSION['id_usuario'];
$id_post = $_POST['id_post'];

// Preparamos la insercion de la respuesta.
$insercion="INSERT INTO respuestas VALUES('$id', '$respuestaEnPost', '$fecha', '$id_post', '$id_usu')";

// Ejecutamos la insercion.
$resultado_insercion=mysqli_query($conexion, $insercion);

mysqli_close($conexion);
?>