<?php
session_start();

function realizarInsercion($nombreUsuarioNuevo, $nombre, $apellidos, $correo, $tipo, $id_usuario, $password, $md5_password, $conexion) {
    if ($password === '') {
        // Consulta para obtener la fila si es que existe.
        $actualizacion="UPDATE usuarios SET username = '$nombreUsuarioNuevo', nombre = '$nombre', apellidos = '$apellidos', correo = '$correo', 
        tipo = '$tipo' WHERE id = '$id_usuario'";
    
        // Realizamos la consulta.
        $resultado_actualizacion=mysqli_query($conexion, $actualizacion);
        echo "true";
    } else {
        // Consulta para obtener la fila si es que existe.
        $actualizacion="UPDATE usuarios SET username = '$nombreUsuarioNuevo', nombre = '$nombre', apellidos = '$apellidos', correo = '$correo', 
        password = '$md5_password', tipo = '$tipo' WHERE id = '$id_usuario'";

        // Realizamos la consulta.
        $resultado_actualizacion=mysqli_query($conexion, $actualizacion);
        echo "true";
    }
}

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Variables a usar
$id_usuario = $_POST['id_usuario'];
$nombreUsuarioNuevo = $_POST['username'];
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$correo = $_POST['correo'];
$password = $_POST['password'];
$md5_password = md5($password);
$tipo = $_POST['tipo'];
$nombreUsuarioAnterior = $_POST['nombre_usuario'];
$correo_usu = $_POST['correo_usu'];

// Hacemos la consulta a la base de datos sobre la tabla usuarios filtrando por nombre.
$consulta="SELECT * FROM usuarios WHERE username like '$nombreUsuarioNuevo'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$tuplas=mysqli_fetch_row($resultados_consulta);

// Hacemos la consulta a la base de datos sobre la tabla usuarios filtrando por correo.
$consultaCorreo="SELECT * FROM usuarios WHERE correo like '$correo'";

// Realizamos la consulta.
$resultados_consulta_correo=mysqli_query($conexion, $consultaCorreo);

// Metemos los resultados en un array.
$tuplasCorreo=mysqli_fetch_row($resultados_consulta_correo);

if (strlen($password) < 8 && $password != "") {
    echo 'password-mal';
} else if (!(filter_var($correo, FILTER_VALIDATE_EMAIL))) {
    echo 'correo-mal';
} else {
    if (mysqli_num_rows($resultados_consulta) === 0) {
            if (mysqli_num_rows($resultados_consulta_correo) === 0) {
                realizarInsercion($nombreUsuarioNuevo, $nombre, $apellidos, $correo, $tipo, $id_usuario, $password, $md5_password, $conexion);
            } else {
                if ($correo === $correo_usu) {
                    realizarInsercion($nombreUsuarioNuevo, $nombre, $apellidos, $correo, $tipo, $id_usuario, $password, $md5_password, $conexion);
                } else {
                    if ($correo === $tuplasCorreo[4]) {
                        echo "correo";
                    } else {
                        realizarInsercion($nombreUsuarioNuevo, $nombre, $apellidos, $correo, $tipo, $id_usuario, $password, $md5_password, $conexion);
                    }
                }
            }
    } else {
        if (mysqli_num_rows($resultados_consulta_correo) === 0) {
            if ($nombreUsuarioNuevo === $nombreUsuarioAnterior) {
                realizarInsercion($nombreUsuarioNuevo, $nombre, $apellidos, $correo, $tipo, $id_usuario, $password, $md5_password, $conexion);
            } else {
                if ($nombreUsuarioNuevo === $tuplas[1]) {
                    echo "username";
                } else {
                    realizarInsercion($nombreUsuarioNuevo, $nombre, $apellidos, $correo, $tipo, $id_usuario, $password, $md5_password, $conexion);
                }
            }
        } else {
            if ($nombreUsuarioNuevo === $nombreUsuarioAnterior && $correo === $correo_usu) {
                realizarInsercion($nombreUsuarioNuevo, $nombre, $apellidos, $correo, $tipo, $id_usuario, $password, $md5_password, $conexion);
            } else {
                if ($nombreUsuarioNuevo === $nombreUsuarioAnterior) {
                    if ($correo === $correo_usu) {
                        realizarInsercion($nombreUsuarioNuevo, $nombre, $apellidos, $correo, $tipo, $id_usuario, $password, $md5_password, $conexion);
                    } else {
                        if ($correo === $tuplasCorreo[4]) {
                            echo "correo";
                        } else {
                            realizarInsercion($nombreUsuarioNuevo, $nombre, $apellidos, $correo, $tipo, $id_usuario, $password, $md5_password, $conexion);
                        }
                    }
                } else {
                    if ($nombreUsuarioNuevo === $tuplas[1]) {
                        echo "username";
                    } else {
                        if (mysqli_num_rows($resultados_consulta_correo) === 0) {
                            realizarInsercion($nombreUsuarioNuevo, $nombre, $apellidos, $correo, $tipo, $id_usuario, $password, $md5_password, $conexion);
                        } else {
                            if ($correo === $correo_usu) {
                                realizarInsercion($nombreUsuarioNuevo, $nombre, $apellidos, $correo, $tipo, $id_usuario, $password, $md5_password, $conexion);
                            } else {
                                if ($correo === $tuplasCorreo[4]) {
                                    echo "correo";
                                } else {
                                    realizarInsercion($nombreUsuarioNuevo, $nombre, $apellidos, $correo, $tipo, $id_usuario, $password, $md5_password, $conexion);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    }

mysqli_close($conexion);
?>