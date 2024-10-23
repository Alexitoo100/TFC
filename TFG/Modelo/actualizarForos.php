<?php
session_start();

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Variables a usar
$id_foro = $_POST['id_foro'];
$nombreNuevo = $_POST['nombre'];
$integrantes = $_POST['integrantes'];
$propietario = $_POST['propietario'];
$tematica = $_POST['tematica'];
$nombreAnterior = $_POST['campo_nombre'];

// Hacemos la consulta a la base de datos sobre la tabla usuarios.
$consulta="SELECT * FROM foro WHERE nombre like '$nombreNuevo'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$tuplas=mysqli_fetch_row($resultados_consulta);

    if (mysqli_num_rows($resultados_consulta) === 0) {
        // Preparamos la sentencia de actualizacion.
            $actualizacion="UPDATE foro SET nombre = '$nombreNuevo', n_integrantes = '$integrantes', propietario = '$propietario', tematica = '$tematica'
            WHERE id = '$id_foro'";
            
            // Ejecutamos la actualizacion.
            $resultado_actualizacion=mysqli_query($conexion, $actualizacion);
            echo "true";

    } else {

        if ($nombreAnterior === $nombreNuevo) {
            // Preparamos la sentencia de actualizacion.
            $actualizacion="UPDATE foro SET nombre = '$nombreNuevo', n_integrantes = '$integrantes', propietario = '$propietario', tematica = '$tematica'
            WHERE id = '$id_foro'";

            // Ejecutamos la actualizacion.
            $resultado_actualizacion=mysqli_query($conexion, $actualizacion);
            echo "true";
        } else {
            if ($nombreNuevo === $tuplas[1]) {
                echo "exist";
            } 
        }
    }


mysqli_close($conexion);
?>