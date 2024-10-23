$('#registrarse').on('click', registrarUsuario);

function registrarUsuario() {
const valores = document.querySelectorAll('input');
let username = valores.item(0).value;
let nombre = valores.item(1).value;
let apellidos = valores.item(2).value;
let correo = valores.item(3).value;
let password = valores.item(4).value;
let passwordRepeticion = valores.item(5).value;

$.ajax({
  url: "../../Modelo/realizarRegistro.php",
  type: "POST",
  data: {username, nombre, apellidos, correo, password, passwordRepeticion},
  success: function (resultado) {
    if (resultado === 'empty') {
      Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');
    } else if (resultado === 'true') {
      Qual.successdb('Verificado', '¡Usuario creado con exito!');
      closepopup();
    } else if (resultado === 'ambos') {
      Qual.errordb("¡ Oh no !", '¡Ya existe una cuenta con ese correo y nombre de usuario asociado!');
    } else if (resultado === 'username') {
      Qual.errordb("¡ Oh no !", '¡Ya existe una cuenta con este nombre de usuario asociado!');
    } else if (resultado === 'correo') {
      Qual.errordb("¡ Oh no !", '¡Ya existe una cuenta con este correo asociado!');
    } else if (resultado === 'correo-invalido') {
      $('#mensaje-valid').html('<i class="fa-solid fa-triangle-exclamation" style="color: #eed142;">'
      + '</i> El formato de la dirección de correo no es correcto.');
      $('#mensaje-valid').css('visibility', 'visible');
    } else if (resultado === 'password-no-coincide') {
      $('#mensaje-valid').html('<i class="fa-solid fa-triangle-exclamation" style="color: #eed142;">'
      + '</i> Las contraseñas introducidas no coinciden');
      $('#mensaje-valid').css('visibility', 'visible');
    } else if(resultado === 'password-muy-corta') {
      $('#mensaje-valid').html('<i class="fa-solid fa-triangle-exclamation" style="color: #eed142;">'
      + '</i> La contraseña debe contener al menos 8 caracteres de longitud');
      $('#mensaje-valid').css('visibility', 'visible');
    }
  },
  error: function (XMLHttpRequest, textStatus, errorThrown) {
    console.log(
      errorThrown
    );
  },
});
}

function closepopup() {
  $('#close-x').on('click', function() {
    location.href = './index.html';
  })
}