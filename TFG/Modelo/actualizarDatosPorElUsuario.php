<?php
session_start();

function realizarInsercion($nombreUsuarioNuevo, $nombre, $apellidos, $correo, $id_usuario, $passwordActual, $passwordNueva, $md5_password, $md5_passwordActual, $passwordBD, $conexion) {
    if ($md5_passwordActual !== $passwordBD && $passwordActual !== '') {
        echo 'passwordActual-no-coincide-con-bd';
    } else if ($passwordNueva === '' && $passwordActual === '') {
        // Consulta para obtener la fila si es que existe.
        $actualizacion="UPDATE usuarios SET username = '$nombreUsuarioNuevo', nombre = '$nombre', apellidos = '$apellidos', correo = '$correo'
        WHERE id = '$id_usuario'";
        // Realizamos la consulta.
        $resultado_actualizacion=mysqli_query($conexion, $actualizacion);
        $_SESSION['usuario'] = $nombreUsuarioNuevo;
        echo "true";
    } else if ($passwordNueva !== '' && $passwordActual === '') {
        echo "rellenarCampoPasswdActual";
    } else if ($passwordNueva == '' && $passwordActual !== '') {
        echo "rellenarCampoPasswdNuevo";
    } else {
        // Consulta para obtener la fila si es que existe.
        $actualizacion="UPDATE usuarios SET username = '$nombreUsuarioNuevo', nombre = '$nombre', apellidos = '$apellidos', correo = '$correo', 
        password = '$md5_password' WHERE id = '$id_usuario'";
        // Realizamos la consulta.
        $resultado_actualizacion=mysqli_query($conexion, $actualizacion);
        $_SESSION['usuario'] = $nombreUsuarioNuevo;
        $_SESSION['passwd-sin-md5'] = $passwordNueva;
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
$id_usuario = $_POST['id'];
$nombreDeUsuarioNuevo = $_POST['nombreDeUsuario'];
$nombre = $_POST['nombrePersona'];
$apellidos = $_POST['apellidosPersona'];
$correo = $_POST['correoPersona'];
$passwordBD = $_POST['passwordBD'];
$passwordActual = $_POST['contrasenyaActual'];
$md5_passwordActual = md5($passwordActual);
$passwordNueva = $_POST['contrasenyaNueva'];
$md5_password = md5($passwordNueva);
$nombreUsuarioAnterior = $_POST['nombreDeUsuarioBD'];
$correo_usu = $_POST['correo_usu'];

// Hacemos la consulta a la base de datos sobre la tabla usuarios.
$consulta="SELECT * FROM usuarios WHERE username like '$nombreDeUsuarioNuevo'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$tuplas=mysqli_fetch_row($resultados_consulta);

// Hacemos la consulta a la base de datos sobre la tabla usuarios.
$consultaCorreo="SELECT * FROM usuarios WHERE correo like '$correo'";

// Realizamos la consulta.
$resultados_consulta_correo=mysqli_query($conexion, $consultaCorreo);

// Metemos los resultados en un array.
$tuplasCorreo=mysqli_fetch_row($resultados_consulta_correo);

if ($nombreDeUsuarioNuevo === '' || $nombre === ''
|| $apellidos === '' || $correo === '') {
    echo 'vacio';
} else if (strlen($passwordActual) < 8 && $passwordActual != "") {
    echo 'password-actual-mal';
} else if (strlen($passwordNueva) < 8 && $passwordNueva != "") {
    echo 'password-nueva-mal';
} else if (!(filter_var($correo, FILTER_VALIDATE_EMAIL))) {
    echo 'correo-mal';
} else {
        if ($correo === $correo_usu && $nombreDeUsuarioNuevo === $nombreUsuarioAnterior) {
            realizarInsercion($nombreDeUsuarioNuevo, $nombre, $apellidos, $correo, $id_usuario, $passwordActual, $passwordNueva, $md5_password, 
            $md5_passwordActual, $passwordBD, $conexion);
        } else {
            if (mysqli_num_rows($resultados_consulta) === 0) {
                if (mysqli_num_rows($resultados_consulta_correo) === 0) {
                    realizarInsercion($nombreDeUsuarioNuevo, $nombre, $apellidos, $correo, $id_usuario, $passwordActual, $passwordNueva, $md5_password, 
                    $md5_passwordActual, $passwordBD, $conexion);
                } else {
                    if ($correo === $correo_usu) {
                        realizarInsercion($nombreDeUsuarioNuevo, $nombre, $apellidos, $correo, $id_usuario, $passwordActual, $passwordNueva, $md5_password, 
                        $md5_passwordActual, $passwordBD, $conexion);
                    } else if ($correo === $tuplasCorreo[4]) {
                        echo "correo";
                    } else {
                        realizarInsercion($nombreDeUsuarioNuevo, $nombre, $apellidos, $correo, $id_usuario, $passwordActual, $passwordNueva, $md5_password, 
                        $md5_passwordActual, $passwordBD, $conexion);
                    } 
                }
            } else {
                if ($nombreDeUsuarioNuevo === $nombreUsuarioAnterior) {
                    if ($correo === $correo_usu) { 
                        realizarInsercion($nombreDeUsuarioNuevo, $nombre, $apellidos, $correo, $id_usuario, $passwordActual, $passwordNueva, $md5_password, 
                        $md5_passwordActual, $passwordBD, $conexion);
                    } else if (mysqli_num_rows($resultados_consulta_correo) !== 0) {
                        echo "correo";
                    } else {
                        realizarInsercion($nombreDeUsuarioNuevo, $nombre, $apellidos, $correo, $id_usuario, $passwordActual, $passwordNueva, $md5_password, 
                        $md5_passwordActual, $passwordBD, $conexion);
                    }
                } else if ($nombreDeUsuarioNuevo === $tuplas[1]) {
                    echo "username";
                } else {
                    realizarInsercion($nombreDeUsuarioNuevo, $nombre, $apellidos, $correo, $id_usuario, $passwordActual, $passwordNueva, $md5_password, 
                    $md5_passwordActual, $passwordBD, $conexion);
                }
            }
        }
}

mysqli_close($conexion);
?>