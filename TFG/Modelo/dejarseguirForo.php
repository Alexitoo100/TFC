<?php
session_start();

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

$id_usu = $_SESSION['id_usuario'];
$id_foro = $_POST['id_foro'];

// Restamos un integrante al foro.
$usuarioMenos="UPDATE foro SET n_integrantes=n_integrantes-1 WHERE id LIKE '$id_foro'";
$resultado_update=mysqli_query($conexion, $usuarioMenos);

// Preparamos la sentencia de borrado del usuario.
$consulta="DELETE FROM usuarios_foros WHERE id_usuario LIKE '$id_usu' AND id_foro LIKE '$id_foro'";

// Realizamos el borrado.
$resultado_borrado=mysqli_query($conexion, $consulta);

mysqli_close($conexion);
?>