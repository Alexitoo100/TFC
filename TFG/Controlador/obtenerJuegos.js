let cookie = window.localStorage;
let listaGeneros = new Array();
$(document).ready(cargarJuegos);

function cargarJuegos() {
$('.pieDePagina').css('position', '');

$.ajax({
  url: "../../Modelo/obtenerJuegos.php",
  type: "GET",
  dataType: "json",
  success: function (Listadojuegos) {
    listadoJuegos(Listadojuegos);
  },
  error: function (XMLHttpRequest, textStatus, errorThrown) {
    console.log(
      errorThrown
    );
  },
});
}

function listadoJuegos(Listadojuegos) {
    for (const juego of Listadojuegos) {
        if (!listaGeneros.includes(juego.genero)) {
            listaGeneros.push(juego.genero);
        }
        obtenerJuegos(juego);
    }
    obtenerGeneros(listaGeneros);
}

function obtenerListadoJuegosFiltradosPorGenero(Listadojuegos) {
    for (const juego of Listadojuegos) {
        obtenerJuegos(juego); 
    }
}

function obtenerGeneros(genero) {
    let pordefecto = $('<option></option>');
        pordefecto.append('Elige un genero...');
        $('#genero').append(pordefecto);

    for(let i = 0; i < genero.length; i++) {
        let filtergen = $('<option></option>');
        $(filtergen).append(genero[i]);
        $('#genero').append(filtergen);
    }
}

function obtenerJuegos(juego) {
    const {id, nombre, precio, descripcion, genero, n_jugadores, img, certificaciones, f_lanzamiento} = juego;
    let divisor = $("<div></div>");
    divisor.addClass("col" + " cards-juegos mx-auto " + "col-sm-3 col-dm-3 col-3");

    let card = $("<div></div>");
        card.addClass("card");
        card.prop("style", "width: 18rem;");
        card.prop('id', 'card'+id);

    let divfavoritos = $("<div></div>");
        $(divfavoritos).addClass('div-favoritos');
        $(divfavoritos).html('<i class="fa-regular fa-heart fa-2x heartclass' + id + '" marcado="false" id="heart' + id +'"></i>');
        $(divfavoritos).prop('id', 'fav'+id);
        let span = $("<span></span>");
        let span2 = $("<span></span>");
        let span3 = $("<span></span>");
        let span4 = $("<span></span>");

    let title = $('<p></p');
        $(title).prop('class', "card-title");
        $(title).html(nombre);

    let cardbody = $("<div></div>");
        $(cardbody).addClass("card-body");

    let divdescripcion = $('<p></p>');
        $(divdescripcion).prop('class', "card-text");
        $(divdescripcion).html(descripcion);

    let divlanzamiento = $('<p></p>');
        $(divlanzamiento).addClass("texto-lanzamiento");
        $(divlanzamiento).html('<strong>Lanzamiento: </strong>' + f_lanzamiento);

    let detalles = $("<button>");
        $(detalles).prop("type", "button");
        $(detalles).prop('id',"detalles"+id);
        $(detalles).prop('class',"mt-5 mx-5 ver-detalles");
        $(detalles).prop("textContent", 'Ver detalles');

    let imagen = $("<img>");
        $(imagen).addClass("card-img-top card-img");
        $(imagen).prop("src", '../img/' + img);
        $(imagen).prop("id", "img-juegos");
        $(imagen).prop("alt", "Card image cap");

    let valoraciones = $("<form></form>");
        $(valoraciones).addClass("texto-valoraciones1");

    let valoraciones2 = $("<form></form>");
        $(valoraciones2).addClass("texto-valoraciones2");

    let valoraciones3 = $("<form></form>");
        $(valoraciones3).addClass("texto-valoraciones3");

    let clasificacion = $('<div></div>');
        clasificacion.addClass('clasificacion clasificacion1');
    let clasificacion2 = $('<div></div>');
        clasificacion2.addClass('clasificacion clasificacion2');
    let clasificacion3 = $('<div></div>');
        clasificacion3.addClass('clasificacion clasificacion3');

    let radio = $('<input>');
        radio.prop('id', 'radio5Gra' + id);
        radio.prop('type', 'radio');
        radio.prop('name', 'estrellas');
        radio.prop('value', 5);

    let label1 = $('<label></label>');
        label1.prop('for', 'radio5Gra' + id);
        label1.prop('textContent', '★');

    let radio2 = $('<input>');
        radio2.prop('id', 'radio4Gra' + id);
        radio2.prop('type', 'radio');
        radio2.prop('name', 'estrellas');
        radio2.prop('value', 4);

    let label2 = $('<label></label>');
        label2.prop('for', 'radio4Gra' + id);
        label2.prop('textContent', '★');

    let radio3 = $('<input>');
        radio3.prop('id', 'radio3Gra' + id);
        radio3.prop('type', 'radio');
        radio3.prop('name', 'estrellas');
        radio3.prop('value', 3);

    let label3 = $('<label></label>');
        label3.prop('for', 'radio3Gra' + id)
        label3.prop('textContent', '★');

    let radio4 = $('<input>');
        radio4.prop('id', 'radio2Gra' + id);
        radio4.prop('type', 'radio');
        radio4.prop('name', 'estrellas');
        radio4.prop('value', 2);

    let label4 = $('<label></label>');
        label4.prop('for', 'radio2Gra' + id);
        label4.prop('textContent', '★');

    let radio5 = $('<input>');
        radio5.prop('id', 'radio1Gra' + id);
        radio5.prop('type', 'radio');
        radio5.prop('name', 'estrellas');
        radio5.prop('value', 1);

    let label5 = $('<label></label>');
        label5.prop('for', 'radio1Gra' + id);
        label5.prop('textContent', '★');

    let radio6 = $('<input>');
        radio6.prop('id', 'radio5Opt' + id);
        radio6.prop('type', 'radio');
        radio6.prop('name', 'estrellas2');
        radio6.prop('value', 5);

    let label6 = $('<label></label>');
        label6.prop('for', 'radio5Opt' + id);
        label6.prop('textContent', '★');

    let radio7 = $('<input>');
        radio7.prop('id', 'radio4Opt' + id);
        radio7.prop('type', 'radio');
        radio7.prop('name', 'estrellas2');
        radio7.prop('value', 4);

    let label7 = $('<label></label>');
        label7.prop('for', 'radio4Opt' + id);
        label7.prop('textContent', '★');

    let radio8 = $('<input>');
        radio8.prop('id', 'radio3Opt' + id);
        radio8.prop('type', 'radio');
        radio8.prop('name', 'estrellas2');
        radio8.prop('value', 3);

    let label8 = $('<label></label>');
        label8.prop('for', 'radio3Opt' + id)
        label8.prop('textContent', '★');

    let radio9 = $('<input>');
        radio9.prop('id', 'radio2Opt' + id);
        radio9.prop('type', 'radio');
        radio9.prop('name', 'estrellas2');
        radio9.prop('value', 2);

    let label9 = $('<label></label>');
        label9.prop('for', 'radio2Opt' + id);
        label9.prop('textContent', '★');

    let radio10 = $('<input>');
        radio10.prop('id', 'radio1Opt' + id);
        radio10.prop('type', 'radio');
        radio10.prop('name', 'estrellas2');
        radio10.prop('value', 1);

    let label10 = $('<label></label>');
        label10.prop('for', 'radio1Opt' + id);
        label10.prop('textContent', '★');
//
    let radio11 = $('<input>');
        radio11.prop('id', 'radio5Jug' + id);
        radio11.prop('type', 'radio');
        radio11.prop('name', 'estrellas3');
        radio11.prop('value', 5);

    let label11 = $('<label></label>');
        label11.prop('for', 'radio5Jug' + id);
        label11.prop('textContent', '★');

    let radio12 = $('<input>');
        radio12.prop('id', 'radio4Jug' + id);
        radio12.prop('type', 'radio');
        radio12.prop('name', 'estrellas3');
        radio12.prop('value', 4);

    let label12 = $('<label></label>');
        label12.prop('for', 'radio4Jug' + id);
        label12.prop('textContent', '★');

    let radio13 = $('<input>');
        radio13.prop('id', 'radio3Jug' + id);
        radio13.prop('type', 'radio');
        radio13.prop('name', 'estrellas3');
        radio13.prop('value', 3);

    let label13 = $('<label></label>');
        label13.prop('for', 'radio3Jug' + id);
        label13.prop('textContent', '★');

    let radio14 = $('<input>');
        radio14.prop('id', 'radio2Jug' + id);
        radio14.prop('type', 'radio');
        radio14.prop('name', 'estrellas3');
        radio14.prop('value', 2);

    let label14 = $('<label></label>');
        label14.prop('for', 'radio2Jug' + id)
        label14.prop('textContent', '★');

    let radio15 = $('<input>');
        radio15.prop('id', 'radio1Jug' + id);
        radio15.prop('type', 'radio');
        radio15.prop('name', 'estrellas3');
        radio15.prop('value', 1);

    let label15 = $('<label></label>');
        label15.prop('for', 'radio1Jug' + id);
        label15.prop('textContent', '★');

    let divimagen = $("<img>");
        $(divimagen).prop("src", '../img/sonicbailarin.gif');
        $(divimagen).prop("id", "img-detalles");
        $(divimagen).css("height", "11em");

    let divportada = $("<img>");
        $(divportada).prop("src", '../img/' + img);
        $(divportada).prop("id", "img-portada-detalles");
        $(divportada).css("height", "35em");

    let contenedorValoraciones = $("<div></div>");
        $(contenedorValoraciones).prop("id", "contenedor-valoraciones");

    $(clasificacion).append(radio);
    $(clasificacion).append(label1);
    $(clasificacion).append(radio2);
    $(clasificacion).append(label2);
    $(clasificacion).append(radio3);
    $(clasificacion).append(label3);
    $(clasificacion).append(radio4);
    $(clasificacion).append(label4);
    $(clasificacion).append(radio5);
    $(clasificacion).append(label5);
    
    //
    $(clasificacion2).append(radio6);
    $(clasificacion2).append(label6);
    $(clasificacion2).append(radio7);
    $(clasificacion2).append(label7);
    $(clasificacion2).append(radio8);
    $(clasificacion2).append(label8);
    $(clasificacion2).append(radio9);
    $(clasificacion2).append(label9);
    $(clasificacion2).append(radio10);
    $(clasificacion2).append(label10);
    //
    $(clasificacion3).append(radio11);
    $(clasificacion3).append(label11);
    $(clasificacion3).append(radio12);
    $(clasificacion3).append(label12);
    $(clasificacion3).append(radio13);
    $(clasificacion3).append(label13);
    $(clasificacion3).append(radio14);
    $(clasificacion3).append(label14);
    $(clasificacion3).append(radio15);
    $(clasificacion3).append(label15);

    $(valoraciones).append(clasificacion);
    $(valoraciones2).append(clasificacion2);
    $(valoraciones3).append(clasificacion3);
    
    $(divisor).append(card);
    $(card).append(imagen);
    $(card).append(cardbody);
    $(cardbody).append(span);
    $(cardbody).append(span2);
    $(cardbody).append(span3);
    $(cardbody).append(span4);
    $(cardbody).append(divfavoritos);
    $(cardbody).append(title);
    $(cardbody).append(divdescripcion);
    $(contenedorValoraciones).append('<div class="campo-graficos" id="total-graficos'+id+'"></div>');
    $(contenedorValoraciones).append(valoraciones);
    $(contenedorValoraciones).append('<div class="campo-optimizacion" id="total-optimizacion'+id+'"></div>');
    $(contenedorValoraciones).append(valoraciones2);
    $(contenedorValoraciones).append('<div class="campo-jugabilidad" id="total-jugabilidad'+id+'"></div>')
    $(contenedorValoraciones).append(valoraciones3);
    $(cardbody).append(contenedorValoraciones);
    $(cardbody).append(detalles);

    $(".video-juegos").append(divisor);
    abrirDetalles(id, nombre, precio, genero, n_jugadores, img, certificaciones, descripcion, f_lanzamiento);
    añadirFavoritos(id);
    calcularTotalValoraciones(id)
}

function añadirFavoritos(id) {
$('#heart'+id).on('click', function() {
    let tipoDeUsuario = datosUsuarioStorage.getItem('tipoUsu');
    if (tipoDeUsuario !== "2") {
        let marcado = $('.heartclass'+id).attr('marcado');
        if (marcado === 'false') {
            $('.heartclass'+id).attr('class', 'fa-solid fa-heart fa-2x heartclass' + id);
            $('.heartclass'+id).attr('id', 'heart' + id);
            $('.heartclass'+id).attr('marcado', "true");
            $('.heartclass'+id).attr('style', 'color: #ff0000;');
            insercionFavoritos(id);
        } else if (marcado === 'true') {
            $('.heartclass'+id).attr('class', 'fa-regular fa-heart fa-2x heartclass' + id);
            $('.heartclass'+id).attr('marcado', "false");
            $('.heartclass'+id).attr('id', 'heart' + id);
            $('.heartclass'+id).attr('style', 'color: white;');
            borrarFavoritos(id);
        }

    } else {
        Qual.icondb('¡Hey!','¡Tienes que iniciar sesion para poder añadir a favoritos!', '../img/bowser.gif');
        closePopUpDetalles();
}   
});
    
}

function abrirDetalles(id, nombre, precio, genero, n_jugadores, img, certificaciones, descripcion, f_lanzamiento) {
    $('#detalles'+id).on('click', function() {
        let tipoDeUsuario = datosUsuarioStorage.getItem('tipoUsu');
        
            cookie.setItem('id', id);

            cookie.setItem('nombre', nombre);
        
            cookie.setItem('precio', precio);
        
            cookie.setItem('genero', genero);

            cookie.setItem('jugadores', n_jugadores);

            cookie.setItem('imagen', img);
        
            cookie.setItem('certificados', certificaciones);

            cookie.setItem('descripcion', descripcion);

            cookie.setItem('lanzamiento', f_lanzamiento);

            if (tipoDeUsuario === '2') {
                cookie.setItem('tipo', 2);
            } else if (tipoDeUsuario === '1') {
                cookie.setItem('tipo', 1);
            } else if (tipoDeUsuario === '0') {
                cookie.setItem('tipo', 0);
            }
        
       
        window.location.href = "../interfaces/detallesjuegos.html";
    });
}

function insercionFavoritos(id_juego) {
    $.ajax({
        url: "../../Modelo/insercionFavoritos.php",
        type: "POST",
        data: { id_juego },
        success: function () {
            new Noty({
                type: 'success',
                layout: 'bottomRight',
                text: 'Juego añadido a favoritos'
            }).show();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
}

// Funciona para borrar juego de favoritos.
function borrarFavoritos(id_juego) {
    $.ajax({
        url: "../../Modelo/borradoFavoritos.php",
        type: "POST",
        data: { id_juego },
        success: function (añadido) {        
            new Noty({
                type: 'error',
                layout: 'bottomRight',
                text: 'Juego eliminado de favoritos'
            }).show();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
}

// Funcion que introduce los juegos favoritos en la lista de favoritos.
function comprobarFavoritosFiltrados(juego) {
    const {id, nombre, descripcion, genero, precio, n_jugadores, img, certificaciones, lanzamiento} = juego;

    let divisor = $("<div></div>");
    divisor.addClass("col" + " cards " + "col-sm-3 col-dm-3 col-3");

    let card = $("<div></div>");
        card.addClass("card");
        card.prop("style", "width: 28rem;");

    let divfavoritos = $("<div></div>");
        $(divfavoritos).addClass('div-favoritos');
        $(divfavoritos).html('<i class="fa-solid fa-heart fa-2x heartclass" marcado="true" style="color: #ff0000;" id="heart' + id +'"></i>');
        $(divfavoritos).prop('id', 'fav'+id);

    let span = $("<span></span>");
    let span2 = $("<span></span>");
    let span3 = $("<span></span>");
    let span4 = $("<span></span>");

    let title = $('<h5></h5>');
        $(title).prop('class', "card-title");
        $(title).html(nombre);

    let cardbody = $("<div></div>");
        $(cardbody).addClass("card-body");

    let divdescripcion = $('<p></p>');
        $(divdescripcion).prop('class', "card-text");
        $(divdescripcion).html(descripcion);

    let divjugadores = $("<div></div>");
        $(divjugadores).addClass("texto-jugadores");
        $(divjugadores).html(n_jugadores);

    let divprecio = $("<div></div>");
        $(divprecio).addClass("texto-precio");
        $(divprecio).html(precio + '€');

    let divgenero = $("<div></div>");
        $(divgenero).addClass("texto-genero");
        $(divgenero).html(genero);

    let divcert = $("<div></div>");
        $(divcert).addClass("texto-certificaciones");
        $(divcert).html(certificaciones);

    let imagen = $("<img>");
        $(imagen).addClass("card-img-top card-img");
        $(imagen).prop("src", '../img/' + img);
        $(imagen).prop("id", "img-juegos");
        $(imagen).prop("alt", "Card image cap");
        
    let verdetalles = $("<button>");
        $(verdetalles).prop("type", "button");
        $(verdetalles).prop('id',"detalles"+id);
        $(verdetalles).prop('class',"mt-5 mx-5 ver-detalles-fav");
        $(verdetalles).prop("textContent", 'Ver detalles');

    let divlanzamiento = $('<p></p>');
        $(divlanzamiento).addClass("texto-lanzamiento");
        $(divlanzamiento).html('<strong>Lanzamiento: </strong>' + lanzamiento);

        $(divisor).append(card);
        $(card).append(imagen);
        $(card).append(cardbody);
        $(cardbody).append(span);
        $(cardbody).append(span2);
        $(cardbody).append(span3);
        $(cardbody).append(span4);
        $(cardbody).append(divfavoritos);
        $(cardbody).append(title);
        $(cardbody).append(divdescripcion);
        $(cardbody).append(divlanzamiento);
        $(cardbody).append(verdetalles);

        $(".video-juegos-fav").append(divisor);
        añadirFavoritos(id);
        cerrarModal(divisor);
        abrirDetalles(id, nombre, precio, genero, n_jugadores, img, certificaciones, descripcion, lanzamiento);
}


// Al cerrar la lista de favoritos se vacia.
function cerrarModal() {
    $('.btn-close').on('click', function() {
        $('.video-juegos-fav').empty();
    })

    $('#cerrar-btn').on('click', function() {
        $('.video-juegos-fav').empty();
    })
}


// Función que filtra la búsqueda de juegos por el nombre introducido.
function buscarPorNombrePaginaPrincipal() {
    $('#juegoEscrito').on("keypress", function(event) {
        if (event.key === 'Enter' ) {   
        let nombreJuego = $('#juegoEscrito').val();
        if (nombreJuego === "") {
            Qual.infodb('Aviso', '¡Introduce el nombre de algún juego porfavor!');
        } else {
            $.ajax({
                url: "../../Modelo/buscarJuegos.php",
                type: "GET",
                dataType: "json",
                data: { nombreJuego },
                success: function (Listadojuegos) {
                    if (Listadojuegos.length > 0) {
                        $('#genero').empty();
                        $('.video-juegos').empty();
                        $('.anclado').show();
                        listadoJuegos(Listadojuegos);
                    } else {
                        $('.video-juegos').empty();
                        $('.anclado').hide();
                        $('.video-juegos').html('<div class="busqueda-sin-resultados"><h1>No se han encontrado resultados</h1></div>');
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                  console.log(
                    errorThrown
                  );
                },
              });
            }
            }
        }) 

    $('#buscarJuego').on('click', function() {
    let nombreJuego = $('#juegoEscrito').val();
    if (nombreJuego === "") {
        Qual.infodb('Aviso', '¡Introduce el nombre de algún juego porfavor!');
    } else {
        $.ajax({
            url: "../../Modelo/buscarJuegos.php",
            type: "GET",
            dataType: "json",
            data: { nombreJuego },
            success: function (listaDeJuegos) {
                if (listaDeJuegos.length > 0) {
                    $('#genero').empty();
                    $('.video-juegos').empty();
                    $('.anclado').show();
                    listadoJuegos(listaDeJuegos);
                } else {
                    $('.video-juegos').empty();
                    $('.anclado').hide();
                    $('.video-juegos').html('<div class="busqueda-sin-resultados"><h1>No se han encontrado resultados</h1></div>');
                }
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


/* Función que filtra la búsqueda de juegos por 
el nombre introducido en la lista de favoritos.*/
function buscarJuegosFiltradosEnListaFav() {
    $('#buscarJuegoFav').on('click', function() {
    let nombreJuego = $('#juegoFavorito').val();
    if (nombreJuego === "") {
        Qual.infodb('Aviso', '¡Introduce el nombre de algún juego porfavor.!');
    } else {
        $.ajax({
            url: "../../Modelo/seleccionFavoritosPorFiltro.php",
            type: "GET",
            dataType: "json",
            data: { nombreJuego },
            success: function (Listadojuegos) {
                if (Listadojuegos.length > 0) {
                $('.video-juegos-fav').empty();
                obtenerjuegosFiltradosEnListaFavoritos(Listadojuegos);
                } else {
                    $('.video-juegos-fav').empty();
                    $('#no-resultados-fav').html('<h1>No se han encontrado resultados</h1>');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
              console.log(
                errorThrown
              );
            },
          });
        }
    }) 

    $('#juegoFavorito').keypress(function(tecla) {
        if (tecla.key === 'Enter') {
            let nombreJuego = $('#juegoFavorito').val();
            if (nombreJuego === "") {
                Qual.infodb('Aviso', '¡Introduce el nombre de algún juego porfavor.!');
            } else {
                $.ajax({
                    url: "../../Modelo/seleccionFavoritosPorFiltro.php",
                    type: "GET",
                    dataType: "json",
                    data: { nombreJuego },
                    success: function (Listadojuegos) {
                        if (Listadojuegos.length > 0) {
                        $('.video-juegos-fav').empty();
                        obtenerjuegosFiltradosEnListaFavoritos(Listadojuegos);
                        } else {
                            $('.video-juegos-fav').empty();
                            $('#no-resultados-fav').html('<h1>No se han encontrado resultados</h1>');
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                      console.log(
                        errorThrown
                      );
                    },
                  });
                }
        }
    })     
}

/* Función que va iterando los juegos del array y 
los va devolviendo uno a uno. */
function obtenerjuegosFiltradosEnListaFavoritos(ListadojuegosFav) {
    for (const juego of ListadojuegosFav) {
        comprobarFavoritosFiltrados(juego);
    }
}

/* Función que calcula las valoraciones del videojuego 
y las muestra en la carta del juego. */
function calcularTotalValoraciones(id) {
    $('#card'+id).on('mouseenter', function() {
    $.ajax({
        url: "../../Modelo/calculoTotalValoracion.php",
        type: "GET",
        dataType: "json",
        data: {id},
        success: function (calculoFinal) {

            if (calculoFinal[0].graficos === null) {
                $('#total-graficos' + id).html('Gráficos (' + (0).toFixed(1) + '★)');
            } else {
                let numeroUsuarios = calculoFinal[1].cuentaGraficos;
                let graficos = calculoFinal[0].graficos;
                let totalDeGraficos = Math.round(graficos/numeroUsuarios);

                $('#total-graficos' + id).html('Gráficos (' + parseFloat(graficos/numeroUsuarios).toFixed(1) + '★)');

                for(let i=0; i <= totalDeGraficos; i++) {
                    $('.clasificacion1 label[for="radio' + i + 'Gra' + id + '"').css('color', 'orange');
                }
            }

            if (calculoFinal[0].optimizacion === null) {
                $('#total-optimizacion' + id).html('Optimización (' + (0).toFixed(1) + '★)');
            } else {
                let numeroUsuarios = calculoFinal[1].cuentaOptimizacion;
                let optimizacion = calculoFinal[0].optimizacion;
                let totalDeOptimizacion = Math.round(optimizacion/numeroUsuarios);

                $('#total-optimizacion' + id).html('Optimización (' + parseFloat(optimizacion/numeroUsuarios).toFixed(1) + '★)');

                for(let a=0; a <= totalDeOptimizacion; a++) {
                    $('.clasificacion2 label[for="radio' + a + 'Opt' + id + '"').css('color', 'orange');
                }
            }

            if (calculoFinal[0].jugabilidad === null) {
                $('#total-jugabilidad' + id).html('Jugabilidad (' + (0).toFixed(1) + '★)');
            } else {
                let numeroUsuarios = calculoFinal[1].cuentaJugabilidad;
                let jugabilidad = calculoFinal[0].jugabilidad;
                let totalDeJugabilidad = Math.round(jugabilidad/numeroUsuarios);

                $('#total-jugabilidad' + id).html('Jugabilidad (' + parseFloat(jugabilidad/numeroUsuarios).toFixed(1) + '★)');

                for(let b=0; b <= totalDeJugabilidad; b++) {
                    $('.clasificacion3 label[for="radio' + b + 'Jug' + id + '"').css('color', 'orange');
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
    })
}

function refrescarFiltros() {
    $('#refrescarFiltros').on('click', function() {
        $('.video-juegos').empty();
        $('#genero').empty();
        $('#precioMin').val("");
        $('#precioMax').val("");
        $('#juegoEscrito').val("");
        $('.pieDePagina').css('position', '');
        $('.anclado').show();
        cargarJuegos();
    })
}

refrescarFiltros();
buscarPorNombrePaginaPrincipal();
buscarJuegosFiltradosEnListaFav();
