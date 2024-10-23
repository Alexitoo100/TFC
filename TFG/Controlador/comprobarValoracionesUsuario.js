
function comprobarValoracionExistente(id_juego, tipo) {   
    $('#valorarJuego').on('click', function() {
    if (tipo !== '2') {
    $.ajax({
        url: "../../Modelo/comprobarValoracion.php",
        type: "GET",
        data: { id_juego },
        success: function (response) {
            mostrarValoracionExistente(response);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
    }
})
}

function mostrarValoracionExistente(listaValoracion) {
    let valoracionFinal = JSON.parse(listaValoracion);
    for (const row of valoracionFinal) {
        const {graficos, optimizacion, jugabilidad, comentario, id_juego} = row;

        for (let a = 1; a <= graficos; a++ ) {
            $('.clasificacion1 label[for="radio'+a+id_juego+'"]').css('color', 'orange');
            $('.clasificacion1 label[for="radio'+a+id_juego+'"]').attr('coloreado', true);
        }

        for (let b = 1; b <= optimizacion; b++ ) {
            $('.clasificacion2 label[for="radioOpt'+b+id_juego+'"]').css('color', 'orange');
            $('.clasificacion2 label[for="radioOpt'+b+id_juego+'"]').attr('coloreado', true);
        }

        for (let c = 1; c <= jugabilidad; c++ ) {
            $('.clasificacion3 label[for="radioJug'+c+id_juego+'"]').css('color', 'orange');
            $('.clasificacion3 label[for="radioJug'+c+id_juego+'"]').attr('coloreado', true);
        }
        $('.texto-reseña').text(comentario);

        comprobarPuntuacionEstrellas(id_juego);
    }
}