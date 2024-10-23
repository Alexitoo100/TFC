$(document).ready(obtenerDatos);

// Obtenemos los datos del juego y los mostramos al usuario.
function obtenerDatos() {
    if (cookie.id !== undefined) {
    let id = cookie.getItem('id');
    let nombre = cookie.getItem('nombre');
    let img = cookie.getItem('imagen');
    let n_jugadores = cookie.getItem('jugadores');
    let precio = cookie.getItem('precio');
    let genero = cookie.getItem('genero');
    let certificaciones = cookie.getItem('certificados');
    let tipo = cookie.getItem('tipo');
    let descripcion = cookie.getItem('descripcion');
    let Fechalanzamiento = cookie.getItem('lanzamiento');

    obtenerPlataformas(id);
    obtenerDesarrolladoras(id);

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

    let divplataformas = $("<div></div>");
        $(divplataformas).addClass("texto-plataformas");

    let reseña = $("<textarea></textarea>");
        $(reseña).addClass("texto-reseña");
        $(reseña).prop('placeholder', 'Cuentanos que tal te ha parecido el videojuego...');
        $(reseña).prop('maxlength', '500');
        $(reseña).css('width', '1000px');
        $(reseña).css('height', '350px');
        $(reseña).css('border-radius', '10px');

    let divdesarrolladora = $("<div></div>");
        $(divdesarrolladora).addClass("texto-desarrolladoras");

    let valoraciones = $("<form></form>");
        $(valoraciones).addClass("texto-valoraciones1");

    let valoraciones2 = $("<form></form>");
        $(valoraciones2).addClass("texto-valoraciones2");

    let valoraciones3 = $("<form></form>");
        $(valoraciones3).addClass("texto-valoraciones3");

    let clasificacion = $('<p></p>');
        clasificacion.addClass('clasificacion clasificacion1');
    let clasificacion2 = $('<p></p>');
        clasificacion2.addClass('clasificacion clasificacion2');
    let clasificacion3 = $('<p></p>');
        clasificacion3.addClass('clasificacion clasificacion3');

    let detalles = $("<button>");
        $(detalles).prop("type", "button");
        $(detalles).prop('id',"valoracion"+id);
        $(detalles).prop('class',"mt-5 mx-5 valorar");
        $(detalles).attr('data-bs-toggle', "modal");
        $(detalles).attr('data-bs-target', "#modalValoracion");
        $(detalles).prop("textContent", 'Valorar');

    let radio = $('<input>');
        radio.prop('id', 'radio5' + id);
        radio.prop('type', 'radio');
        radio.prop('name', 'estrellas');
        radio.prop('value', 5);

    let label1 = $('<label></label>');
        label1.prop('for', 'radio5' + id);
        label1.prop('textContent', '★');

    let radio2 = $('<input>');
        radio2.prop('id', 'radio4' + id);
        radio2.prop('type', 'radio');
        radio2.prop('name', 'estrellas');
        radio2.prop('value', 4);

    let label2 = $('<label></label>');
        label2.prop('for', 'radio4' + id);
        label2.prop('textContent', '★');

    let radio3 = $('<input>');
        radio3.prop('id', 'radio3' + id);
        radio3.prop('type', 'radio');
        radio3.prop('name', 'estrellas');
        radio3.prop('value', 3);

    let label3 = $('<label></label>');
        label3.prop('for', 'radio3' + id)
        label3.prop('textContent', '★');

    let radio4 = $('<input>');
        radio4.prop('id', 'radio2' + id);
        radio4.prop('type', 'radio');
        radio4.prop('name', 'estrellas');
        radio4.prop('value', 2);

    let label4 = $('<label></label>');
        label4.prop('for', 'radio2' + id);
        label4.prop('textContent', '★');

    let radio5 = $('<input>');
        radio5.prop('id', 'radio1' + id);
        radio5.prop('type', 'radio');
        radio5.prop('name', 'estrellas');
        radio5.prop('value', 1);

    let label5 = $('<label></label>');
        label5.prop('for', 'radio1' + id);
        label5.prop('textContent', '★');

    let radio6 = $('<input>');
        radio6.prop('id', 'radioOpt5' + id);
        radio6.prop('type', 'radio');
        radio6.prop('name', 'estrellas2');
        radio6.prop('value', 5);

    let label6 = $('<label></label>');
        label6.prop('for', 'radioOpt5' + id);
        label6.prop('textContent', '★');

    let radio7 = $('<input>');
        radio7.prop('id', 'radioOpt4' + id);
        radio7.prop('type', 'radio');
        radio7.prop('name', 'estrellas2');
        radio7.prop('value', 4);

    let label7 = $('<label></label>');
        label7.prop('for', 'radioOpt4' + id);
        label7.prop('textContent', '★');

    let radio8 = $('<input>');
        radio8.prop('id', 'radioOpt3' + id);
        radio8.prop('type', 'radio');
        radio8.prop('name', 'estrellas2');
        radio8.prop('value', 3);

    let label8 = $('<label></label>');
        label8.prop('for', 'radioOpt3' + id)
        label8.prop('textContent', '★');

    let radio9 = $('<input>');
        radio9.prop('id', 'radioOpt2' + id);
        radio9.prop('type', 'radio');
        radio9.prop('name', 'estrellas2');
        radio9.prop('value', 2);

    let label9 = $('<label></label>');
        label9.prop('for', 'radioOpt2' + id);
        label9.prop('textContent', '★');

    let radio10 = $('<input>');
        radio10.prop('id', 'radioOpt1' + id);
        radio10.prop('type', 'radio');
        radio10.prop('name', 'estrellas2');
        radio10.prop('value', 1);

    let label10 = $('<label></label>');
        label10.prop('for', 'radioOpt1' + id);
        label10.prop('textContent', '★');
//
    let radio11 = $('<input>');
        radio11.prop('id', 'radioJug5' + id);
        radio11.prop('type', 'radio');
        radio11.prop('name', 'estrellas3');
        radio11.prop('value', 5);

    let label11 = $('<label></label>');
        label11.prop('for', 'radioJug5' + id);
        label11.prop('textContent', '★');

    let radio12 = $('<input>');
        radio12.prop('id', 'radioJug4' + id);
        radio12.prop('type', 'radio');
        radio12.prop('name', 'estrellas3');
        radio12.prop('value', 4);

    let label12 = $('<label></label>');
        label12.prop('for', 'radioJug4' + id);
        label12.prop('textContent', '★');

    let radio13 = $('<input>');
        radio13.prop('id', 'radioJug3' + id);
        radio13.prop('type', 'radio');
        radio13.prop('name', 'estrellas3');
        radio13.prop('value', 3);

    let label13 = $('<label></label>');
        label13.prop('for', 'radioJug3' + id);
        label13.prop('textContent', '★');

    let radio14 = $('<input>');
        radio14.prop('id', 'radioJug2' + id);
        radio14.prop('type', 'radio');
        radio14.prop('name', 'estrellas3');
        radio14.prop('value', 2);

    let label14 = $('<label></label>');
        label14.prop('for', 'radioJug2' + id)
        label14.prop('textContent', '★');

    let radio15 = $('<input>');
        radio15.prop('id', 'radioJug1' + id);
        radio15.prop('type', 'radio');
        radio15.prop('name', 'estrellas3');
        radio15.prop('value', 1);

    let label15 = $('<label></label>');
        label15.prop('for', 'radioJug1' + id);
        label15.prop('textContent', '★');

    let divimagen = $("<img>");
        $(divimagen).prop("src", '../img/sonicbailarin.gif');
        $(divimagen).prop("id", "img-detalles");
        $(divimagen).css("height", "11em");

    let divportada = $("<img>");
        $(divportada).prop("src", '../img/' + img);
        $(divportada).prop("id", "img-portada-detalles");
        $(divportada).prop("class", "img-fluid");
        $(divportada).css("height", "35em");

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

    $('.detalles-titulo').html('<h2>' + nombre + '</h2>');
    $('.detalles-imagen').html(divimagen);
    $('.detalles-descripcion').html(descripcion);
    $('.jugadores').html(divjugadores);
    $('.precio').html(divprecio);
    $('.genero').html(divgenero);
    $('.plataformas').html(divplataformas);
    $('.certificados').html(divcert);
    $('.fecha-lanzamiento').html(new Date(Fechalanzamiento).toLocaleDateString('es-ES'));
    $('.desarrolladora').html(divdesarrolladora);
    $('.valoracion-graficos').html(valoraciones);
    $('.valoracion-optimizacion').html(valoraciones2);
    $('.valoracion-jugabilidad').html(valoraciones3);
    $('.valoracion-reseña').html(reseña);
    $('.imagen-detalles').html(divimagen);
    $('.detalles-imagen').html(divportada);
    $('.modal-title').html(nombre);
    comprobarValoracionExistente(id, tipo);
    puntuarEstrellas(id);
    cargarComentarios(id);
    cargarValoracionGeneral(id);
    cargarValoracionesEspecificas(id);
    } else {
        window.location.href = "../interfaces/index.html";
    }
}

function cargarValoracionGeneral(id) {
    let valoracionGeneral = $("<form></form>");
        $(valoracionGeneral).addClass("texto-valoracion-general");

    let clasificacionGeneral = $('<p></p>');
        $(clasificacionGeneral).addClass('clasificacion clasificacion-general');

    let radio = $('<input>');
        radio.prop('id', 'radio5-valoracion-general');
        radio.prop('type', 'radio');
        radio.prop('name', 'estrellas');
        radio.prop('value', 5);

    let label1 = $('<label></label>');
        label1.prop('for', 'radio5-valoracion-general');
        label1.prop('textContent', '★');

    let radio2 = $('<input>');
        radio2.prop('id', 'radio4-valoracion-general');
        radio2.prop('type', 'radio');
        radio2.prop('name', 'estrellas');
        radio2.prop('value', 4);

    let label2 = $('<label></label>');
        label2.prop('for', 'radio4-valoracion-general');
        label2.prop('textContent', '★');

    let radio3 = $('<input>');
        radio3.prop('id', 'radio3-valoracion-general');
        radio3.prop('type', 'radio');
        radio3.prop('name', 'estrellas');
        radio3.prop('value', 3);

    let label3 = $('<label></label>');
        label3.prop('for', 'radio3-valoracion-general')
        label3.prop('textContent', '★');

    let radio4 = $('<input>');
        radio4.prop('id', 'radio2-valoracion-general');
        radio4.prop('type', 'radio');
        radio4.prop('name', 'estrellas');
        radio4.prop('value', 2);

    let label4 = $('<label></label>');
        label4.prop('for', 'radio2-valoracion-general');
        label4.prop('textContent', '★');

    let radio5 = $('<input>');
        radio5.prop('id', 'radio1-valoracion-general');
        radio5.prop('type', 'radio');
        radio5.prop('name', 'estrellas');
        radio5.prop('value', 1);

    let label5 = $('<label></label>');
        label5.prop('for', 'radio1-valoracion-general');
        label5.prop('textContent', '★');
    $(clasificacionGeneral).append(radio);
    $(clasificacionGeneral).append(label1);
    $(clasificacionGeneral).append(radio2);
    $(clasificacionGeneral).append(label2);
    $(clasificacionGeneral).append(radio3);
    $(clasificacionGeneral).append(label3);
    $(clasificacionGeneral).append(radio4);
    $(clasificacionGeneral).append(label4);
    $(clasificacionGeneral).append(radio5);
    $(clasificacionGeneral).append(label5);
    $(valoracionGeneral).html(clasificacionGeneral);

    $('#valoracion-general').html(valoracionGeneral);

    $.ajax({
        url: "../../Modelo/calculoTotalValoracion.php",
        type: "GET",
        dataType: "json",
        data: {id},
        success: function (calculoFinal) {
                
                let numeroUsuariosGraficos = calculoFinal[1].cuentaGraficos;
                let graficos = calculoFinal[0].graficos;

                let numeroUsuariosOptimizacion = calculoFinal[1].cuentaOptimizacion;
                let optimizacion = calculoFinal[0].optimizacion;

                let numeroUsuariosJugabilidad = calculoFinal[1].cuentaJugabilidad;
                let jugabilidad = calculoFinal[0].jugabilidad;


                let sumaTotalNumeroValoraciones = (parseInt(numeroUsuariosGraficos) + parseInt(numeroUsuariosOptimizacion) + parseInt(numeroUsuariosJugabilidad));
                let sumaTotalValoraciones = (parseFloat(graficos) + parseFloat(optimizacion) + parseFloat(jugabilidad));
                let mediaTotal = sumaTotalValoraciones/sumaTotalNumeroValoraciones;

                if (sumaTotalNumeroValoraciones === 0) {
                    $('#mediaValoracionGeneral').html((0).toFixed(1));
                } else {
                    $('#mediaValoracionGeneral').html((mediaTotal).toFixed(1));
                }

                let puntuacionEstrellasRedondeado = Math.round(mediaTotal);
                
                for (i=1; i <= puntuacionEstrellasRedondeado; i++) {
                    $('.clasificacion-general label[for=radio' + i + '-valoracion-general').css('color', 'orange');
                }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
}

function cargarValoracionesEspecificas(id) {
    let valoracionesGraficos = $("<form></form>");
        $(valoracionesGraficos).addClass("texto-valoraciones1");

    let valoracionesOptimizacion = $("<form></form>");
        $(valoracionesOptimizacion).addClass("texto-valoraciones2");

    let valoracionesJugabilidad = $("<form></form>");
        $(valoracionesJugabilidad).addClass("texto-valoraciones3");

    let clasificacion = $('<p></p>');
        clasificacion.addClass('clasificacion clasificacionGraficos clasificacionEsp');
    let clasificacion2 = $('<p></p>');
        clasificacion2.addClass('clasificacion clasificacionOptimizacion clasificacionEsp');
    let clasificacion3 = $('<p></p>');
        clasificacion3.addClass('clasificacion clasificacionJugabilidad clasificacionEsp');

    let radio = $('<input>');
        radio.prop('id', 'radio5GraficosEspecificos' + id);
        radio.prop('type', 'radio');
        radio.prop('name', 'estrellas');
        radio.prop('value', 5);

    let label1 = $('<label></label>');
        label1.prop('for', 'radio5GraficosEspecificos' + id);
        label1.prop('textContent', '★');

    let radio2 = $('<input>');
        radio2.prop('id', 'radio4GraficosEspecificos' + id);
        radio2.prop('type', 'radio');
        radio2.prop('name', 'estrellas');
        radio2.prop('value', 4);

    let label2 = $('<label></label>');
        label2.prop('for', 'radio4GraficosEspecificos' + id);
        label2.prop('textContent', '★');

    let radio3 = $('<input>');
        radio3.prop('id', 'radio3GraficosEspecificos' + id);
        radio3.prop('type', 'radio');
        radio3.prop('name', 'estrellas');
        radio3.prop('value', 3);

    let label3 = $('<label></label>');
        label3.prop('for', 'radio3GraficosEspecificos' + id)
        label3.prop('textContent', '★');

    let radio4 = $('<input>');
        radio4.prop('id', 'radio2GraficosEspecificos' + id);
        radio4.prop('type', 'radio');
        radio4.prop('name', 'estrellas');
        radio4.prop('value', 2);

    let label4 = $('<label></label>');
        label4.prop('for', 'radio2GraficosEspecificos' + id);
        label4.prop('textContent', '★');

    let radio5 = $('<input>');
        radio5.prop('id', 'radio1GraficosEspecificos' + id);
        radio5.prop('type', 'radio');
        radio5.prop('name', 'estrellas');
        radio5.prop('value', 1);

    let label5 = $('<label></label>');
        label5.prop('for', 'radio1GraficosEspecificos' + id);
        label5.prop('textContent', '★');

    let radio6 = $('<input>');
        radio6.prop('id', 'radio5OptimizacionEspecificos' + id);
        radio6.prop('type', 'radio');
        radio6.prop('name', 'estrellas2');
        radio6.prop('value', 5);

    let label6 = $('<label></label>');
        label6.prop('for', 'radio5OptimizacionEspecificos' + id);
        label6.prop('textContent', '★');

    let radio7 = $('<input>');
        radio7.prop('id', 'radio4OptimizacionEspecificos' + id);
        radio7.prop('type', 'radio');
        radio7.prop('name', 'estrellas2');
        radio7.prop('value', 4);

    let label7 = $('<label></label>');
        label7.prop('for', 'radio4OptimizacionEspecificos' + id);
        label7.prop('textContent', '★');

    let radio8 = $('<input>');
        radio8.prop('id', 'radio3OptimizacionEspecificos' + id);
        radio8.prop('type', 'radio');
        radio8.prop('name', 'estrellas2');
        radio8.prop('value', 3);

    let label8 = $('<label></label>');
        label8.prop('for', 'radio3OptimizacionEspecificos' + id)
        label8.prop('textContent', '★');

    let radio9 = $('<input>');
        radio9.prop('id', 'radio2OptimizacionEspecificos' + id);
        radio9.prop('type', 'radio');
        radio9.prop('name', 'estrellas2');
        radio9.prop('value', 2);

    let label9 = $('<label></label>');
        label9.prop('for', 'radio2OptimizacionEspecificos' + id);
        label9.prop('textContent', '★');

    let radio10 = $('<input>');
        radio10.prop('id', 'radio1OptimizacionEspecificos' + id);
        radio10.prop('type', 'radio');
        radio10.prop('name', 'estrellas2');
        radio10.prop('value', 1);

    let label10 = $('<label></label>');
        label10.prop('for', 'radio1OptimizacionEspecificos' + id);
        label10.prop('textContent', '★');
//
    let radio11 = $('<input>');
        radio11.prop('id', 'radio5JugabilidadEspecificos' + id);
        radio11.prop('type', 'radio');
        radio11.prop('name', 'estrellas3');
        radio11.prop('value', 5);

    let label11 = $('<label></label>');
        label11.prop('for', 'radio5JugabilidadEspecificos' + id);
        label11.prop('textContent', '★');

    let radio12 = $('<input>');
        radio12.prop('id', 'radio4JugabilidadEspecificos' + id);
        radio12.prop('type', 'radio');
        radio12.prop('name', 'estrellas3');
        radio12.prop('value', 4);

    let label12 = $('<label></label>');
        label12.prop('for', 'radio4JugabilidadEspecificos' + id);
        label12.prop('textContent', '★');

    let radio13 = $('<input>');
        radio13.prop('id', 'radio3JugabilidadEspecificos' + id);
        radio13.prop('type', 'radio');
        radio13.prop('name', 'estrellas3');
        radio13.prop('value', 3);

    let label13 = $('<label></label>');
        label13.prop('for', 'radio3JugabilidadEspecificos' + id);
        label13.prop('textContent', '★');

    let radio14 = $('<input>');
        radio14.prop('id', 'radio2JugabilidadEspecificos' + id);
        radio14.prop('type', 'radio');
        radio14.prop('name', 'estrellas3');
        radio14.prop('value', 2);

    let label14 = $('<label></label>');
        label14.prop('for', 'radio2JugabilidadEspecificos' + id)
        label14.prop('textContent', '★');

    let radio15 = $('<input>');
        radio15.prop('id', 'radio1JugabilidadEspecificos' + id);
        radio15.prop('type', 'radio');
        radio15.prop('name', 'estrellas3');
        radio15.prop('value', 1);

    let label15 = $('<label></label>');
        label15.prop('for', 'radio1JugabilidadEspecificos' + id);
        label15.prop('textContent', '★');

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

    $(valoracionesGraficos).append(clasificacion);
    $(valoracionesOptimizacion).append(clasificacion2);
    $(valoracionesJugabilidad).append(clasificacion3);

    $('#valoracion-graficos-estrellas').html(valoracionesGraficos);
    $('#valoracion-optimizacion-estrellas').html(valoracionesOptimizacion);
    $('#valoracion-jugabilidad-estrellas').html(valoracionesJugabilidad);

    $.ajax({
        url: "../../Modelo/calculoTotalValoracion.php",
        type: "GET",
        dataType: "json",
        data: {id},
        success: function (calculoFinal) {
                
                let numeroUsuariosGraficos = calculoFinal[1].cuentaGraficos;
                let graficos = calculoFinal[0].graficos;

                let numeroUsuariosOptimizacion = calculoFinal[1].cuentaOptimizacion;
                let optimizacion = calculoFinal[0].optimizacion;

                let numeroUsuariosJugabilidad = calculoFinal[1].cuentaJugabilidad;
                let jugabilidad = calculoFinal[0].jugabilidad;

                if (graficos === 0 || graficos === null) {
                    $('#mediaValoracionEspecificaGraficos').html((0).toFixed(1));
                } else {
                    let mediaTotalGraficos = graficos/numeroUsuariosGraficos;
                    let puntuacionEstrellasRedondeadoGraficos = Math.round(mediaTotalGraficos);
                    $('#mediaValoracionEspecificaGraficos').html((mediaTotalGraficos).toFixed(1));

                    for (i=1; i <= puntuacionEstrellasRedondeadoGraficos; i++) {
                        $('.clasificacionGraficos label[for=radio' + i + 'GraficosEspecificos' + id).css('color', 'orange');
                    }
                }

                if (optimizacion === 0 || graficos === null) {
                    $('#mediaValoracionEspecificaOptimizacion').html((0).toFixed(1));
                } else {
                    let mediaTotalOptimizacion = optimizacion/numeroUsuariosOptimizacion;
                    let puntuacionEstrellasRedondeadoOptimizacion = Math.round(mediaTotalOptimizacion);
                    $('#mediaValoracionEspecificaOptimizacion').html((mediaTotalOptimizacion).toFixed(1));

                    for (b=1; b <= puntuacionEstrellasRedondeadoOptimizacion; b++) {
                        $('.clasificacionOptimizacion label[for=radio' + b + 'OptimizacionEspecificos' + id).css('color', 'orange');
                    }
                }

                if (jugabilidad === 0 || graficos === null) {
                    $('#mediaValoracionEspecificaJugabilidad').html((0).toFixed(1));
                } else {
                    let mediaTotalJugabilidad = jugabilidad/numeroUsuariosJugabilidad;
                    let puntuacionEstrellasRedondeadoJugabilidad = Math.round(mediaTotalJugabilidad);
                    $('#mediaValoracionEspecificaJugabilidad').html((mediaTotalJugabilidad).toFixed(1));

                    for (d=1; d <= puntuacionEstrellasRedondeadoJugabilidad; d++) {
                        $('.clasificacionJugabilidad label[for=radio' + d + 'JugabilidadEspecificos' + id).css('color', 'orange');
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

// Función que carga los comentarios de los usuarios respecto al juego.
function cargarComentarios(id) {  
    $.ajax({
        url: "../../Modelo/obtenerComentarios.php",
        type: "GET",
        dataType: "json",
        data: {id},
        success: function (listaComentarios) {
            let tipoUsu = datosUsuarioStorage.getItem('tipoUsu');
            let idUsu = datosUsuarioStorage.getItem('idUsu');
            $('.caja-comentarios').html('<p class="sin-comentarios">Vaya... ¡Parece que aun no hay comentarios sobre este juego!</p>');
            if (listaComentarios.length > 0) {
                for (const fila of listaComentarios) {
                    if (idUsu === fila.id_usuario)
                                $('#valorarJuego').html('Modificar valoracion');

                    if (fila.comentario !== "") {
                        $('.sin-comentarios').remove();
                        if (tipoUsu === '1') {
                            $('.caja-comentarios').append('<div class="comentario"><span>' +  fila.usuario + '</span><div class="fila-comentario"> ' + fila.comentario 
                            + '<i class="fa-solid fa-trash-can fa-lg comentarioValoracion" id="' + fila.id_comentario + '" style="color: #FFFFFF;"></i></div>'
                            + '</div>');   
                        } else if (idUsu === fila.id_usuario) {
                            $('.caja-comentarios').append('<div class="comentario"><span>' +  fila.usuario + '</span><div class="fila-comentario"> ' + fila.comentario 
                            + '<i class="fa-solid fa-trash-can fa-lg comentarioValoracion" id="' + fila.id_comentario + '" style="color: #FFFFFF;"></i></div>'
                            + '</div>');
                        } else {
                            $('.caja-comentarios').append('<div class="comentario valoracionesUsuarioComentarios" id="valoraciones' + fila.id_usuario + '"><span>' +  fila.usuario + 
                            '</span><div class="fila-comentario"> ' + fila.comentario + '</div></div>');
                        }

                    }
                }
            }  else {
                $('.caja-comentarios').empty();
                $('.caja-comentarios').html('Vaya... ¡Parece que aun no hay comentarios sobre este juego!');
            }
            borrarComentarioJuegos();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
}

// Función que al hacer click en la papelera de un comentario lo borra.
function borrarComentarioJuegos() {
let id_comentario;
$('.comentarioValoracion').on('click', function() {
        $('#confirmarBorrado').modal('show');
        id_comentario = this.id;
})

$('.borrarRegistro').on('click', function() {
    $.ajax({
            url: "../../Modelo/borradoComentariojuegos.php",
            type: "POST",
            data: { id_comentario },
            success: function (response) {
                $('.texto-reseña').val('');    
                $('.caja-comentarios').empty();
                $('#confirmarBorrado').modal('hide');
                $('#valorarJuego').html('Valorar juego');
                obtenerDatos();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
              console.log(
                errorThrown
              );
            },
        });
    });
}

function obtenerPlataformas(id) {
    $.ajax({
        url: "../../Modelo/obtenerPlataformasJuegos.php",
        type: "GET",
        dataType: "json",
        data: {id},
        success: function (ListadoPlataformas) {
            $('.texto-plataformas').empty();

            const last = ListadoPlataformas[ListadoPlataformas.length-1];

            for (const plataforma of ListadoPlataformas) {
                if (plataforma != last) {
                    $('.texto-plataformas').append(plataforma.nombre + ' / ');
                } else {
                    $('.texto-plataformas').append(plataforma.nombre);
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

function obtenerDesarrolladoras(id) {
    $.ajax({
        url: "../../Modelo/obtenerDesarrolladorasJuegos.php",
        type: "GET",
        dataType: "json",
        data: {id},
        success: function (ListadoDesarrolladoras) {
            $('.texto-desarrolladoras').empty();

            const last = ListadoDesarrolladoras[ListadoDesarrolladoras.length-1];

            for (const desarrolladora of ListadoDesarrolladoras) {
                if (desarrolladora != last) {
                    $('.texto-desarrolladoras').append(desarrolladora.nombre + ' / ');
                } else {
                    $('.texto-desarrolladoras').append(desarrolladora.nombre);
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