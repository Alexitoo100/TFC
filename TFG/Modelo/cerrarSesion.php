<?php
// Continuamos la sesion actual.
session_start();
// Destruimos la sesion actual.
session_destroy();

echo "Se ha cerrado la sesion.";

?>