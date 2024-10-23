$(document).ready(obtenerDatosPlataformas);

function obtenerDatosPlataformas() {
  $('.titulo-insert').html('INSERTAR NUEVA PLATAFORMA');
  $('.titulo-update').html('ACTUALIZAR PLATAFORMA');
    $.ajax({
        url: "../../Modelo/obtenerPlataformas.php",
        type: "GET",
        dataType: "json",
        success: function (ListadoPlataformas) {
          obtenerListadoPlataformas(ListadoPlataformas);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
}

function obtenerListadoPlataformas(plataformas) {
    $('.table').bootstrapTable({
        data: plataformas,
        columns: [{
            field: '#',
            title: 'Nº',
            formatter : function(value,row,index) {
                return index+1;
            }
          }, {
            field: 'nombre',
            title: 'Nombre'
        },
        {
            field: 'acciones',
            title: 'Acciones',
            formatter : function(value,row,index) {
              
                let nombre = row.nombre;
                let botonBorrar = '<i class="fa-sharp fa-solid fa-trash fa-lg borrarPlataforma" id="'+row.id+'" nombre="'+nombre+'" data-bs-toggle="modal" data-bs-target="#confirmarBorrado"></i>';
                let botonActualizar = '<i class="fa-classic fa-solid fa-file-pen fa-lg modificarPlataforma" data-bs-toggle="modal" data-bs-target="#modalActualizacionPlataformas" rowid="'+row.id+'" id="actualizar'+row.id+'" nombre="'+nombre+'"></i>';
                return botonActualizar + "&nbsp;&nbsp;&nbsp;&nbsp;" + botonBorrar;
            }
        },  
    ],
    });

    borrarPlataforma();
    añadirPlataforma();
    actualizarPlataforma();
}

function borrarPlataforma() {
  let id_plataforma;
  let nombre;
    $('.borrarPlataforma').on('click', function() {
        id_plataforma = this.id;
        nombre = $(this).attr('nombre');
        $('.registroAborrar').html('Plataforma seleccionada: <div class="nombreElementoBorrar">' + nombre + '</div>');
    });

    $('.borrarRegistro').on('click', function() {
      $.ajax({
          url: "../../Modelo/borradoPlataforma.php",
          type: "POST",
          data: { id_plataforma },
          success: function (response) {
              new Noty({
                  type: 'success',
                  layout: 'bottomRight',
                  text: '¡Plataforma eliminada satisfactoriamente!'
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

function actualizarPlataforma() {
  
  $('.modificarPlataforma').on('click', function() {
        let id_boton = this.id;
        let id_plataforma = $('#'+id_boton).attr('rowid');

        let campo_nombre = $('#'+id_boton).attr('nombre');
          $('#update-nombre').val(campo_nombre);

      $('#actualizarDatos').on('click', function() {
          let nombre = $('#update-nombre').val();

      if (nombre === '') {
        Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');

      } else {
      $.ajax({
          url: "../../Modelo/actualizarPlataforma.php",
          type: "POST",
          data: { id_plataforma, nombre, campo_nombre },
          success: function (resultado) {
            if (resultado === 'true') {
              new Noty({
                type: 'success',
                layout: 'bottomRight',
                text: 'Plataforma modificada satisfactoriamente!'
            }).show();

            $('#modalActualizacionPlataformas').modal('hide');
            setTimeout(() => {  location.reload(); }, 1200);
                        
            } else if (resultado === 'exist') {
              Qual.errordb("¡ Oh no !", '¡Ya existe una plataforma con ese nombre asociado!');
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
  });
}

function añadirPlataforma() {
  $('#insertarDatos').on('click', function() {
   
      let nombre = $('#insert-nombre').val();

      if (nombre === '') {

          Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');

      } else {

        $.ajax({
          url: "../../Modelo/insercionPlataforma.php",
          type: "POST",
          data: { nombre },
          success: function (resultado) {
            if (resultado === 'true') {
              new Noty({
                type: 'success',
                layout: 'bottomRight',
                text: '¡Plataforma creada satisfactoriamente!'
            }).show();

              $('#modalInsercionPlataformas').modal('hide');
            setTimeout(() => {  location.reload(); }, 1200);
            
            } else if (resultado === 'exist') {
              Qual.errordb("¡ Oh no !", '¡Ya existe una plataforma con ese nombre asociado!');
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