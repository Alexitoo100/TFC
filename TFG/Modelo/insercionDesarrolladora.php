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

// Variables a usar
$uuid_random = guidv4();
$nombre = $_POST['nombre'];
$fundacion = $_POST['fundacion'];

// Hacemos la consulta a la base de datos sobre la tabla desarrolladoras.
$consulta="SELECT * FROM desarrolladoras WHERE nombre like '$nombre';";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$tuplas=mysqli_fetch_row($resultados_consulta);

    if ($tuplas == '') {
        $insercion_desarrolladora="INSERT INTO desarrolladoras (id, nombre, f_fundacion) 
            VALUES ('$uuid_random', '$nombre', '$fundacion');";
            
            // Realizamos la insercion.
            $resultados_insercion=mysqli_query($conexion, $insercion_desarrolladora);
            echo "true";

    } else {
        // Si existe un foro con ese nombre devolvera exist.
        if ($nombre === $tuplas[1]) {
            echo "exist";
        } 
    }


mysqli_close($conexion);
?>