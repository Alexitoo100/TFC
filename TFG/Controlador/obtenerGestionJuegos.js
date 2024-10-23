let arrayPlataformas = new Array();
let arrayDesarrolladoras = new Array();
let pilaActualizacionDesarrolladoras = new Array();
let pilaActualizacionPlataformas = new Array();
let arrayDesarrolladorasActualizacion = new Array;
let arrayPlataformasActualizacion = new Array;
let flag1 = false;
let flag2 = false;
let flag3 = false;
let nombreJuegoModificar;
let idJuego;

$(document).ready(function() {
  obtenerPlataformasSelect();
  obtenerDesarrolladorasSelect();
  $('.titulo-insert').html('INSERTAR NUEVO JUEGO');
  $('.titulo-update').html('ACTUALIZAR JUEGO');
    $.ajax({
        url: "../../Modelo/obtenerListadoJuegos.php",
        type: "GET",
        dataType: "json",
        success: function (ListadoJuegos) {
         obtenerListadoJuegos(ListadoJuegos);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
});

function obtenerListadoJuegos(juegos) {
    $('.table').bootstrapTable({
        data: juegos,
        columns: [{
            field: '#',
            title: 'Nº',
            formatter : function(value,row,index) {
                return index+1;
            }
          },{
          field: 'nombre',
          title: 'Nombre'
        },
        {
            field: 'precio',
            title: 'Precio'
        },
        {
            field: 'descripcion',
            title: 'Descripcion'
        },
        {
            field: 'genero',
            title: 'Genero'
        },
        {
            field: 'n_jugadores',
            title: 'Nº Jugadores'
        },
        {
            field: 'img',
            title: 'Imagen'
        },
        {
            field: 'certificaciones',
            title: 'Certificaciones'
        },
        {
            field: 'plataforma',
            title: 'Plataformas',
            formatter : function(value,row,index) {
              let plataformas = "";
               for (const plataforma of row.plataformas) {
                  plataformas += plataforma + ' ';
               }
              return plataformas;
              
            }
        },
        {
            field: 'desarrolladora',
            title: 'Desarrolladores',
            formatter : function(value,row,index) {
              let desarrolladoras = "";
               for (const desarrolladora of row.desarrolladoras) {
                  desarrolladoras += desarrolladora + ' ';
               }
              return desarrolladoras;
            }
        },
        {
          field: 'f_lanzamiento',
          title: 'Fecha de Lanzamiento',
          formatter : function(value,row,index) {
            let fecha = row.f_lanzamiento.split('-');
            let fechaConFormato = fecha[2] + '-' + fecha[1] + '-' + fecha[0];
            return fechaConFormato;
          }
        },
        {
            field: 'acciones',
            title: 'Acciones',
            formatter : function(value,row,index) {
              const {nombre} = row;
              let object = JSON.stringify(row);
              let botonBorrar = '<i class="fa-sharp fa-solid fa-trash fa-lg borrarJuego" id="'+row.id+'" nombre="'+nombre+'" data-bs-toggle="modal" data-bs-target="#confirmarBorrado"></i>';
              let botonActualizar = "<i class='fa-classic fa-solid fa-file-pen fa-lg modificarJuego' data-bs-toggle='modal' data-bs-target='#modalActualizacionJuegos'"
              + "onclick='mostrarDatosActualizarJuego(" + object + ")'></i>";
              return botonActualizar + "&nbsp;&nbsp;&nbsp;&nbsp;" + botonBorrar;
            }
        },  
    ],
    });
    
borrarJuego();
añadirJuego();
actualizarJuego();
añadirSelectPlataforma();
quitarSelectPlataforma();
añadirSelectDesarrolladora();
quitarSelectDesarrolladora();
}

function borrarJuego() {
    let id_juego;
    let nombre;
    $('.borrarJuego').on('click', function() {
        id_juego = this.id;
        nombre = $(this).attr('nombre');
        $('.registroAborrar').html('Videojuego seleccionado: <div class="nombreElementoBorrar">' + nombre + '</div>');
    });

    $('.borrarRegistro').on('click', function() {
      $.ajax({
          url: "../../Modelo/borradoJuegos.php",
          type: "POST",
          data: { id_juego },
          success: function () {
              new Noty({
                  type: 'success',
                  layout: 'bottomRight',
                  text: '¡Juego eliminado satisfactoriamente!'
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

function mostrarDatosActualizarJuego(juego) {
  const {id, nombre, precio, descripcion, genero, img, n_jugadores, plataformas, desarrolladoras, certificaciones, f_lanzamiento} = juego;

  const fechaEntera = f_lanzamiento.split('-');
  let fecha_lanzamiento = fechaEntera[0] + '-' + fechaEntera[1] + '-' + fechaEntera[2];

    $('#update-nombre').val(nombre);
    nombreJuegoModificar = nombre;
    $('#update-precio').val(precio);
    $('#update-descripcion').val(descripcion);
    $('#update-genero').val(genero);
    $('#update-jugadores').val(n_jugadores);
    $('#imagenSeleccionada').html('Imagen actual: ' + img);
    $('#update-certificaciones').val(certificaciones);
    $('#update-lanzamiento').val(fecha_lanzamiento);
    $('.modal-actualizacion').css({'background-image': 'url(../img/' + img + ')', 'background-repeat': 'no-repeat', 'background-size': '30%', 'background-position': '5%'});
    idJuego = id;

    if (desarrolladoras.length === 1) {
      $('.col-actualizar-desarrolladoras').empty();
      
      $('.col-actualizar-desarrolladoras').append('<select class="update-desarrolladoras" id="selectDesarrolladoras0">' +
      '</select>');
      $('.col-actualizar-desarrolladoras').append(' <i class="fa-regular fa-square-plus añadirDesarrolladoraActualizacion fa-xl" style="color: #ffffff;"></i>');
      $('.col-actualizar-desarrolladoras').append(' <i class="fa-regular fa-square-minus quitarDesarrolladoraActualizacion fa-xl" style="color: #ffffff;"></i>');

      marcarDesarrolladora(desarrolladoras);
      añadirSelectDesarrolladoraActualizacion(desarrolladoras);
      cambiarSelectDesarrolladorasActualizacion();
      quitarSelectDesarrolladoraActualizacion();

    } else {
      $('.col-actualizar-desarrolladoras').empty();
      
      $('.col-actualizar-desarrolladoras').append('<select class="update-desarrolladoras" id="selectDesarrolladoras0">' +
      '</select>');

      $('.col-actualizar-desarrolladoras').append(' <i class="fa-regular fa-square-plus añadirDesarrolladoraActualizacion fa-xl" style="color: #ffffff;"></i>');
      $('.col-actualizar-desarrolladoras').append(' <i class="fa-regular fa-square-minus quitarDesarrolladoraActualizacion fa-xl" style="color: #ffffff;"></i>');

      for (i=0; i < desarrolladoras.length-1; i++) {
        $('.col-actualizar-desarrolladoras').append('<select class="update-desarrolladoras" id="selectDesarrolladoras' + (i+1) + '">' +
        '</select>');
      }
    
      añadirSelectDesarrolladoraActualizacion(desarrolladoras);
      cambiarSelectDesarrolladorasActualizacion();
      quitarSelectDesarrolladoraActualizacion();
      obtenerDesarrolladorasSelectEspecial(desarrolladoras);

    }
    
  if (plataformas.length === 1) {
    $('.col-actualizar-plataformas').empty();
    
    $('.col-actualizar-plataformas').append('<select class="update-plataformas" id="selectPlataformas0">' +
    '</select>');
    $('.col-actualizar-plataformas').append(' <i class="fa-regular fa-square-plus añadirPlataformaActualizacion fa-xl" style="color: #ffffff;"></i>');
    $('.col-actualizar-plataformas').append(' <i class="fa-regular fa-square-minus quitarPlataformaActualizacion fa-xl" style="color: #ffffff;"></i>');

    marcarPlataforma(plataformas);
    añadirSelectPlataformaActualizacion(plataformas);
    cambiarSelectPlataformaActualizacion()
    quitarSelectPlataformaActualizacion();

  } else {
    $('.col-actualizar-plataformas').empty();
    
    $('.col-actualizar-plataformas').append('<select class="update-plataformas" id="selectPlataformas0">' +
    '</select>');

    $('.col-actualizar-plataformas').append(' <i class="fa-regular fa-square-plus añadirPlataformaActualizacion fa-xl" style="color: #ffffff;"></i>');
    $('.col-actualizar-plataformas').append(' <i class="fa-regular fa-square-minus quitarPlataformaActualizacion fa-xl" style="color: #ffffff;"></i>');

    for (i=0; i < plataformas.length-1; i++) {
      $('.col-actualizar-plataformas').append('<select class="update-plataformas" id="selectPlataformas' + (i+1) + '">' +
      '</select>');
    }
  
    añadirSelectPlataformaActualizacion(plataformas);
    cambiarSelectPlataformaActualizacion()
    quitarSelectPlataformaActualizacion();
    obtenerPlataformasSelectEspecial(plataformas);
}
}

function actualizarJuego() {
$('#actualizarDatos').on('click', function() {
  let nombreJuego = $('#update-nombre').val();
  let precio = $('#update-precio').val();
  let descripcion = $('#update-descripcion').val();
  let genero = $('#update-genero').val();
  let n_jugadores = $('#update-jugadores').val();
  let ruta_imagen = $('#update-imagen').val();
  let imagen = ruta_imagen.split('\\');
  let nombre_imagen = imagen[2];
  let certificaciones = $('#update-certificaciones').val();
  let selectVacioPlataformas = false;
  let selectVacioDesarrolladoras = false;
  let fecha_lanzamiento = $('#update-lanzamiento').val();
  let contadorDuplicidadesPlataformas = false;
  let contadorDuplicidadesDesarrolladoras = false;

  arrayPlataformasActualizacion = [];
  pilaActualizacionPlataformas = [];
  let optionPlataformas = document.querySelectorAll('.update-plataformas option');
  optionPlataformas.forEach(function(item) {
      if (item.selected) {
        if (arrayPlataformasActualizacion.includes(item.value)) {
          contadorDuplicidadesPlataformas = true;
        } else {
          arrayPlataformasActualizacion.push(item.value);
          pilaActualizacionPlataformas.push({
            id: item.value
          });
        }
      }
  });

  arrayDesarrolladorasActualizacion = [];
  pilaActualizacionDesarrolladoras = [];
  let optionDesarrolladoras = document.querySelectorAll('.update-desarrolladoras option');
    optionDesarrolladoras.forEach(function(item) {
        if (item.selected) {
          if (arrayDesarrolladorasActualizacion.includes(item.value)) {
            contadorDuplicidadesDesarrolladoras = true;
          } else {
            arrayDesarrolladorasActualizacion.push(item.value);
            pilaActualizacionDesarrolladoras.push({
              id: item.value
            });
          }
        }
    });

  for (const plataforma of arrayPlataformasActualizacion) {
    if (plataforma === 'Selecciona plataforma...') {
      selectVacioPlataformas = true;
    }
  }

  for (const desarrolladora of arrayDesarrolladorasActualizacion) {
    if (desarrolladora === 'Selecciona desarrolladora...') {
      selectVacioDesarrolladoras = true;
    }
  }


  if (selectVacioPlataformas === true) {
    Qual.warningdb('Aviso', '¡Se han detectado campos de plataformas sin seleccionar!');
  } else if (selectVacioDesarrolladoras === true) {
    Qual.warningdb('Aviso', '¡Se han detectado campos de desarrolladoras sin seleccionar!');
  } else if (contadorDuplicidadesPlataformas === true) {
    Qual.warningdb('Aviso', '¡No puedes elegir dos o más plataformas iguales!');
  } else if (contadorDuplicidadesDesarrolladoras === true) {
    Qual.warningdb('Aviso', '¡No puedes elegir dos o más desarrolladoras iguales!');
  } else {

if (nombreJuego === "" || precio === "" || descripcion === "" || genero === ""
|| n_jugadores === "" || ruta_imagen === "" || certificaciones === "" 
|| fecha_lanzamiento === "") {
  
  Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');
    
  arrayDesarrolladorasActualizacion = [];
  arrayPlataformasActualizacion = [];

} else {
  $.ajax({
      url: "../../Modelo/actualizarJuegos.php",
      type: "POST",
      data: { idJuego, nombreJuego, precio, descripcion, genero, nombre_imagen, n_jugadores, certificaciones, fecha_lanzamiento, 
       pilaActualizacionDesarrolladoras, pilaActualizacionPlataformas, nombreJuegoModificar },
      success: function (response) {
        if (response === "true") {
          new Noty({
              type: 'success',
              layout: 'bottomRight',
              text: '¡Juego Actualizado satisfactoriamente!'
          }).show();
          $('#modalActualizacionJuegos').modal('hide');
          setTimeout(() => {  location.reload(); }, 1200);
        } else if (response === 'exist') {
          Qual.warningdb('Vaya...','¡Parece que el juego que intentas introducir ya existe. Introduce otro.!');
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
});
}

function añadirSelectPlataforma() {
  $('.añadirPlataforma').on('click', function() {
    let totalDeSelectsPlataformas = document.querySelectorAll('.insert-plataformas');

    if (totalDeSelectsPlataformas.length < 5) {
      $('.insert-plataformas option').remove();
      $('.col-anyadir-plataformas').append('<select class="insert-plataformas">' + '</select>');
      obtenerPlataformasSelect();
    }
  });
}

function añadirSelectPlataformaActualizacion(plataformas) {
  $('.añadirPlataformaActualizacion').on('click', function() {  
    let totalDeSelectsPlataformasActualizacion = document.querySelectorAll('.update-plataformas');
    if (totalDeSelectsPlataformasActualizacion.length < 5) {
      $('.col-actualizar-plataformas').append('<select class="update-plataformas nuevo-select-plataformas">' +
      '</select>');
      obtenerPlataformasDelUltimoSelect();
      obtenerPlataformasSelectEspecial(plataformas);
    }
  });
}

function quitarSelectPlataforma() {
  $('.quitarPlataforma').on('click', function() {
    $('.col-anyadir-plataformas select:last-child').remove();
  });
}

function quitarSelectPlataformaActualizacion() {
  $('.quitarPlataformaActualizacion').on('click', function() {
    let idPlataformaBorrada = $('.col-actualizar-plataformas select:last-child option:checked').val();
    $('.col-actualizar-plataformas select:last-child').remove();
  });
}

function añadirSelectDesarrolladora() {
  $('.añadirDesarrolladora').on('click', function() {   
    let totalDeSelectsPlataformas = document.querySelectorAll('.insert-desarrolladoras');
    
    if (totalDeSelectsPlataformas.length < 5) {   
      $('.col-anyadir-desarrolladoras').append('<select class="insert-desarrolladoras">' +
      '</select>');
      obtenerDesarrolladorasSelect();
    }
  });
}

function añadirSelectDesarrolladoraActualizacion(desarrolladoras) {
  $('.añadirDesarrolladoraActualizacion').on('click', function() { 
    let totalDeSelectDesarrolladorasActualizacion = document.querySelectorAll('.update-desarrolladoras');
    if (totalDeSelectDesarrolladorasActualizacion.length < 5) {     
    $('.col-actualizar-desarrolladoras').append('<select class="update-desarrolladoras nuevo-select-desarrolladoras">' +
    '</select>');
    obtenerDesarrolladorasDelUltimoSelect();
    obtenerDesarrolladorasSelectEspecial(desarrolladoras);
    }
  });
}

function quitarSelectDesarrolladora() {
  $('.quitarDesarrolladora').on('click', function() {
    $('.col-anyadir-desarrolladoras select:last-child').remove();
  })
}

function quitarSelectDesarrolladoraActualizacion() {
  $('.quitarDesarrolladoraActualizacion').on('click', function() {
    let idDesarrolladora = $('.col-actualizar-desarrolladoras select:last-child option:checked').val();
    $('.col-actualizar-desarrolladoras select:last-child').remove();
    pilaActualizacionDesarrolladoras.pop();
  })
}

function obtenerPlataformasSelect() {
  $.ajax({
    url: "../../Modelo/obtenerPlataformas.php",
    type: "GET",
    dataType: 'json',
    success: function (listaPlataformas) {
      $('.insert-plataformas').html('<option>Selecciona plataforma...</option>');
      
      for (const plataforma of listaPlataformas) {
        let option = $('<option></option>')
            option.append(plataforma.nombre);
            option.prop('value', plataforma.id)
        let option2 = $('<option></option>')
            option2.append(plataforma.nombre);
            option2.prop('value', plataforma.id)
          $('.insert-plataformas').append(option);
          $('.update-plataformas').append(option2);
      }
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(
        errorThrown
      );
    },
  });
}

function obtenerDesarrolladorasSelect() {
  $.ajax({
    url: "../../Modelo/obtenerDesarrolladoras.php",
    type: "GET",
    dataType: 'json',
    success: function (listaDesarrolladoras) {
      $('.insert-desarrolladoras').empty();
      $('.update-desarrolladoras').empty();
      $('.insert-desarrolladoras').append('<option>Selecciona desarrolladora...</option>');
      for (const desarrolladora of listaDesarrolladoras) {
        let option = $('<option></option>')
            option.append(desarrolladora.nombre);
            option.prop('value', desarrolladora.id)
        let option2 = $('<option></option>')
            option2.append(desarrolladora.nombre);
            option2.prop('value', desarrolladora.id)
          $('.insert-desarrolladoras').append(option);
          $('.update-desarrolladoras').append(option2);
      }
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(
        errorThrown
      );
    },
  });
}

function obtenerDesarrolladorasDelUltimoSelect() {
  $.ajax({
    url: "../../Modelo/obtenerDesarrolladoras.php",
    type: "GET",
    dataType: 'json',
    success: function (listaDesarrolladoras) {
      $('.update-desarrolladoras').empty();
      $('.nuevo-select-desarrolladoras').append('<option>Selecciona desarrolladora...</option>');
      for (const desarrolladora of listaDesarrolladoras) {
        let option = $('<option></option>')
            option.append(desarrolladora.nombre);
            option.prop('value', desarrolladora.id)
          $('.nuevo-select-desarrolladoras').append(option);
      }
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(
        errorThrown
      );
    },
  });
}

function obtenerPlataformasDelUltimoSelect() {
  $.ajax({
    url: "../../Modelo/obtenerPlataformas.php",
    type: "GET",
    dataType: 'json',
    success: function (listaPlataformas) {
      $('.update-plataformas').empty();
      $('.nuevo-select-plataformas').append('<option>Selecciona plataforma...</option>');
      for (const plataforma of listaPlataformas) {
        let option = $('<option></option>')
            option.append(plataforma.nombre);
            option.prop('value', plataforma.id)
          $('.nuevo-select-plataformas').append(option);
      }
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(
        errorThrown
      );
    },
  });
}

function marcarDesarrolladora(desarrolladoras) {
  $.ajax({
    url: "../../Modelo/obtenerDesarrolladoras.php",
    type: "GET",
    dataType: 'json',
    success: function (listaDesarrolladoras) {
      $('.update-desarrolladoras').empty();
      $('.update-desarrolladoras').append('Selecciona desarrolladora...');
      for (const desarrolladora of listaDesarrolladoras) {
        let option = $('<option></option>');
            option.append(desarrolladora.nombre);
            option.prop('value', desarrolladora.id);
          $('.update-desarrolladoras').append(option);
      }

      let optionDesarrolladoras = document.querySelectorAll('.update-desarrolladoras option');
      optionDesarrolladoras.forEach(function(item) {
        if (item.textContent === desarrolladoras[0]) {
          item.setAttribute('selected', '');
        }
    });
    
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(
        errorThrown
      );
    },
  });
}

function marcarPlataforma(plataformas) {
  $.ajax({
    url: "../../Modelo/obtenerPlataformas.php",
    type: "GET",
    dataType: 'json',
    success: function (listaPlataformas) {
      $('.update-plataformas').empty();
      $('.update-plataformas').append('Selecciona plataforma...');
      for (const plataforma of listaPlataformas) {
        let option = $('<option></option>');
            option.append(plataforma.nombre);
            option.prop('value', plataforma.id);
          $('.update-plataformas').append(option);
      }

      let optionPlataformas = document.querySelectorAll('.update-plataformas option');
      optionPlataformas.forEach(function(item) {
        if (item.textContent === plataformas[0]) {
          item.setAttribute('selected', '');
        }
    });

    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(
        errorThrown
      );
    },
  });
}

function obtenerDesarrolladorasSelectEspecial(desarrolladorasDelVideojuego) {
  $.ajax({
    url: "../../Modelo/obtenerDesarrolladoras.php",
    type: "GET",
    dataType: 'json',
    success: function (listaDesarrolladoras) {

      for(a=0; a<desarrolladorasDelVideojuego.length; a++) {
        $('#selectDesarrolladoras' + a).append('<option>Selecciona desarrolladora...</option>');
        for (i=0; i<listaDesarrolladoras.length; i++) {
          if (listaDesarrolladoras[i].nombre === desarrolladorasDelVideojuego[a]) {
            let option = $('<option></option>');
            option.append(listaDesarrolladoras[i].nombre);
            option.prop('value', listaDesarrolladoras[i].id);
            option.attr('selected', 'selected');
            $('#selectDesarrolladoras' + a).append(option);
            pilaActualizacionDesarrolladoras.push({
              id: listaDesarrolladoras[i].id,
              nombre: listaDesarrolladoras[i].nombre
            })
          } else {
            let option = $('<option></option>')
            option.append(listaDesarrolladoras[i].nombre);
            option.prop('value', listaDesarrolladoras[i].id);
            $('#selectDesarrolladoras' + a).append(option);
        }
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

function obtenerPlataformasSelectEspecial(plataformasDelVideojuego) {
  $.ajax({
    url: "../../Modelo/obtenerPlataformas.php",
    type: "GET",
    dataType: 'json',
    success: function (listaPlataformas) {

      for(a=0; a<plataformasDelVideojuego.length; a++) {
        $('#selectPlataformas' + a).append('<option>Selecciona plataforma...</option>');
        for (i=0; i<listaPlataformas.length; i++) {
          if (listaPlataformas[i].nombre === plataformasDelVideojuego[a]) {
            let option = $('<option></option>');
            option.append(listaPlataformas[i].nombre);
            option.prop('value', listaPlataformas[i].id);
            option.attr('selected', 'selected');
            $('#selectPlataformas' + a).append(option);
            pilaActualizacionPlataformas.push({
              id: listaPlataformas[i].id,
              nombre: listaPlataformas[i].nombre
            })
          } else {
            let option = $('<option></option>')
            option.append(listaPlataformas[i].nombre);
            option.prop('value', listaPlataformas[i].id);
            $('#selectPlataformas' + a).append(option);
        }
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

function añadirJuego() {
  $('#insertarDatos').on('click', function() {
    let nombre = $('#insert-nombre').val();
    let precio = $('#insert-precio').val();
    let descripcion = $('#insert-descripcion').val();
    let genero = $('#insert-genero').val();
    let n_jugadores = $('#insert-jugadores').val();
    let ruta_imagen = $('#insert-imagen').val();
    let imagen = ruta_imagen.split('\\');
    let nombre_imagen = imagen[2];
    let certificaciones = $('#insert-certificaciones').val();
    let selectVacioPlataformas = false;
    let selectVacioDesarrolladoras = false;
    let fecha_lanzamiento = $('#insert-lanzamiento').val();
    let contadorDuplicidadesPlataformas = false;
    let contadorDuplicidadesDesarrolladoras = false;

    let optionPlataformas = document.querySelectorAll('.insert-plataformas option:checked');

      optionPlataformas.forEach(function(item) {
        if (item.selected) {
          if (arrayPlataformas.includes(item.value)) {
            contadorDuplicidadesPlataformas = true;
          } else {
            arrayPlataformas.push(item.value);
          }
        }
      });

    let optionDesarrolladoras = document.querySelectorAll('.insert-desarrolladoras option:checked');

      optionDesarrolladoras.forEach(function(item) {
          if (item.selected) {
            if (arrayDesarrolladoras.includes(item.value)) {
              contadorDuplicidadesDesarrolladoras = true;
            } else {
              arrayDesarrolladoras.push(item.value);
            }
          }
      });

    for (const plataforma of arrayPlataformas) {
      if (plataforma === 'Selecciona plataforma...') {
        selectVacioPlataformas = true;
      }
    }

    for (const desarrolladora of arrayDesarrolladoras) {
      if (desarrolladora === 'Selecciona desarrolladora...') {
        selectVacioDesarrolladoras = true;
      }
    }


    if (selectVacioPlataformas === true) {
      Qual.warningdb('Aviso', '¡Se han detectado campos de plataformas sin seleccionar!');
      arrayPlataformas = [];
      arrayDesarrolladoras = [];
    } else if (selectVacioDesarrolladoras === true) {
      Qual.warningdb('Aviso', '¡Se han detectado campos de desarrolladoras sin seleccionar!');
      arrayDesarrolladoras = [];
      arrayPlataformas = [];
    } else if (contadorDuplicidadesPlataformas === true) {
      Qual.warningdb('Aviso', '¡No puedes elegir dos o más plataformas iguales!');
      arrayPlataformas = [];
      arrayDesarrolladoras = [];
    } else if (contadorDuplicidadesDesarrolladoras === true) {
      Qual.warningdb('Aviso', '¡No puedes elegir dos o más desarrolladoras iguales!');
      arrayDesarrolladoras = [];
      arrayPlataformas = [];
    } else {
      
      if (nombre === "" || precio === "" || descripcion === "" || genero === ""
      || n_jugadores === "" || ruta_imagen === "" || certificaciones === "" 
      || fecha_lanzamiento === "") {
        Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');
        arrayDesarrolladoras = [];
        arrayPlataformas = []; 
      } else {
        $.ajax({
            url: "../../Modelo/insercionJuegos.php",
            type: "POST",
            data: { nombre, precio, descripcion, genero, nombre_imagen, n_jugadores, certificaciones, fecha_lanzamiento, arrayDesarrolladoras, arrayPlataformas },
            success: function (response) {
              let respuesta = response.split('/')
              if (respuesta[0] === 'true') {
                id_juego = respuesta[1];
                new Noty({
                    type: 'success',
                    layout: 'bottomRight',
                    text: '¡Juego añadido satisfactoriamente!'
                }).show();
                $('#modalInsercionJuegos').modal('hide');
                setTimeout(() => {  location.reload(); }, 1200);
              } else if (respuesta[0] === 'exist') {
                flag1 = true;
                Qual.warningdb('Vaya...!','¡Parece que el juego que intentas introducir ya existe. Introduce otro.!');
              }   
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
              console.log(
                errorThrown
              );
            },
          });
          arrayDesarrolladoras = [];
          arrayPlataformas = [];
        }
    }
  });
}

function cambiarSelectDesarrolladorasActualizacion() {
  let idAnterior;
  $('.col-actualizar-desarrolladoras select').on('focus', function() {
    idAnterior = this.value;

  }).change(function() {
    let nombre = $(this).find('option:selected').text();
    let idNuevo = this.value;
    
    let obj = pilaActualizacionDesarrolladoras.find(o => o.id === idAnterior);

    obj.id = idNuevo;

  });
};

function cambiarSelectPlataformaActualizacion() {
  let idAnterior;
  $('.col-actualizar-plataformas select').on('focus', function() {
    idAnterior = this.value;

  }).change(function() {
    let nombre = $(this).find('option:selected').text();
    let idNuevo = this.value; 

    let obj = pilaActualizacionPlataformas.find(o => o.id === idAnterior);

    obj.id = idNuevo;
  });
};