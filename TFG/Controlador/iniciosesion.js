$('#login').on('click', iniciarSesion);
$('#mail').on("keypress", pressKey);
$('#passwd').on("keypress", pressKey);

// Función que cuando el usuario presione la tecla enter llama a la funcion iniciar sesión.
function pressKey(event) {
  if (event.key === 'Enter' ) {   
    iniciarSesion()
  }
}

function iniciarSesion() {
const valores = document.querySelectorAll('input');
let correo = valores.item(0).value;
let password = valores.item(1).value;

$.ajax({
  url: "../../Modelo/iniciarSesion.php",
  type: "POST",
  data: {correo, password},
  success: function (resultado) {
        if (resultado === 'empty') {
          Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');
        } else if (resultado === 'true') {
          Qual.successdb('Verificado', '¡Has iniciado sesion correctamente!');   
          closepopup();  
        } else if (resultado === 'false') {
          Qual.errordb("¡ Oh no !", 'Usuario y/o contraseña Incorrecta!');
        }
  },
  error: function (XMLHttpRequest, textStatus, errorThrown) {
    console.log(
      errorThrown
    );
  },
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