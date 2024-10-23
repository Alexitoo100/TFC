<?php

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

session_start();

    if(isset($_SESSION['usuario'])) {
        $nombre = $_SESSION['usuario'];
        $tipo = $_SESSION['tipo'];
        $id = $_SESSION['id_usuario'];
        echo ($nombre . "º" . $tipo . "º" . $id);  
    } else {
        $_SESSION['id_usuario'] = guidv4();
        $_SESSION['usuario'] = 'anonimo';
        $_SESSION['nombre'] = 'anonimo';
        $_SESSION['tipo'] = '2';
        $_SESSION['correo'] = 'anonimo@anonimo.es';
        $id = $_SESSION['id_usuario'];
        $nombre = $_SESSION['usuario'];
        $tipo = $_SESSION['tipo'];
        echo ($nombre . "º" . $tipo . "º" . $id);
    }

?>