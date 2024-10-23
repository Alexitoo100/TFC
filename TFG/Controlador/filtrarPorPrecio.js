$('#enviarPrecio').on('click', filtradoPrecio);

function filtradoPrecio() {
  function ajaxRequest() {
    $.ajax({
      url: "../../Modelo/filtrarPorPrecio.php",
      type: "GET",
      data: { precioMax, precioMin, genero },
      success: function (juegosPorPrecio) {
          $('.video-juegos').empty();

          if (juegosPorPrecio === "vacio") {
            $('.anclado').hide();
            $('.video-juegos').html('<div class="busqueda-sin-resultados"><h1>No se han encontrado resultados</h1></div>');
          } else {
            $('.anclado').show();
            juegosPorPrecio = JSON.parse(juegosPorPrecio);
            for (const juego of juegosPorPrecio) {
              obtenerJuegos(juego); 
            }
          }
      
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(
          errorThrown
        );
      },
    });
  }

    let precioMax = parseFloat($('#precioMax').val());
    let precioMin = parseFloat($('#precioMin').val());
    let genero = $('#genero').val();

    if (isNaN(precioMax) && isNaN(precioMin) && genero === 'Elige un genero...') {
      Qual.infodb('Aviso', '¡Para filtrar tienes que elegir un genero o rellenar los campos de precio!');
    } else if (isNaN(precioMax) && isNaN(precioMin) && genero !== 'Elige un genero...') {
      ajaxRequest(precioMax, precioMin, genero);
    } else if (precioMin > precioMax) {
      Qual.infodb('Aviso', '¡El precio mínimo no puede ser mayor que el precio máximo!');
    } else if (precioMax < precioMin ) {
      Qual.infodb('Aviso', '¡El precio máximo no puede ser menor que el precio mínimo!');
    } else if ((precioMin !== "") && isNaN(precioMax) && genero === "") {
      Qual.infodb('Aviso', '¡Tienen que estar los dos campos de precio rellenados para poder realizar una busqueda por rango!');
    } else if ((precioMax !== "") && isNaN(precioMin) && genero === "") {
      Qual.infodb('Aviso', '¡Tienen que estar los dos campos de precio rellenados para poder realizar una busqueda por rango!');
    } else if ((precioMin !== "") && isNaN(precioMax) && genero !== "") {
      Qual.infodb('Aviso', '¡Tienen que estar los dos campos de precio rellenados para poder realizar una busqueda por rango!');
    } else if ((precioMax !== "") && isNaN(precioMin) && genero !== "") {
      Qual.infodb('Aviso', '¡Tienen que estar los dos campos de precio rellenados para poder realizar una busqueda por rango!');
    } else {
      ajaxRequest(precioMax, precioMin, genero);
    }
}