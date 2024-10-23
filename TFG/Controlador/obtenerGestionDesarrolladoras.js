$(document).ready(obtenerDatosDesarrolladoras);

function obtenerDatosDesarrolladoras() {
  $('.titulo-insert').html('INSERTAR NUEVA DESARROLLADORA');
  $('.titulo-update').html('ACTUALIZAR DESARROLLADORA');
    $.ajax({
        url: "../../Modelo/obtenerDesarrolladoras.php",
        type: "GET",
        dataType: "json",
        success: function (ListadoDesarrolladoras) {
          obtenerListadoDesarrolladoras(ListadoDesarrolladoras);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
}

function obtenerListadoDesarrolladoras(desarrolladoras) {
    $('.table').bootstrapTable({
        data: desarrolladoras,
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
          field: 'fundacion',
          title: 'Fecha de Fundación',
          formatter : function(value,row,index) {
            let fecha = new Date(row.fundacion)
            return fecha.toLocaleDateString("es-ES");
        }
        },
        {
            field: 'acciones',
            title: 'Acciones',
            formatter : function(value,row,index) {
              
                const {id, nombre, fundacion} = row;
                let botonBorrar = '<i class="fa-sharp fa-solid fa-trash fa-lg borrarDesarrolladora" nombre="'+nombre+'" id="'+id+'" data-bs-toggle="modal" data-bs-target="#confirmarBorrado"></i>';
                let botonActualizar = '<i class="fa-classic fa-solid fa-file-pen fa-lg modificarDesarrolladora" data-bs-toggle="modal" data-bs-target="#modalActualizacionDesarrolladora" rowid="'+id+'" id="actualizar'+id+'" nombre="'+nombre+'" fundacion="'+fundacion+'"></i>';
                return botonActualizar + "&nbsp;&nbsp;&nbsp;&nbsp;" + botonBorrar;
            }
        },  
    ],
    });

    borrarDesarrolladora();
    añadirDesarrolladora();
    actualizarDesarrolladora();
}

function borrarDesarrolladora() {
    let id_desarrolladora;
    let nombre;
    $('.borrarDesarrolladora').on('click', function() {
        id_desarrolladora = this.id;
        nombre = $(this).attr('nombre');
        $('.registroAborrar').html('Desarrolladora seleccionada: <div class="nombreElementoBorrar">' + nombre + '</div>');   
    });

    $('.borrarRegistro').on('click', function() {
      $.ajax({
          url: "../../Modelo/borradoDesarrolladora.php",
          type: "POST",
          data: { id_desarrolladora },
          success: function (response) {
              new Noty({
                  type: 'success',
                  layout: 'bottomRight',
                  text: '¡Desarrolladora eliminada satisfactoriamente!'
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

function actualizarDesarrolladora() {
  
  $('.modificarDesarrolladora').on('click', function() {
        let id_boton = this.id;
        let id_desarrolladora = $('#'+id_boton).attr('rowid');

        let campo_nombre = $('#'+id_boton).attr('nombre');
          $('#update-nombre').val(campo_nombre);
        let campo_fundacion = $('#'+id_boton).attr('fundacion');
          $('#update-fundacion').val(campo_fundacion);

      $('#actualizarDatos').on('click', function() {
          let nombre = $('#update-nombre').val();
          let fundacion = $('#update-fundacion').val();

      if (nombre === '' || fundacion === '') {
        Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');

      } else {

      $.ajax({
          url: "../../Modelo/actualizarDesarrolladora.php",
          type: "POST",
          data: { id_desarrolladora, nombre, fundacion, campo_nombre },
          success: function (resultado) {
            if (resultado === 'true') {
              new Noty({
                type: 'success',
                layout: 'bottomRight',
                text: 'Desarrolladora modificada satisfactoriamente!'
            }).show();

            $('#modalActualizacionDesarrolladora').modal('hide');
            setTimeout(() => {  location.reload(); }, 1200);
                        
            } else if (resultado === 'exist') {
              Qual.errordb("¡ Oh no !", '¡Ya existe una desarrolladora con ese nombre asociado!');
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

function añadirDesarrolladora() {
  $('#insertarDatos').on('click', function() {
          let nombre = $('#insert-nombre').val();
          let fundacion = $('#insert-fundacion').val();
    console.log(nombre, fundacion)
      if (nombre === '' || fundacion === '' ) {

          Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');

      } else {

        $.ajax({
          url: "../../Modelo/insercionDesarrolladora.php",
          type: "POST",
          data: { nombre, fundacion },
          success: function (resultado) {
            console.log(resultado)
            if (resultado === 'true') {
              new Noty({
                type: 'success',
                layout: 'bottomRight',
                text: '¡Desarrolladora creado satisfactoriamente!'
            }).show();

              $('#modalInsercionDesarrolladoras').modal('hide');
              setTimeout(() => {  location.reload(); }, 1200);
            
            } else if (resultado === 'exist') {
              Qual.errordb("¡ Oh no !", '¡Ya existe una desarrolladora con ese nombre asociado!');
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