let id_juego;
let graficos = 0;
let optimizacion = 0;
let jugabilidad = 0;

function puntuarEstrellas(id) {
    id_juego = id;
    
    $('.clasificacion1 input').on('click', function() {
        graficos = this.value;
        for (let i = 5; i > graficos; i--) {
            $('.clasificacion1 label[for="radio'+i+id_juego+'"]').css('color', '');
        }
    });

    $('.clasificacion2 input').on('click', function() {
        optimizacion = this.value;
        for (let e = 5; e > optimizacion; e--) {
            $('.clasificacion2 label[for="radioOpt'+e+id_juego+'"]').css('color', '');
        }
    });

    $('.clasificacion3 input').on('click', function() {
        jugabilidad = this.value;
        for (let j = 5; j > jugabilidad; j--) {
            $('.clasificacion3 label[for="radioJug'+j+id_juego+'"]').css('color', '');
        }
    });
}

function comprobarPuntuacionEstrellas(id_juego) {
    graficos = 0;
    optimizacion = 0;
    jugabilidad = 0;

    for (let a = 1; a <= 5; a++) {
        const gra = document.querySelector('.clasificacion1 label[for="radio'+a+id_juego+'"]');
        if (gra.getAttribute('coloreado') === 'true') {
            graficos++;
        }
    }
    

    for (let b = 1; b <= 5; b++) {
        const opt = document.querySelector('.clasificacion2 label[for="radioOpt'+b+id_juego+'"]');
        if (opt.getAttribute('coloreado') === 'true') {
            optimizacion++;
        }
    }
    

    for (let c = 1; c <= 5; c++) {
        const jug = document.querySelector('.clasificacion3 label[for="radioJug'+c+id_juego+'"]');
        if (jug.getAttribute('coloreado') === 'true') {
            jugabilidad++;
        }
    }
    
}

$('#guardar-cambios-detalles').on('click', function() {
    let tipoUsuario = datosUsuarioStorage.getItem('tipoUsu');

    if (tipoUsuario == '2') {
        Qual.icondb('¡Hey!','¡Tienes que iniciar sesion para poder valorar juegos!', '../img/bowser.gif');
        $('#modalJuegos').modal('hide');
    } else {
        let reseña = $('.texto-reseña').val();

        if (graficos === 0 && optimizacion === 0 
            && jugabilidad === 0 && reseña === '') {
                new Noty({
                    theme: 'sunset',
                    type: 'info',
                    layout: 'bottomRight',
                    text: '¡Tienes que rellenar algun campo primero!'
                }).show(); 
            } else if (reseña !== '' && graficos === 0 
            || optimizacion === 0 || jugabilidad === 0) {
                new Noty({
                    theme: 'sunset',
                    type: 'info',
                    layout: 'bottomRight',
                    text: '¡Para poner un reseña primero tienes que rellenar todos los campos de puntuación!'
                }).show(); 
            } else {
                $.ajax({
                    url: "../../Modelo/realizarValoracion.php",
                    type: "POST",
                    data: { id_juego, graficos, optimizacion, jugabilidad, reseña },
                    success: function () {
                        $('#modalValoracion').modal('hide');
                        $('.caja-comentarios').empty();
                        cargarComentarios(id_juego);
                        cargarValoracionGeneral(id_juego);
                        cargarValoracionesEspecificas(id_juego);
                        new Noty({
                            theme: 'sunset',
                            type: 'success',
                            layout: 'bottomRight',
                            text: '¡Gracias por la valoracion!'
                        }).show();
                        
                        graficos = 0;
                        optimizacion = 0;
                        jugabilidad = 0;
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log(
                        errorThrown
                        );
                    },
                });
            }
    }
});