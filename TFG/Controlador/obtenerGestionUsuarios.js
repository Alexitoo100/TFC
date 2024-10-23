
$(document).ready(function() {
  $('.titulo-insert').html('INSERTAR NUEVO USUARIO');
  $('.titulo-update').html('ACTUALIZAR USUARIO');
    $.ajax({
        url: "../../Modelo/obtenerUsuarios.php",
        type: "GET",
        dataType: "json",
        success: function (ListadoUsuarios) {
          obtenerListadoUsuarios(ListadoUsuarios);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
});

// Mostramos los resultados en una tabla de Bootstrap.
function obtenerListadoUsuarios(usuarios) {
    $('.table').bootstrapTable({
        data: usuarios,
        columns: [{
            field: '#',
            title: 'Nº',
            formatter : function(value,row,index) {
                return index+1;
            }
          }, {
          field: 'username',
          title: 'Usuario'
        },
        {
            field: 'nombre',
            title: 'Nombre'
        },
        {
            field: 'apellidos',
            title: 'Apellidos'
        },
        {
            field: 'correo',
            title: 'Correo'
        },
        {
            field: 'password',
            title: 'Password',
            formatter : function(value,row,index) {
                return '••••••••••••';
            }
        },
        {
            field: 'tipo',
            title: 'Tipo',
            formatter : function(value,row,index) {
              if (row.tipo === '0') {
                return 'Usuario';
              } else if (row.tipo === "1") {
                return 'Administrador';
              }
          }
        },
        {
            field: 'acciones',
            title: 'Acciones',
            formatter : function(value,row,index) {
              
                const {id, username, nombre, apellidos, correo, password, tipo} = row;
                let botonBorrar = '<i class="fa-sharp fa-solid fa-trash fa-lg borrarUsu" id="'+id+'"  nombre="'+username+'" data-bs-toggle="modal" data-bs-target="#confirmarBorrado"></i>';
                let botonActualizar = '<i class="fa-classic fa-solid fa-file-pen fa-lg modificarUsu" data-bs-toggle="modal" data-bs-target="#modalActualizacionUsuarios" rowid="'+id+'" id="actualizar'+id+'" usuario="'+username+'" nombre="'+nombre+'" apellidos="'+apellidos+'" correo="'+correo+'" password="'+password+'" tipo="'+tipo+'"></i>';
                return botonActualizar + "&nbsp;&nbsp;&nbsp;&nbsp;" + botonBorrar;
            }
        },  
    ],
    });

    // Acciones para cada fila
    añadirUsuario();
    borrarUsuario();
    actualizarUsuario();
}

function borrarUsuario() {
    let id_usuario;
    let usuario;
    $('.borrarUsu').on('click', function() {
        id_usuario = this.id;
        usuario = $(this).attr('nombre');
          $('.registroAborrar').html('Usuario seleccionado: <div class="nombreElementoBorrar">' + usuario + '</div>');
    });

    $('.borrarRegistro').on('click', function() {
      $.ajax({
          url: "../../Modelo/borradoUsuarios.php",
          type: "POST",
          data: { id_usuario },
          success: function (ListadoJuegos) {
              new Noty({
                  type: 'success',
                  layout: 'bottomRight',
                  text: '¡Usuario eliminado satisfactoriamente!'
              }).show();
              $('#confirmarBorrado').modal('hide');
              setTimeout(() => {  location.reload(); }, 1200);
              
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(
              errorThrown
            );
          },
        });
      });
}

function actualizarUsuario() {
  let nombre_usuario;
  let nombreDeLaPersona;
  let apellidos_usu;
  let correo_usu;
  let tipo_usu;
  let id_usuario;
  $('.modificarUsu').on('click', function() {
        let id_boton = this.id;
        id_usuario = $('#'+id_boton).attr('rowid');

        nombre_usuario = $('#'+id_boton).attr('usuario');
          $('#update-username').val(nombre_usuario);
        nombreDeLaPersona = $('#'+id_boton).attr('nombre');
          $('#update-nombre').val(nombreDeLaPersona);
        apellidos_usu = $('#'+id_boton).attr('apellidos');
          $('#update-apellidos').val(apellidos_usu);
        correo_usu = $('#'+id_boton).attr('correo');
          $('#update-correo').val(correo_usu);
        tipo_usu = $('#'+id_boton).attr('tipo');
          $('#update-tipo option[value=' + tipo_usu + ']').attr('selected', true);
        });

      $('#actualizarDatos').on('click', function() {
          let username = $('#update-username').val();
          let nombre = $('#update-nombre').val();
          let apellidos = $('#update-apellidos').val();
          let correo = $('#update-correo').val();
          let password = $('#update-password').val();
          let tipo = $('#update-tipo').val();

      if (username === '' || nombre === '' || apellidos === '' 
      || correo === '' || tipo === '') {
        Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');

      } else {

      $.ajax({
          url: "../../Modelo/actualizarUsuarios.php",
          type: "POST",
          data: { id_usuario, username, nombre, apellidos, correo, password, tipo, nombre_usuario, correo_usu},
          success: function (resultado) {
            if (resultado === 'true') {
              new Noty({
                type: 'success',
                layout: 'bottomRight',
                text: '¡Usuario modificado satisfactoriamente!'
            }).show();
            $('#modalActualizacionUsuarios').modal('hide');
            setTimeout(() => {  location.reload(); }, 1200);
            } else if (resultado === 'password-mal') {
              Qual.errordb("¡ Oh no !", '¡La contraseña tiene que tener al menos 8 caracteres!');
            } else if (resultado === 'correo-mal') {
              Qual.errordb("¡ Oh no !", '¡El formato del correo electronico no es correcto!');
            } else if (resultado === 'username') {
              Qual.errordb("¡ Oh no !", '¡Ya existe una cuenta con este nombre de usuario asociado!');
            } else if (resultado === 'correo') {
              Qual.errordb("¡ Oh no !", '¡Ya existe una cuenta con este correo asociado!');
            } 
          
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

function añadirUsuario() {
  $('#insertarDatos').on('click', function() {
          let username = $('#insert-username').val();
          let nombre = $('#insert-nombre').val();
          let apellidos = $('#insert-apellidos').val();
          let correo = $('#insert-correo').val();
          let password = $('#insert-password').val();
          let tipo = $('#insert-tipo').val();

      if (username === '' || nombre === '' || apellidos === '' 
        || correo === '' || password === '' || tipo === '') {

          Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');

      } else {

        $.ajax({
          url: "../../Modelo/insercionUsuarios.php",
          type: "POST",
          data: { username, nombre, apellidos, correo, password, tipo },
          success: function (resultado) {
            console.log(resultado)
            if (resultado === 'true') {
              new Noty({
                type: 'success',
                layout: 'bottomRight',
                text: '¡Usuario creado satisfactoriamente!'
            }).show();
            $('#modalInsercionUsuarios').modal('hide'); 
            setTimeout(() => {  location.reload(); }, 1200);
            } else if (resultado === 'password-mal') {
              Qual.errordb("¡ Oh no !", '¡La contraseña tiene que tener al menos 8 caracteres!');
            } else if (resultado === 'correo-mal') {
              Qual.errordb("¡ Oh no !", '¡El formato del correo electronico no es correcto!');
            } else if (resultado === 'ambos') {
              Qual.errordb("¡ Oh no !", '¡Ya existe una cuenta con ese correo y nombre de usuario asociado!');
            } else if (resultado === 'username') {
              Qual.errordb("¡ Oh no !", '¡Ya existe una cuenta con este nombre de usuario asociado!');
            } else if (resultado === 'correo') {
              Qual.errordb("¡ Oh no !", '¡Ya existe una cuenta con este correo asociado!');
            } 
              
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