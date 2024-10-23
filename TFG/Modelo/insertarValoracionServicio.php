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

function curdate() {
    $date = new DateTime("+2 months");
    return $date->format("d/m/Y");
}

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Variables a usar
$id = guidv4();
$id_usu = $_SESSION['id_usuario'];
$mensaje = $_POST['mensaje'];
$cualEstaMarcado = $_POST['cualEstaMarcado'];

            // Hacemos la consulta a la base de datos sobre la tabla usuarios.
            $consulta="SELECT * FROM valoracion_servicio WHERE 
            id_usuario like '$id_usu'";

            // Realizamos la consulta.
            $resultados_consulta=mysqli_query($conexion, $consulta);

            // Metemos los resultados en un array.
            $tuplas=mysqli_fetch_row($resultados_consulta);

    if (mysqli_num_rows($resultados_consulta) > 0) {
        if ($cualEstaMarcado === 'true') {
            // Definimos la actualizacion.
            $actualizacion="UPDATE valoracion_servicio SET valoracion = '1', 
            mensaje = '$mensaje' WHERE id = '$tuplas[0]' AND id_usuario LIKE '$id_usu'";
            
            // Realizamos la actualizacion.
            $resultado_actualizacion=mysqli_query($conexion, $actualizacion);
            echo "actualizacion";
        } else {
            // Definimos la actualizacion.
            $actualizacion="UPDATE valoracion_servicio SET valoracion = '0', 
            mensaje = '$mensaje' WHERE id = '$tuplas[0]' AND id_usuario LIKE '$id_usu'";
            
            // Realizamos la actualizacion.
            $resultado_actualizacion=mysqli_query($conexion, $actualizacion);
            echo "actualizacion";
        }

    } else {
        if ($cualEstaMarcado === 'true') {
            // Definimos la insercion.
            $insercion="INSERT INTO valoracion_servicio VALUES('$id', '1', '$mensaje', '$id_usu')";

            // Realizamos la insercion.
            $resultado_insercion=mysqli_query($conexion, $insercion); 
            echo "insercion";
        } else {
            // Definimos la insercion.
            $insercion="INSERT INTO valoracion_servicio VALUES('$id', '0', '$mensaje', '$id_usu')";

            // Realizamos la insercion.
            $resultado_insercion=mysqli_query($conexion, $insercion); 
            echo "insercion";
        }
    }

mysqli_close($conexion);
?>