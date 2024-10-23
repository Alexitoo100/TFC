let datosForo = window.localStorage;
$(document).ready(comprobarUsuarioActualEnForos);

function mostrarForos(tipo_usu) {
    $.ajax({
        url: "../../Modelo/obtenerForos.php",
        type: "GET",
        dataType: "json",
        success: function (Listadoforos) {
          obtenerListadoDeForos(Listadoforos, tipo_usu);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
}

function comprobarUsuarioActualEnForos() {
  $.ajax({
      url: "../../Modelo/comprobarUsuarioActual.php",
      type: "POST",
      success: function (resultado) {
          let datosUsu = resultado.split('º');
          mostrarForos(datosUsu[1]);
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(
          errorThrown
        );
      },
    });
}

function obtenerListadoDeForos(listaForos, tipo) {
        $('.tablaDeForos').bootstrapTable({
          data: listaForos,
          columns: [{
              field: 'Accesibilidad',
              title: 'Accesibilidad',
              align: 'center',
              formatter : function(value,row,index) {
                return '<i class="fa-solid fa-right-to-bracket fa-2xl" style="color: #21FA90;"></i>';
              }
            },{
              field: 'nombre',
              align: 'center',
              title: 'Nombre',
            },
            {
              field: 'tematica',
              align: 'center',
              title: 'Tematica'
            },
            {
            field: 'n_integrantes',
            align: 'center',
            title: 'Integrantes',
            formatter : function(value,row,index) {
              return '<i class="fa-regular fa-user"> '+row.n_integrantes+'</i>';
            }
            },  
            { 
            field: 'propietario',
            align: 'center',
            title: 'Propietario',
            }, 
      ],
      });    

      $(".tablaListaForos").on("click-row.bs.table", function (row, $el, field) {
        const {id, nombre, tematica, n_integrantes, propietario} = $el;
        if (tipo !== '2') {
          datosForo.setItem('id', id);
          datosForo.setItem('nombre', nombre);
          datosForo.setItem('n_integrantes', n_integrantes);
          datosForo.setItem('propietario', propietario);
          datosForo.setItem('tematica', tematica);
          datosForo.setItem('tipoUsuario', tipo);
          
          location.href= '../interfaces/foro.html';
        } else {
          Qual.infodb('Vaya...', '¡Para acceder a los foros debes validarte primero!');
        }
      });
    }

      

                