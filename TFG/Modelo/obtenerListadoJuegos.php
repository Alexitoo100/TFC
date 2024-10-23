<?php
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Consulta para obtener la fila si es que existe.
$consulta="SELECT id, nombre, precio, descripcion, genero, n_jugadores, img, certificaciones, f_lanzamiento FROM juegos";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

// Definimos un array para almacenar los juegos.
$Juegos = array();

// Almacenamos los juegos en un array
foreach ($consulta_fin as $juegos) {
    $id_juego = $juegos[0];
    $desarrolladoras = [];
    $plataformas = [];

    $arrayFinal;
    $array = array("id" => $juegos[0], "nombre" => $juegos[1], "precio" => $juegos[2], "descripcion" => $juegos[3], "genero" => $juegos[4], "n_jugadores" => $juegos[5],
    "img" => $juegos[6], "certificaciones" => $juegos[7], "f_lanzamiento" => $juegos[8]);

    // Consulta para obtener la fila si es que existe.
        $consulta2="SELECT nombre FROM desarrolladoras JOIN juegos_desarrolladoras on desarrolladoras.id=juegos_desarrolladoras.id_desarrolladoras WHERE id_juegos LIKE '$id_juego'";

    // Realizamos la consulta.
        $resultados_consulta2=mysqli_query($conexion, $consulta2);

    // Metemos los resultados en un array.
        $consulta_fin2=mysqli_fetch_all($resultados_consulta2);

    // Consulta para obtener la fila si es que existe.
        $consulta3="SELECT nombre FROM plataformas JOIN juegos_plataformas on plataformas.id=juegos_plataformas.id_plataformas WHERE id_juegos LIKE '$id_juego'";

    // Realizamos la consulta.
        $resultados_consulta3=mysqli_query($conexion, $consulta3);

    // Metemos los resultados en un array.
        $consulta_fin3=mysqli_fetch_all($resultados_consulta3);
     
    foreach ($consulta_fin2 as $desarrolladora) {
        array_push($desarrolladoras, $desarrolladora[0]); 
    }

    foreach ($consulta_fin3 as $plataforma) {
        array_push($plataformas, $plataforma[0]); 
    }

    $array_desarrolladoras = ["desarrolladoras" =>  $desarrolladoras];
    $array_plataformas = ["plataformas" =>  $plataformas];
    $arrayFinal = array_merge($array, $array_desarrolladoras, $array_plataformas);
    array_push($Juegos, $arrayFinal);
}

mysqli_close($conexion);

// Pasamos los juegos del array a formato json.
echo json_encode($Juegos);

?>