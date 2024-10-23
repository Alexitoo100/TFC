
$(document).ready(obtenerDatosForos);

function obtenerDatosForos() {
  $('.titulo-insert').html('INSERTAR NUEVO FORO');
  $('.titulo-update').html('ACTUALIZAR FORO');
    $.ajax({
        url: "../../Modelo/obtenerForos.php",
        type: "GET",
        dataType: "json",
        success: function (ListadoForos) {
          obtenerListadoForos(ListadoForos);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
}

function obtenerListadoForos(foros) {
    $('.table').bootstrapTable({
        data: foros,
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
          field: 'n_integrantes',
          title: 'Nº Integrantes'
        },
        {
            field: 'propietario',
            title: 'Propietario'
        },
        {
            field: 'tematica',
            title: 'Tematica'
        },
        {
            field: 'acciones',
            title: 'Acciones',
            formatter : function(value,row,index) {
              
                const {id, nombre, n_integrantes, propietario, tematica} = row;
                let botonBorrar = '<i class="fa-sharp fa-solid fa-trash fa-lg borrarForo" id="'+id+'" nombre="'+nombre+'" data-bs-toggle="modal" data-bs-target="#confirmarBorrado"></i>';
                let botonActualizar = '<i class="fa-classic fa-solid fa-file-pen fa-lg modificarForo" data-bs-toggle="modal" data-bs-target="#modalActualizacionForos" rowid="'+id+'" id="actualizar'+id+'" nombre="'+nombre+'" n_integrantes="'+n_integrantes+'" propietario="'+propietario+'" tematica="'+tematica+'"></i>';
                return botonActualizar + "&nbsp;&nbsp;&nbsp;&nbsp;" + botonBorrar;
            }
        },  
    ],
    });

    borrarForo();
    añadirForo();
    actualizarForo();
}

function borrarForo() {
    let id_foro;
    let nombre;
    $('.borrarForo').on('click', function() {
        id_foro = this.id;

        nombre = $(this).attr('nombre');
        $('.registroAborrar').html('Foro seleccionado: <div class="nombreElementoBorrar">' + nombre + '</div>');
    });

    $('.borrarRegistro').on('click', function() {
      $.ajax({
          url: "../../Modelo/borradoForos.php",
          type: "POST",
          data: { id_foro },
          success: function (response) {
              new Noty({
                  type: 'success',
                  layout: 'bottomRight',
                  text: '¡Foro eliminado satisfactoriamente!'
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

function actualizarForo() {
  $('.modificarForo').on('click', function() {
        let id_boton = this.id;
        let id_foro = $('#'+id_boton).attr('rowid');

        let campo_nombre = $('#'+id_boton).attr('nombre');
          $('#update-nombre').val(campo_nombre);
        let campo_integrantes = $('#'+id_boton).attr('n_integrantes');
          $('#update-integrantes').val(campo_integrantes);
        let campo_propietario = $('#'+id_boton).attr('propietario');
          $('#update-propietario').val(campo_propietario);
        let campo_tematica = $('#'+id_boton).attr('tematica');
          $('#update-tematica').val(campo_tematica);

      $('#actualizarDatos').on('click', function() {
        let nombre = $('#update-nombre').val();
        let integrantes = $('#update-integrantes').val();
        let propietario = $('#update-propietario').val();
        let tematica = $('#update-tematica').val();

      if (nombre === '' || integrantes === '' 
      || propietario === '' || tematica === '') {
        Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');

      } else {

      $.ajax({
          url: "../../Modelo/actualizarForos.php",
          type: "POST",
          data: { id_foro, nombre, integrantes, propietario, tematica, campo_nombre },
          success: function (resultado) {
            if (resultado === 'true') {
              new Noty({
                type: 'success',
                layout: 'bottomRight',
                text: 'Foro modificado satisfactoriamente!'
            }).show();

            $('#modalActualizacionForos').modal('hide');
            setTimeout(() => {  location.reload(); }, 1200);
                        
            } else if (resultado === 'exist') {
              Qual.errordb("¡ Oh no !", '¡Ya existe un foro con ese nombre asociado!');
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

function añadirForo() {
  $('#insertarDatos').on('click', function() {
      let nombre = $('#insert-nombre').val();
      let integrantes = $('#insert-integrantes').val();
      let propietario = $('#insert-propietario').val();
      let tematica = $('#insert-tematica').val();

      if (nombre === '' || integrantes === '' 
        || propietario === '' || tematica === '') {

          Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');

      } else {

        $.ajax({
          url: "../../Modelo/insercionForos.php",
          type: "POST",
          data: { nombre, integrantes, propietario, tematica },
          success: function (resultado) {
            if (resultado === 'true') {
              new Noty({
                type: 'success',
                layout: 'bottomRight',
                text: '¡Foro creado satisfactoriamente!'
            }).show();

              $('#modalInsercionForos').modal('hide');
            setTimeout(() => {  location.reload(); }, 1200);
            } else if (resultado === 'exist') {
              Qual.errordb("¡ Oh no !", '¡Ya existe un foro con ese nombre asociado!');
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