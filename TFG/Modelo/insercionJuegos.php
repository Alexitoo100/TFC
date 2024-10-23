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
$precio = $_POST['precio'];
$descripcion = $_POST['descripcion'];
$genero = $_POST['genero'];
$imagen = $_POST['nombre_imagen'];
$n_jugadores = $_POST['n_jugadores'];
$certificaciones = $_POST['certificaciones'];
$fecha_lanzamiento = $_POST['fecha_lanzamiento'];
$listado_plataformas = $_POST['arrayPlataformas'];
$listado_desarrolladoras = $_POST['arrayDesarrolladoras'];

// Hacemos la consulta a la base de datos sobre la tabla juegos.
$consulta="SELECT * FROM juegos WHERE nombre like '$nombre'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$tuplas=mysqli_fetch_row($resultados_consulta);

    if ($tuplas == '') {
        // Preparamos la insercion de juegos.
        $insercion_juego="INSERT INTO juegos (id, nombre, precio, descripcion, genero, n_jugadores, img, certificaciones, f_lanzamiento) 
            VALUES ('$uuid_random', '$nombre', '$precio', '$descripcion', '$genero', '$n_jugadores', '$imagen', '$certificaciones', '$fecha_lanzamiento');";
            // Realizamos la insercion.
            $resultados_insercion=mysqli_query($conexion, $insercion_juego);

            foreach($listado_plataformas as $id_plataforma) {
                $uuid_plataformas = guidv4();
                // Preparamos la insercion de juegos_plataformas.
                $insercion_plataformas="INSERT INTO juegos_plataformas (id, id_juegos, id_plataformas) 
                VALUES ('$uuid_plataformas', '$uuid_random', '$id_plataforma');";
                $resultados_insercion=mysqli_query($conexion, $insercion_plataformas);
            }

            foreach($listado_desarrolladoras as $id_desarrolladora) {
                $uuid_desarrolladora = guidv4();
                // Preparamos la insercion de juegos_desarrolladoras.
                $insercion_desarrolladoras="INSERT INTO juegos_desarrolladoras (id, id_juegos, id_desarrolladoras) 
                VALUES ('$uuid_desarrolladora', '$uuid_random', '$id_desarrolladora');";
                $resultados_insercion=mysqli_query($conexion, $insercion_desarrolladoras);
            }

            echo ("true" . "/" . $uuid_random);

    } else {
        // Si existe un juego con ese nombre devuelve exist.
        if ($nombre === $tuplas[1]) {
            echo ("exist" . "/" . "exist");
        } 
    }


mysqli_close($conexion);
?>