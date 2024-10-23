cookie = window.localStorage;
$(document).ready(comprobarUsuario);
$(document).ready(cargarJuegosCarousel);
$(document).ready(mostrarComentariosEnPaginaPrincipal);
let cualEstaMarcado;

function comprobarUsuario() {
    $.ajax({
        url: "../../Modelo/comprobarUsuarioActual.php",
        type: "POST",
        success: function (resultado) {
            let datosUsu = resultado.split('º');
            comprobarValoracionServicio(datosUsu[1], datosUsu[2]);
            valorarServicio(datosUsu[1], datosUsu[2]);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
}

async function cargarJuegosCarousel() {
    const response = await fetch("../../Modelo/obtenerJuegosCarousel.php");
    const listadoVideojuegos = await response.json();
    
    for (i=0; i<listadoVideojuegos.length; i++) {
        let imagen = $('<img>');
            imagen.prop('src', '../img/'+ listadoVideojuegos[i].img);
            imagen.prop('id', 'imagen'+ listadoVideojuegos[i].id);
            
        $('.columna' + i).html(imagen);

        let id = listadoVideojuegos[i].id;
        let nombre = listadoVideojuegos[i].nombre;
        let precio = listadoVideojuegos[i].precio;
        let genero = listadoVideojuegos[i].genero;
        let jugadores = listadoVideojuegos[i].n_jugadores;
        let img = listadoVideojuegos[i].img;
        let certificaciones = listadoVideojuegos[i].certificaciones;
        let descripcion = listadoVideojuegos[i].descripcion;
        let f_lanzamiento = listadoVideojuegos[i].f_lanzamiento;

        accederDetalles('#imagen', id, nombre, precio, genero, jugadores, img, certificaciones, descripcion, f_lanzamiento);
        
    }
}

async function mostrarComentariosEnPaginaPrincipal() {
const response = await fetch("../../Modelo/obtenerComentariosPaginaPrincipal.php");
const listadoComentarios = await response.json();

for (a=0; a<listadoComentarios.length; a++) {
    if (listadoComentarios[a].comentario !== "") {
        let id = listadoComentarios[a].id_juegos;
        let nombreJuego = listadoComentarios[a].nombre_juegos;
        let precio = listadoComentarios[a].precio;
        let genero = listadoComentarios[a].genero;
        let jugadores = listadoComentarios[a].n_jugadores;
        let img = listadoComentarios[a].img;
        let certificaciones = listadoComentarios[a].certificaciones;
        let descripcion = listadoComentarios[a].descripcion;
        let f_lanzamiento = listadoComentarios[a].f_lanzamiento;
        let comentario = listadoComentarios[a].comentario;
        let username = listadoComentarios[a].username;

        let contenedor = $('<div></div>');
            contenedor.prop('class', 'col col-sm-2 col-dm-2 col-2');

        let card = $('<div></div>')
            card.prop('class', 'card card-comentario' + id);
            card.attr('style', 'width: 18rem;');
            card.css({'background-color': 'transparent', 'border': 'none'});

        let imagen = $('<img>');
            imagen.prop('class', 'card-img-top imagenJuego' + id);
            imagen.css({'max-height': '20vh', 'object-fit': 'cover', 'object-position': 'top', 'trasnform': 'rotateY(90deg)'});
            imagen.prop('src', '../img/' + img);

        let divbody = $('<div></div>');
            divbody.prop('class', 'card-body');
            divbody.css('background-color', 'white');

        let tituloJuego = $('<h4></h4>');
            tituloJuego.prop('class', 'card-title nombre-juego' + id);
            tituloJuego.html(nombreJuego);

        let tituloNombreUsuario = $('<h5></h5>');
            tituloNombreUsuario.prop('class', 'card-title nombre-usuario' + id);
            tituloNombreUsuario.html(username);

        let comentarioUsuario = $('<p></p>');
            comentarioUsuario.prop('class', 'card-text comentario' + id);
            comentarioUsuario.html(comentario);

        $(divbody).append(tituloJuego);
        $(divbody).append('<hr class="separador-card">');
        $(divbody).append(tituloNombreUsuario);
        $(divbody).append(comentarioUsuario);
        $(card).append(imagen);
        $(card).append(divbody);
        $(contenedor).append(card);
        
        $('.fila-comentarios-juegos').append(contenedor);

        accederDetalles('.card-comentario', id, nombreJuego, precio, genero, jugadores, img, certificaciones, descripcion, f_lanzamiento);
    }
    }
}


function accederDetalles(identificadorElemento, id, nombre, precio, genero, jugadores, img, certificaciones, descripcion, f_lanzamiento) {
$(identificadorElemento+id).on('click', function() {
    let tipoUsuario = datosUsuarioStorage.getItem('tipoUsu');
    
    cookie.setItem('id', id);

    cookie.setItem('nombre', nombre);

    cookie.setItem('precio', precio);

    cookie.setItem('genero', genero);

    cookie.setItem('jugadores', jugadores);

    cookie.setItem('imagen', img);

    cookie.setItem('certificados', certificaciones);

    cookie.setItem('descripcion', descripcion);

    cookie.setItem('lanzamiento', f_lanzamiento);

    if (tipoUsuario === '2') {
        cookie.setItem('tipo', 2);
    } else if (tipoUsuario === '1') {
        cookie.setItem('tipo', 1);
    } else if (tipoUsuario === '0') {
        cookie.setItem('tipo', 0);
    }


    window.location.href = "../interfaces/detallesjuegos.html";
});
}

function valorarServicio(tipo, id) {
    $('.fa-thumbs-up').on('click', function() {
        $('.fa-thumbs-up').css('color', 'lightgreen');
        $('.fa-thumbs-up').css('border-color', 'lightgreen');
        $('.fa-thumbs-down').css('color', 'white');
        $('.fa-thumbs-down').css('border-color', 'white');
        cualEstaMarcado = true;
    });

    $('.fa-thumbs-down').on('click', function() {
        $('.fa-thumbs-down').css('color', '#E84855');
        $('.fa-thumbs-down').css('border-color', '#E84855');
        $('.fa-thumbs-up').css('color', 'white');
        $('.fa-thumbs-up').css('border-color', 'white');
        cualEstaMarcado = false;
    });

    $('.fa-thumbs-up').on('hover', function() {
        $('.fa-thumbs-up').css('color', 'lightgreen');
        $('.fa-thumbs-up').css('border-color', 'lightgreen');
    });

    $('.fa-thumbs-down').on('hover', function() {
        $('.fa-thumbs-down').css('color', '#E84855');
        $('.fa-thumbs-down').css('border-color', '#E84855');
    });

    $('#enviarOpinion').click(function() {

        if (tipo !== '2') {
            let mensajeValoracion = $('#textareaOpiniones').val();
        
            if (cualEstaMarcado === undefined) {
                Qual.warningdb('Aviso', '¡Tienes que votar si te gusta o no te gusta!');
            } else { 
                enviarValoracionDelServicio(mensajeValoracion, cualEstaMarcado, tipo, id);
            }
        } else {
            Qual.warningdb('Aviso', '¡Tienes que iniciar sesion primero!');
        }
    });
}

function enviarValoracionDelServicio(mensaje, cualEstaMarcado, tipo, id) {
$.ajax({
    url: "../../Modelo/insertarValoracionServicio.php",
    type: "POST",
    data: {mensaje, cualEstaMarcado},
    success: function (response) {
        if (response === 'insercion') {
            new Noty({
                type: 'success',
                layout: 'bottomRight',
                text: '¡Valoracion enviada!'
            }).show();
        } else {
            new Noty({
                type: 'success',
                layout: 'bottomRight',
                text: '¡Cambios guardados!'
            }).show();
        }

        comprobarValoracionServicio(tipo, id);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(
        errorThrown
        );
    },
    });
}

function comprobarValoracionServicio(tipo, id) {
if (tipo !== '2') {
    $.ajax({
        url: "../../Modelo/comprobarValoracionServicio.php",
        type: "GET",
        data: { id },
        success: function (valoracionFinal) {
            if (valoracionFinal !== 'vacio') {
                let valoracionExistente = JSON.parse(valoracionFinal);
                const {id, valoracion, mensaje} = valoracionExistente;
                
                if (valoracion === "1") {
                    $('.fa-thumbs-up').css('color', 'lightgreen');
                    $('.fa-thumbs-up').css('border-color', 'lightgreen');
                    cualEstaMarcado = true;
                } else if (valoracion === "0"){
                    $('.fa-thumbs-down').css('color', 'rgb(238, 84, 84)');
                    $('.fa-thumbs-down').css('border-color', 'rgb(238, 84, 84)');
                    cualEstaMarcado = false;
                }
                $('#textareaOpiniones').val(mensaje);
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