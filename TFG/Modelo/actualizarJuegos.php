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
$id = $_POST['idJuego'];
$nombreNuevo = $_POST['nombreJuego'];
$precio = $_POST['precio'];
$descripcion = $_POST['descripcion'];
$genero = $_POST['genero'];
$imagen = $_POST['nombre_imagen'];
$n_jugadores = $_POST['n_jugadores'];
$certificaciones = $_POST['certificaciones'];
$fecha_lanzamiento = $_POST['fecha_lanzamiento'];
$listado_plataformas = $_POST['pilaActualizacionPlataformas'];
$listado_desarrolladoras = $_POST['pilaActualizacionDesarrolladoras'];
$nombreAnterior = $_POST['nombreJuegoModificar'];

// Hacemos la consulta a la base de datos sobre la tabla juegos.
$consulta="SELECT * FROM juegos WHERE nombre like '$nombreNuevo'";

// Realizamos la consulta.
$comprobarSiExiste=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$tuplas=mysqli_fetch_row($comprobarSiExiste);

if ($nombreAnterior === $nombreNuevo) {
    // Preparamos la sentencia de borrado de juegos_plataformas.
    $consulta = "DELETE FROM juegos_plataformas WHERE id_juegos LIKE '$id'";

    // Ejecutamos el borrado.
    $resultados_consulta=mysqli_query($conexion, $consulta);

    // Preparamos la sentencia de borrado de juegos_desarrolladoras.
    $consulta = "DELETE FROM juegos_desarrolladoras WHERE id_juegos LIKE '$id'";

    // Ejecutamos el borrado.
    $resultados_consulta=mysqli_query($conexion, $consulta);

    foreach($listado_plataformas as $plataforma) {
    
            $id_plataforma = $plataforma['id'];
            $uuid_random = guidv4();

            // Preparamos la sentencia de insercion de juegos_plataformas.
            $consulta = "INSERT INTO juegos_plataformas (id, id_juegos, id_plataformas) 
            VALUES ('$uuid_random', '$id', '$id_plataforma')";

            // Ejecutamos la insercion.
            $resultados_consulta=mysqli_query($conexion, $consulta);
        
    }
    
    foreach($listado_desarrolladoras as $desarrolladora) {
        
            $id_desarrolladora = $desarrolladora['id'];
            $uuid_random = guidv4();

            // Preparamos la sentencia de insercion de juegos_desarrolladoras.
            $consulta = "INSERT INTO juegos_desarrolladoras (id, id_juegos, id_desarrolladoras) 
            VALUES ('$uuid_random', '$id', '$id_desarrolladora')";

            // Ejecutamos la insercion.
            $resultados_consulta=mysqli_query($conexion, $consulta);
    }

            // Preparamos la sentencia de actualizacion de los datos del juego.
            $actualizacion="UPDATE juegos SET nombre = '$nombreNuevo', precio = '$precio', descripcion = '$descripcion', genero = '$genero', n_jugadores = '$n_jugadores',
            img = '$imagen', certificaciones = '$certificaciones', f_lanzamiento = '$fecha_lanzamiento' WHERE id = '$id'";
            
            // Ejecutamos la actualizacion.
            $resultado_actualizacion=mysqli_query($conexion, $actualizacion);

            echo "true";

} else {
    if (mysqli_num_rows($comprobarSiExiste) === 0) {

        // Preparamos la sentencia de borrado de juegos_plataformas.
        $consulta = "DELETE FROM juegos_plataformas WHERE id_juegos LIKE '$id'";

        // Ejecutamos el borrado.
        $resultados_consulta=mysqli_query($conexion, $consulta);

        // Preparamos la sentencia de borrado de juegos_desarrolladoras.
        $consulta = "DELETE FROM juegos_desarrolladoras WHERE id_juegos LIKE '$id'";

        // Ejecutamos el borrado.
        $resultados_consulta=mysqli_query($conexion, $consulta);

    foreach($listado_plataformas as $plataforma) {
    
            $id_plataforma = $plataforma['id'];
            $uuid_random = guidv4();
            // Preparamos la sentencia de insercion de juegos_plataformas.
            $consulta = "INSERT INTO juegos_plataformas (id, id_juegos, id_plataformas) 
            VALUES ('$uuid_random', '$id', '$id_plataforma')";

            // Realizamos la consulta.
            $resultados_consulta=mysqli_query($conexion, $consulta);
        
    }
    
    foreach($listado_desarrolladoras as $desarrolladora) {
        
            $id_desarrolladora = $desarrolladora['id'];
            $uuid_random = guidv4();
            // Preparamos la sentencia de insercion de juegos_desarrolladoras.
            $consulta = "INSERT INTO juegos_desarrolladoras (id, id_juegos, id_desarrolladoras) 
            VALUES ('$uuid_random', '$id', '$id_desarrolladora')";

            // Realizamos la consulta.
            $resultados_consulta=mysqli_query($conexion, $consulta);
    }

        // Preparamos la sentencia de actualizacion de juegos.
        $actualizacion="UPDATE juegos SET nombre = '$nombreNuevo', precio = '$precio', descripcion = '$descripcion', genero = '$genero', n_jugadores = '$n_jugadores',
        img = '$imagen', certificaciones = '$certificaciones', f_lanzamiento = '$fecha_lanzamiento' WHERE id = '$id'";
        
        // Realizamos la consulta.
        $resultado_actualizacion=mysqli_query($conexion, $actualizacion);

        echo "true";

    } else {
        if ($nombreNuevo === $tuplas[1]) {
            // Si existe un juego con ese nombre devuelve exist.
            echo "exist";
        } 
    }

}


mysqli_close($conexion);
?>