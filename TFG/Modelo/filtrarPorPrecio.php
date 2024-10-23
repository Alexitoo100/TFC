<?php
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

$precioMax = $_GET['precioMax'];
$precioMin = $_GET['precioMin'];
$genero = $_GET['genero'];

if ($genero === 'Elige un genero...' && $precioMin != "NaN" && $precioMax != "NaN") {
// Consulta para obtener la fila si es que existe.
$consulta="SELECT id, nombre, precio, descripcion, genero, n_jugadores, img, certificaciones FROM juegos WHERE precio BETWEEN '$precioMin' AND '$precioMax'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

if (mysqli_num_rows($resultados_consulta) > 0) {

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar los juegos.
$Juegos = array();

// Almacenamos los juegos en un array
foreach ($consulta_fin as $juegos) {
    
    $array = array("id" => $juegos[0], "nombre" => $juegos[1], "precio" => $juegos[2], "descripcion" => $juegos[3], "genero" => $juegos[4], "n_jugadores" => $juegos[5],
    "img" => $juegos[6], "certificaciones" => $juegos[7]);
    
        array_push($Juegos, $array);
}

  // Pasamos los juegos del array a formato json.
    echo json_encode($Juegos);

  } else {
    echo "vacio";
  }

  } else if ($genero != 'Elige un genero...' && $precioMin === "NaN" && $precioMax === "NaN") {
    // Consulta para obtener la fila si es que existe.
    $consulta="SELECT id, nombre, precio, descripcion, genero, n_jugadores, img, certificaciones FROM juegos WHERE genero LIKE '$genero'";

    // Realizamos la consulta.
    $resultados_consulta=mysqli_query($conexion, $consulta);

    if (mysqli_num_rows($resultados_consulta) > 0) {

    // Metemos los resultados en un array.
    $consulta_fin=mysqli_fetch_all($resultados_consulta);

    mysqli_close($conexion);

    // Definimos un array para almacenar los juegos.
    $Juegos = array();

// Almacenamos los juegos en un array
foreach ($consulta_fin as $juegos) {
    
    $array = array("id" => $juegos[0], "nombre" => $juegos[1], "precio" => $juegos[2], "descripcion" => $juegos[3], "genero" => $juegos[4], "n_jugadores" => $juegos[5],
    "img" => $juegos[6], "certificaciones" => $juegos[7]);
    
        array_push($Juegos, $array);
}

  // Pasamos los juegos del array a formato json.
    echo json_encode($Juegos);
  } else {
    echo "vacio";
  }
  
  } else {
    // Consulta para obtener la fila si es que existe.
    $consulta="SELECT id, nombre, precio, descripcion, genero, n_jugadores, img, certificaciones FROM juegos WHERE precio BETWEEN '$precioMin' AND '$precioMax' AND genero LIKE '$genero'";

    // Realizamos la consulta.
    $resultados_consulta=mysqli_query($conexion, $consulta);

  if (mysqli_num_rows($resultados_consulta) > 0) {
    // Metemos los resultados en un array.
    $consulta_fin=mysqli_fetch_all($resultados_consulta);

    mysqli_close($conexion);

    // Definimos un array para almacenar los juegos.
    $Juegos = array();

    // Almacenamos los juegos en un array
    foreach ($consulta_fin as $juegos) {
        
        $array = array("id" => $juegos[0], "nombre" => $juegos[1], "precio" => $juegos[2], "descripcion" => $juegos[3], "genero" => $juegos[4], "n_jugadores" => $juegos[5],
        "img" => $juegos[6], "certificaciones" => $juegos[7]);
        
            array_push($Juegos, $array);
    }

  // Pasamos los juegos del array a formato json.
    echo json_encode($Juegos);
  } else {
    echo "vacio";
  }
  }
?>