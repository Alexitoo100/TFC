<?php
session_start();

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Variables a usar
$id_plataforma = $_POST['id_plataforma'];
$nombreNuevo = $_POST['nombre'];
$nombreAnterior = $_POST['campo_nombre'];
// Hacemos la consulta a la base de datos sobre la tabla usuarios.
$consulta="SELECT * FROM plataformas WHERE nombre like '$nombreNuevo'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$tuplas=mysqli_fetch_row($resultados_consulta);

    if (mysqli_num_rows($resultados_consulta) === 0) {
            // Preparamos la sentencia de actualizacion de plataformas.
            $actualizacion="UPDATE plataformas SET nombre = '$nombreNuevo'
            WHERE id = '$id_plataforma'";
            
            // Realizamos la actualizacion.
            $resultado_actualizacion=mysqli_query($conexion, $actualizacion);
            echo "true";

    } else {

        if ($nombreNuevo === $nombreAnterior) {
            // Preparamos la sentencia de actualizacion de plataformas.
            $actualizacion="UPDATE plataformas SET nombre = '$nombreNuevo'
            WHERE id = '$id_plataforma'";
            
            // Realizamos la actualizacion.
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