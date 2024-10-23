$(document).ready(recogerDatosForo);

function recogerDatosForo() {
        let flag = false;
        let idForo = datosForo.getItem('id');
        let nombre = datosForo.getItem('nombre');
        let tematica = datosForo.getItem('tematica');
        let tipo = datosForo.getItem('tipoUsu');
        comprobarUsuForo(idForo, nombre);
        
        $('#close-x').on('click', function() {
                location.href = "../interfaces/index.html";
        });

        $('.alertcontainer').on('click', function() {
                location.href = "../interfaces/index.html";
        });
        
        $('.nombreForo').html('Bienvenido al foro de ' + nombre);
        $('.tematica').html('Temática: ' + tematica);
        mostrarPost(idForo, tipo, flag);
        enviarPOST(idForo, tipo);
        calculoDeCaracteres();
}

function comprobarUsuForo(id_foro, nombre) {
        $.ajax({
                url: "../../Modelo/comprobarSeguimiento.php",
                type: "GET",
                data: { id_foro },
                success: function (response) {
                        if (response === "true") {
                        $('.seguirForoFila').html('<div class="num-integrantes"></div>&nbsp;&nbsp;&nbsp;&nbsp;'
                        + '<input type="button" name="DejarseguirForo" id="DejarseguirForo" value="Dejar de seguir">');
                                dejarDeseguirForo(id_foro, nombre);
                                integrantesForo(id_foro);
                                $('#botonPost').prop('disabled', false);
                                $('#botonPost').css('background-color', 'white');
                                $('#enviarMensaje').prop('disabled', false);
                                $('#enviarMensaje').css('filter', 'grayscale(0%)');
                                $('.escribirRespuestasPost > textarea').prop('disabled', false);
                                $('.escribirRespuestasPost > input').prop('disabled', false);

                        } else if (response === "false") {
                                $('#botonPost').prop('disabled', true);
                                $('#botonPost').css('background-color', 'rgb(139, 139, 139)');
                                $('#enviarMensaje').prop('disabled', true);
                                $('#enviarMensaje').css('filter', 'grayscale(100%)');
                                $('.escribirRespuestasPost > textarea').prop('disabled', true);
                                $('.escribirRespuestasPost > input').prop('disabled', true);
                                $('.escribirRespuestasPost > p').html('Para poder responder tienes que seguir el foro.');

                                $('.seguirForoFila').html('<div class="num-integrantes"></div>&nbsp;&nbsp;&nbsp;&nbsp;'
                                + '<input type="button" name="seguirForo" id="seguirForo" value="Seguir">');
                                seguirForo(id_foro, nombre);
                                integrantesForo(id_foro);
                                 
                        }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                  console.log(
                    errorThrown
                  );
                },
        });
}

function integrantesForo(id_foro) {
        $.ajax({
                url: "../../Modelo/obtenerIntegrantesForo.php",
                type: "GET",
                data: {id_foro},
                success: function (integrantes) {
                        $('.num-integrantes').html('Nº integrantes: ' + integrantes + ' <i class="fa-solid fa-user-group fa-lg"></i>');
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                  console.log(
                    errorThrown
                  );
                },
        });
}

function seguirForo(id_foro, nombre) {
        $('#seguirForo').on('click', function() {
        $.ajax({
                url: "../../Modelo/seguirForo.php",
                type: "POST",
                data: { id_foro },
                success: function () {
                        $('.seguirForoFila').html('<div class="num-integrantes"></div>&nbsp;&nbsp;&nbsp;&nbsp;'
                        + '<input type="button" name="DejarseguirForo" id="DejarseguirForo" value="Dejar de seguir">');
                                dejarDeseguirForo(id_foro, nombre);
                                integrantesForo(id_foro);

                                        $('#botonPost').prop('disabled', false);
                                        $('#enviarMensaje').prop('disabled', false);
                                        $('#enviarMensaje').css('filter', 'grayscale(0%)');
                                        $('#botonPost').css('background-color', 'white');
                                        $('.escribirRespuestasPost > textarea').prop('disabled', false);
                                        $('.escribirRespuestasPost > input').prop('disabled', false);
                                        $('.escribirRespuestasPost > p').html('');
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                  console.log(
                    errorThrown
                  );
                },
        });
})
}

function dejarDeseguirForo(id_foro, nombre) {
        $('#DejarseguirForo').on('click', function() {
                $.ajax({
                        url: "../../Modelo/dejarseguirForo.php",
                        type: "POST",
                        data: { id_foro },
                        success: function () {
                                $('.seguirForoFila').html('<div class="num-integrantes"></div>&nbsp;&nbsp;&nbsp;&nbsp;'
                                + '<input type="button" name="seguirForo" id="seguirForo" value="Seguir">');
                                seguirForo(id_foro, nombre);
                                integrantesForo(id_foro);

                                        $('#botonPost').prop('disabled', true);
                                        $('#botonPost').val('');
                                        $('#enviarMensaje').prop('disabled', true);
                                        $('#enviarMensaje').css('filter', 'grayscale(100%)');
                                        $('#botonPost').css('background-color', 'rgb(139, 139, 139)');
                                        $('.escribirRespuestasPost > textarea').prop('disabled', true);
                                        $('.escribirRespuestasPost > input').prop('disabled', true);
                                        $('.escribirRespuestasPost > p').html('Para poder responder tienes que seguir el foro.');
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                          console.log(
                            errorThrown
                          );
                        },
                });
        })
}

function enviarPOST(id, tipo) {
        $('#botonPost').on("keypress", function(event) {
        if (event.key === 'Enter' ) {   
        let mensaje = $('#botonPost').val();
        if (mensaje == "" || mensaje == " ") {
                Qual.warningdb('Aviso', '¡El comentario esta vacio, porfavor introduce algo!');
        } else {
        $.ajax({
                url: "../../Modelo/insercionPost.php",
                type: "POST",
                data: { id, mensaje },
                success: function (response) {
                        $('#botonPost').val('');
                        mostrarPost(id, tipo);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                  console.log(
                    errorThrown
                  );
                },
        })
        }
}

});

$('#enviarMensaje').on("click", function() {
        let mensaje = $('#botonPost').val();
        if (mensaje == "" || mensaje == " ") {
                Qual.warningdb('Aviso', '¡El comentario esta vacio, porfavor introduce algo!');
        } else {
        $.ajax({
                url: "../../Modelo/insercionPost.php",
                type: "POST",
                data: { id, mensaje },
                success: function (response) {
                        $('#botonPost').val('');
                        mostrarPost(id, tipo);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                  console.log(
                    errorThrown
                  );
                },
        });
        }
});

}

function borrarComentario(id_foro, tipo) {
        let id_comentario;             
        $('.comentarioForo').on('click', function() {
                $('#confirmarBorrado').modal('show');
                id_comentario = $(this).attr('id');
        });

        $('.borrarRegistro').on('click', function() {
                $.ajax({
                        url: "../../Modelo/borradoPost.php",
                        type: "POST",
                        data: { id_comentario },
                        success: function (response) {
                                mostrarPost(id_foro, tipo);
                                $('#confirmarBorrado').modal('hide');
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                          console.log(
                            errorThrown
                          );
                        },
                });
        });
}

function borrarRespuesta(id_post, id_usuario) {
        let tipo;
        let id_respuesta;
        $('.respuestaPost').on('click', function() {
                id_respuesta = $(this).attr('id');
                tipo = datosForo.getItem('tipoUsu');
                $('#confirmarBorrado').modal('show');
        });

        $('.borrarRegistro').on('click', function() {
                $.ajax({
                        url: "../../Modelo/borradoRespuesta.php",
                        type: "POST",
                        data: { id_respuesta, id_post },
                        success: function (response) {
                                $('#confirmarBorrado').modal('hide');
                                $('#verRespuestas'+id_post).empty();
                                obtenerRespuestasPost(id_post, tipo, id_usuario);
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log(
                        errorThrown
                        );
                        },
                });
        });
}

function calculoDeCaracteres() {
        $("#botonPost").on("input", actualizarContador);
  
        function actualizarContador() {
          const texto = $("#botonPost").val();
          const caracteresRestantes = 250 - texto.length;
  
          $(".contCarac").text(caracteresRestantes + " carácteres");

        }
}

function mostrarPost(id, tipo, flag) {
        $.ajax({
                url: "../../Modelo/obtenerPost.php",
                type: "GET",
                dataType: 'json',
                data: { id },
                success: function (posts) {
                        $('.mensajes').empty();
                        let id_usuario = datosForo.getItem('idUsu');
                        for (const fila of posts) {
                                let fechaCompleta = fila.fecha.split(' ');
                                let fecha = fechaCompleta[0].split('-');
                                let hora = fechaCompleta[1];
                                let fechaConFormato = fecha[2] + '-' + fecha[1] + '-' + fecha[0] + ' ' + hora;

                                if (tipo === "1") {
                                        $('.mensajes').append('<div class="mensaje"><span>' +  fila.usuario + 
                                        '</span><div class="borrarPOST"><div class="fila-mensaje">' + fila.mensaje + 
                                        '</div><i class="fa-solid fa-trash-can fa-xl comentarioForo" id="' + fila.id + '" style="color: #FFFFFF;"></i></div>' +
                                        '<div class="info-mensaje"><div class="fecha"> ' + fechaConFormato + '</div>' +
                                        '<div class="respuestas" id="respuesta'+fila.id+'">Responder</div>'+
                                        '<div class="ver-mensajes" id="verMensajes'+fila.id+'">Ver respuestas'+
                                        '<span id="flechaRespuesta'+fila.id+'">&nbsp;<i class="fa-solid fa-angle-down" style="color: #ffffff;"></i></span></div></div>' +
                                        '<div class="escribirRespuestasPost" id="escribirRespuesta'+fila.id+'"><span class="cerrar-comentario">'+
                                        '<i class="fa-solid fa-xmark" id="cerrarRespuesta'+fila.id+'"></i></span>'+
                                        '<textarea id="mensaje-respuesta'+fila.id+'" placeholder="Escribe tu respuesta..." maxlength="250"></textarea>'+
                                        '<input type="button" name="enviarRespuestaPost" id="enviarRespuestaPost'+fila.id+'" value="Enviar">'+
                                        '<span id="contadorPalabras'+fila.id+'">250 carácteres</span><hr><p id="errorAlEnviarRespuesta'+fila.id+'"></p></div>'+
                                        '<div class="contenedorDeRespuestas" id="verRespuestas'+fila.id+'"></div></div>');
                                        responderPost(fila.id, id, fila.id_usuario);
                                        verRespuestas(fila.id, flag, tipo, id_usuario);
                                } else if (tipo === "0") {
                                        if (id_usuario === fila.id_usuario) {
                                                $('.mensajes').append('<div class="mensaje"><span>' +  fila.usuario + 
                                                '</span><div class="borrarPOST"><div class="fila-mensaje">' + fila.mensaje + 
                                                '</div><i class="fa-solid fa-trash-can fa-xl comentarioForo" id="' + fila.id + '" style="color: #FFFFFF;"></i></div>' +
                                                '<div class="info-mensaje"><div class="fecha"> ' + fechaConFormato + '</div>' +
                                                '<div class="respuestas" id="respuesta'+fila.id+'">Responder</div>'+
                                                '<div class="ver-mensajes" id="verMensajes'+fila.id+'">Ver respuestas'+
                                                '<span id="flechaRespuesta'+fila.id+'">&nbsp;<i class="fa-solid fa-angle-down" style="color: #ffffff;"></i></span></div></div>' +
                                                '<div class="escribirRespuestasPost" id="escribirRespuesta'+fila.id+'"><span class="cerrar-comentario">'+
                                                '<i class="fa-solid fa-xmark" id="cerrarRespuesta'+fila.id+'"></i></span>'+
                                                '<textarea id="mensaje-respuesta'+fila.id+'" placeholder="Escribe tu respuesta..." maxlength="250"></textarea>'+
                                                '<input type="button" name="enviarRespuestaPost" id="enviarRespuestaPost'+fila.id+'" value="Enviar">'+
                                                '<span id="contadorPalabras'+fila.id+'">250 carácteres</span><p id="errorAlEnviarRespuesta'+fila.id+'"></p></div>'+
                                                '<div class="contenedorDeRespuestas" id="verRespuestas'+fila.id+'"></div></div>');
                                        } else {
                                                $('.mensajes').append('<div class="mensaje"><span>' +  fila.usuario + 
                                                '</span><div class="borrarPOST"><div class="fila-mensaje">' + fila.mensaje + 
                                                '</div></div>' +
                                                '<div class="info-mensaje"><div class="fecha"> ' + fechaConFormato + '</div>' +
                                                '<div class="respuestas" id="respuesta'+fila.id+'">Responder</div>'+
                                                '<div class="ver-mensajes" id="verMensajes'+fila.id+'">Ver respuestas'+
                                                '<span id="flechaRespuesta'+fila.id+'">&nbsp;<i class="fa-solid fa-angle-down" style="color: #ffffff;"></i></span></div></div>' +
                                                '<div class="escribirRespuestasPost" id="escribirRespuesta'+fila.id+'"><span class="cerrar-comentario">'+
                                                '<i class="fa-solid fa-xmark" id="cerrarRespuesta'+fila.id+'"></i></span>'+
                                                '<textarea id="mensaje-respuesta'+fila.id+'" placeholder="Escribe tu respuesta..." maxlength="250"></textarea>'+
                                                '<input type="button" name="enviarRespuestaPost" id="enviarRespuestaPost'+fila.id+'" value="Enviar">'+
                                                '<span id="contadorPalabras'+fila.id+'">250 carácteres</span><p id="errorAlEnviarRespuesta'+fila.id+'"></p></div>'+
                                                '<div class="contenedorDeRespuestas" id="verRespuestas'+fila.id+'"></div></div>');
                                        }
                                        responderPost(fila.id, id, id_usuario);
                                        verRespuestas(fila.id, flag, tipo, id_usuario);
                                }
                        }
                        borrarComentario(id, tipo);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                  console.log(
                    errorThrown
                  );
                },
        });
}

function obtenerRespuestasPost(id_post, tipo, id_usuario) {
        $.ajax({
                url: "../../Modelo/obtenerRespuestasDelPost.php",
                type: "GET",
                dataType: 'json',
                data: { id_post },
                success: function (respuestasUsuarios) {
                        if (respuestasUsuarios.length > 0) {
                                $('#verRespuestas'+id_post).empty();
                                for (const respuesta of respuestasUsuarios) {
                                        let fechaCompleta = respuesta.f_publicacion.split(' ');
                                        let fecha = fechaCompleta[0].split('-');
                                        let hora = fechaCompleta[1];
                                        let fechaConFormato = fecha[2] + '-' + fecha[1] + '-' + fecha[0] + ' ' + hora;

                                        if (tipo === "1") {
                                                $('#verRespuestas'+id_post).append('<div class="contenedorRespuestasUsuarios"><span>' + respuesta.nombre_usuario 
                                                + '</span><br><div class="mensajeRespuesta">' + respuesta.contenido + '</div>'
                                                + '<div class="fechaRespuesta">' + fechaConFormato + '</div>'
                                                + '<i class="fa-solid fa-trash-can fa-lg respuestaPost" id="' + respuesta.id + '" style="color: #FFFFFF;"></div><hr>');
                                        } else {
                                                if (id_usuario === respuesta.id_usuario) {
                                                        $('#verRespuestas'+id_post).append('<div class="contenedorRespuestasUsuarios"><span>' + respuesta.nombre_usuario 
                                                        + '</span><br><div class="mensajeRespuesta">' + respuesta.contenido + '</div>'
                                                        + '<div class="fechaRespuesta">' + fechaConFormato + '</div>'
                                                        + '<i class="fa-solid fa-trash-can fa-lg respuestaPost" id="' + respuesta.id + '" style="color: #FFFFFF;"></div><hr>');
                                                } else {
                                                        $('#verRespuestas'+id_post).append('<div class="contenedorRespuestasUsuarios"><span>' + respuesta.nombre_usuario 
                                                        + '</span><br><div class="mensajeRespuesta">' + respuesta.contenido + '</div>'
                                                        + '<div class="fechaRespuesta">' + fechaConFormato + '</div>'
                                                        + '</div><hr>');
                                                }
                                        }
                                }
                                borrarRespuesta(id_post, id_usuario);
                        } else {
                                $('#verRespuestas'+id_post).html('Aun no hay respuestas en este post...');
                        }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                  console.log(
                    errorThrown
                  );
                },
        });
}


function verRespuestas(id_post, flag, tipo, id_usuario) {
        $('#verMensajes'+id_post).on('click', function() {
                if (flag === false) {
                        $('#flechaRespuesta'+id_post).html(' <i class="fa-solid fa-angle-up" style="color: #ffffff;"></i>');
                        flag = true;
                        $('#verRespuestas'+id_post).empty();
                        obtenerRespuestasPost(id_post, tipo, id_usuario);
                        $('#verRespuestas'+id_post).show();
                } else {
                        $('#flechaRespuesta'+id_post).html(' <i class="fa-solid fa-angle-down" style="color: #ffffff;"></i>');
                        flag = false;
                        $('#verRespuestas'+id_post).hide();
                }
        });
}

function contadorPalabras(id_post) {
        $("#mensaje-respuesta"+id_post).on("input", actualizarContadorDePalabrasEnRespuestas);

        function actualizarContadorDePalabrasEnRespuestas() {
                const texto = $("#mensaje-respuesta"+id_post).val();
                const caracteresRestantes = 250 - texto.length;
                if (caracteresRestantes >= 0)
                        $("#contadorPalabras"+id_post).text(caracteresRestantes + " carácteres");
              }
}

function responderPost(id_post, idForo, id_usuario) {
        $('#respuesta'+id_post).on('click', function() {
               $('#escribirRespuesta'+id_post).css('display', 'flex');
               let nombre = datosForo.getItem('nombre');
               comprobarUsuForo(idForo, nombre);
               contadorPalabras(id_post);
        })

        $('#cerrarRespuesta'+id_post).on('click', function() {
                $('#escribirRespuesta'+id_post).css('display', 'none');
        })

        $('#enviarRespuestaPost'+id_post).on('click', function() {
        let tipo = datosForo.getItem('tipoUsu');
        let respuesta = $('#mensaje-respuesta'+id_post).val();
                if (respuesta === "") {
                        $('#errorAlEnviarRespuesta'+id_post).html('El mensaje esta vacio.');
                } else {
                        $.ajax({
                                url: "../../Modelo/responderPOST.php",
                                type: "POST",
                                data: { id_post, respuesta },
                                success: function (resultado) {
                                        new Noty({
                                                theme: 'sunset',
                                                type: 'success',
                                                layout: 'bottomRight',
                                                text: '¡Respuesta enviada!'
                                            }).show();
                                            $('#verRespuestas'+id_post).empty();
                                            $('#escribirRespuesta'+id_post).css('display', 'none');
                                            $('#mensaje-respuesta'+id_post).val('');
                                                obtenerRespuestasPost(id_post, tipo, id_usuario);
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



