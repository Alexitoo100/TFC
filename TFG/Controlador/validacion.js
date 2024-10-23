let datosUsuarioStorage = window.localStorage;

$(document).ready(validarSesion);

function validarSesion() {
$.ajax({
  url: "../../Modelo/validacion.php",
  type: "GET",
    datatype: 'text',
  success: function (resultado) {
    if (resultado !== '') {
        let datosUsu = resultado.split('º');
        datosUsuario(datosUsu[0], datosUsu[1], datosUsu[2]);
    } 
    
  },
  error: function (XMLHttpRequest, textStatus, errorThrown) {
    console.log(
      errorThrown
    );
  },
});
}

// Obtiene los datos de los usuarios.
function datosUsuario(usuario, tipo, id) {
  datosUsuarioStorage.setItem('tipoUsu', tipo);
  datosUsuarioStorage.setItem('idUsu', id);

    // Comprobamos si el usuario es admin o no (1 = admin, 0 = usuario normal).
    if (tipo === '1') {
      let iniciosesion = "http://localhost/TFG/Vista/interfaces/iniciarsesion.html";

      if (window.location.href !== iniciosesion) {
        $('.login').hide();
        $('.collapse-juegos').append('<a class="nav-link active" data-bs-toggle="modal" data-bs-target="#modalFavoritos" id="favoritos">Listado de Favoritos</a>');
        $('.collapse').append('<div class="administracion"><ul class="navbar-nav panel me-auto mb-2 mb-lg-0"></ul></div>');
        $('.panel').append('<li class="nav-item titulo-dropdown dropdown"><a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Panel de Administracion</a></li>');
        $('.titulo-dropdown').append('<ul class="dropdown-menu dropdown-panel"><li><a class="dropdown-item" id="seleccion2" href="./gestionusuarios.html">Gestión de usuarios</a></li><li><a class="dropdown-item" id="seleccion3" href="./gestionjuegos.html">Gestión de juegos</a></li>');
        $('.dropdown-panel').append('<li><a class="dropdown-item" id="seleccion4" href="./gestionforos.html">Gestión de foros</a></li></ul>');
        $('.dropdown-panel').append('<hr class="dropdown-divider"><li><a class="dropdown-item" id="seleccion5" href="./gestionplataformas.html">Gestión de plataformas</a></li></ul>');
        $('.dropdown-panel').append('<li><a class="dropdown-item" id="seleccion6" href="./gestiondesarrolladoras.html">Gestión de desarrolladoras</a></li></ul>');
        $('.collapse').append('<div class="panelUsuario"><ul class="navbar-nav panel-del-usuario me-auto mb-2 mb-lg-0"></ul></div>');
        $('.panel-del-usuario').append('<li class="nav-item titulo-usuario-dropdown dropdown"><a class="nav-link cont-usuario active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-user fa-dm"> '+ usuario +'</i></a></li>');
        $('.titulo-usuario-dropdown').append('<ul class="dropdown-menu dropdown-usuario-panel"><li><a class="dropdown-item ver-datos" href="#">Ver datos personales</a></li>');
        $('.dropdown-usuario-panel').append('<li><a class="dropdown-item modificar-datos" href="#">Modificar datos personales</a></li></ul>');
        $('.collapse').append('<a class="nav-link active" id="logout">Cerrar sesion</a>');
        $('#logout').on('click', cerrarSesionUsuario);

        abrirModalVerDatosUsuario(id);
        abrirModalModificarDatosUsuario(id);
        modificarDatosDelUsuario(id);
        cargarFavoritosMarcadosEnModal();
      }
    } else if (tipo === '2') {
      let gestionUsu = "http://localhost/TFG/Vista/interfaces/gestionusuarios.html";
      let gestionJuegos = "http://localhost/TFG/Vista/interfaces/gestionjuegos.html";
      let gestionForos = "http://localhost/TFG/Vista/interfaces/gestionforos.html";
      let gestionPlataformas = "http://localhost/TFG/Vista/interfaces/gestionplataformas.html";
      let gestionDesarrolladoras = "http://localhost/TFG/Vista/interfaces/gestiondesarrolladoras.html";
      let foros = "http://localhost/TFG/Vista/interfaces/foro.html";

      $('.collapse').append('<div class="bienvenida-usu">Bienvenido anonimo</div>');

      $('#guardar-cambios-detalles').on('click', function() {
        Qual.icondb('¡Hey!','¡Tienes que iniciar sesion para poder guardar cambios!', '../img/bowser.gif');
        closePopUpDetalles();
      })

      if (window.location.href === gestionUsu || window.location.href === gestionJuegos 
        || window.location.href === gestionForos || window.location.href === foros
        || window.location.href === gestionPlataformas || window.location.href === gestionDesarrolladoras) {
          window.location.href = "../interfaces/index.html";
      }

      if (window.location.href === 'http://localhost/TFG/Vista/interfaces/gestionusuarios.html#' ||
      window.location.href === 'http://localhost/TFG/Vista/interfaces/gestionjuegos.html#' 
      || window.location.href === 'http://localhost/TFG/Vista/interfaces/gestionforos.html#' 
      || window.location.href === 'http://localhost/TFG/Vista/interfaces/gestionplataformas.html#'
      || window.location.href === 'http://localhost/TFG/Vista/interfaces/gestiondesarrolladoras.html#' 
      || window.location.href === 'http://localhost/TFG/Vista/interfaces/foro.html#') {
        window.location.href = "../interfaces/index.html";
      } else if (window.location.href === 'http://localhost/TFG/Vista/interfaces/gestionusuarios.html#' ||
      window.location.href === 'http://localhost/TFG/Vista/interfaces/gestionjuegos.html#' 
      || window.location.href === 'http://localhost/TFG/Vista/interfaces/gestionforos.html#' 
      || window.location.href === 'http://localhost/TFG/Vista/interfaces/gestionplataformas.html#'
      || window.location.href === 'http://localhost/TFG/Vista/interfaces/gestiondesarrolladoras.html#') {
        window.location.href = "../interfaces/index.html";
      }

    } else if (tipo === '0') {
      $('.login').hide();
      let gestionUsu = "http://localhost/TFG/Vista/interfaces/gestionusuarios.html";
      let gestionJuegos = "http://localhost/TFG/Vista/interfaces/gestionjuegos.html";
      let gestionForos = "http://localhost/TFG/Vista/interfaces/gestionforos.html";
      let gestionPlataformas = "http://localhost/TFG/Vista/interfaces/gestionplataformas.html";
      let gestionDesarrolladoras = "http://localhost/TFG/Vista/interfaces/gestiondesarrolladoras.html";

      if (window.location.href === gestionUsu || window.location.href === gestionJuegos 
        || window.location.href === gestionForos || window.location.href === gestionPlataformas || window.location.href === gestionDesarrolladoras) {
        window.location.href = "../interfaces/index.html";
      } else if (window.location.href === 'http://localhost/TFG/Vista/interfaces/gestionusuarios.html#' ||
      window.location.href === 'http://localhost/TFG/Vista/interfaces/gestionjuegos.html#' 
      || window.location.href === 'http://localhost/TFG/Vista/interfaces/gestionforos.html#' 
      || window.location.href === 'http://localhost/TFG/Vista/interfaces/gestionplataformas.html#'
      || window.location.href === 'http://localhost/TFG/Vista/interfaces/gestiondesarrolladoras.html#') {
        window.location.href = "../interfaces/index.html";
      }

      let iniciosesion = "http://localhost/TFG/Vista/interfaces/iniciarsesion.html";

      if (window.location.href !== iniciosesion) {
        $('.collapse-juegos').append('<a class="nav-link active" data-bs-toggle="modal" data-bs-target="#modalFavoritos" id="favoritos">Listado de Favoritos</a>');
        $('.collapse').append('<div class="panelUsuario"><ul class="navbar-nav panel-del-usuario me-auto mb-2 mb-lg-0"></ul></div>');
        $('.panel-del-usuario').append('<li class="nav-item titulo-usuario-dropdown dropdown"><a class="nav-link active cont-usuario" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-user fa-dm"> '+ usuario +'</i></a></li>');
        $('.titulo-usuario-dropdown').append('<ul class="dropdown-menu dropdown-usuario-panel"><li><a class="dropdown-item ver-datos" href="#">Ver datos personales</a></li>');
        $('.dropdown-usuario-panel').append('<li><a class="dropdown-item modificar-datos" href="#">Modificar datos personales</a></li></ul>');
        $('.collapse').append('&nbsp;&nbsp;<a class="nav-link active" id="logout">Cerrar sesion</a>');

        $('#logout').on('click', cerrarSesionUsuario);
        abrirModalVerDatosUsuario(id);
        abrirModalModificarDatosUsuario(id);
        modificarDatosDelUsuario(id);
        cargarFavoritosMarcadosEnModal();
      }
    }

}

function cerrarSesionUsuario() {
  $.ajax({
    url: "../../Modelo/cerrarSesion.php",
    type: "GET",
    success: function (resultado) {
      Qual.icondb('¡Gracias por elegirnos!', resultado, '../img/beemo.gif');
      closepopup();
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(
        errorThrown
      );
    },
  });
}

function abrirModalVerDatosUsuario(idUsuario) {
$('.ver-datos').on('click', function() {
  $.ajax({
    url: "../../Modelo/obtenerDatosDelUsuario.php",
    type: "GET",
    dataType: "json",
    data: { idUsuario },
    success: function (response) {
      $('#username-text-show-data').val(response[0].username);
      $('#name-text-show-data').val(response[0].nombre);
      $('#surname-text-show-data').val(response[0].apellidos);
      $('#mail-text-show-data').val(response[0].correo);
      $('#password-text').val(response[0].passwordSinMd5);
      
      $('.fa-eye').on('mousedown', function() {
        $('#password-text').attr('type', 'text');
      })

      $('.fa-eye').on('mouseup', function() {
        $('#password-text').attr('type', 'password');
      })
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(
        errorThrown
      );
    },
  }); 
    $('#verDatosUsuario').modal('show');
  });
}
 
function abrirModalModificarDatosUsuario(idUsuario) {
  $('.modificar-datos').on('click', function() {
    $.ajax({
        url: "../../Modelo/obtenerDatosDelUsuario.php",
        type: "GET",
        dataType: "json",
        data: { idUsuario },
        success: function (response) {
          $('#username-text').val(response[0].username);
          $('#name-text').val(response[0].nombre);
          $('#surname-text').val(response[0].apellidos);
          $('#mail-text').val(response[0].correo);
          $('#modificarDatosUsuario').modal('show');
          datosUsuarioStorage.setItem('usernameDB', response[0].username);
          datosUsuarioStorage.setItem('passwordDB', response[0].password);
          datosUsuarioStorage.setItem('correoDB', response[0].correo);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });  
  });
}

function modificarDatosDelUsuario(id) {
  $('.guardar-cambios-usuario').on('click', function() {
    let correo_usu = datosUsuarioStorage.getItem('correoDB');
    let nombreDeUsuarioBD = datosUsuarioStorage.getItem('usernameDB');
    let passwordBD = datosUsuarioStorage.getItem('passwordDB');

    let nombreDeUsuario = $('#username-text').val();
    let nombrePersona = $('#name-text').val();
    let apellidosPersona = $('#surname-text').val();
    let correoPersona = $('#mail-text').val();
    let contrasenyaActual = $('#prev-password-text').val();
    let contrasenyaNueva = $('#new-password-text').val();

  $.ajax({
    url: "../../Modelo/actualizarDatosPorElUsuario.php",
    type: "POST",
    data: { id, nombreDeUsuarioBD, nombreDeUsuario, nombrePersona, apellidosPersona, correo_usu, correoPersona, passwordBD, contrasenyaActual, contrasenyaNueva },
    success: function (resultado, status, jqXHR) {
      if (resultado === 'vacio') {
        Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');
      } else if (resultado === 'password-actual-mal') {
        $('.mensajeError').html('¡La contraseña actual tiene menos de 8 caracteres!');
        $('.mensajeError').css('visibility', 'visible');
      } else if (resultado === 'password-nueva-mal') {
        $('.mensajeError').html('¡La contraseña nueva tiene menos de 8 caracteres!');
        $('.mensajeError').css('visibility', 'visible');
      } else if (resultado === 'password-no-coinciden') {
        $('.mensajeError').html('¡La contraseña actual y la contraseña nueva no coinciden!');
        $('.mensajeError').css('visibility', 'visible');
      } else if (resultado === 'passwordActual-no-coincide-con-bd') { 
        $('.mensajeError').html('¡La contraseña actual no es correcta!');
        $('.mensajeError').css('visibility', 'visible');
      } else if (resultado === 'correo') {
        Qual.errordb(' ¡Upsss...! ', '¡Ya existe una cuenta con ese correo. Prueba otro!');
        $('.mensajeError').css('visibility', 'hidden'); 
      } else if (resultado === 'username') {
        Qual.errordb(' ¡Upsss...! ', '¡Ya existe una cuenta con ese nombre de usuario. Prueba otro!');
        $('.mensajeError').css('visibility', 'hidden'); 
      } else if (resultado === 'rellenarCampoPasswdActual') {
        $('.mensajeError').html('¡Tienes que rellenar el campo de la contraseña actual!');
        $('.mensajeError').css('visibility', 'visible');
      } else if (resultado === 'rellenarCampoPasswdNuevo') {
        $('.mensajeError').html('¡Tienes que rellenar el campo de la contraseña nueva!');
        $('.mensajeError').css('visibility', 'visible');
      } else if (resultado === 'true') {
        Qual.successdb('¡Cambios aplicados!', '¡Se han guardado los cambios correctamente!');
        $('.mensajeError').css('visibility', 'hidden');
          $('#prev-password-text').val('');
          $('#new-password-text').val('');
          $('#modificarDatosUsuario').modal('hide');
          closepopup();
      } 
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(
        errorThrown
      );
    },
  });  
});
}

// Al cerrar el cuadro de confirmación nos reenvia a la página principal.
function closepopup() {
  $('#close-x').on('click', function() {
    location.href = './index.html';
  })
  
  $(document).click(function(e) {
    let popup = $('#close-x');
    if (!popup.is(e.target) && !popup.has(e.target).length) {
      location.href = './index.html';
  }
  })
  }