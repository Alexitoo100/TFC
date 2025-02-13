$(document).ready(peticionListadoFavoritos);

// Funcion que obtiene los juegos que estan marcados en favoritos por el usuario
function peticionListadoFavoritos() {
    $.ajax({
        url: "../../Modelo/obtenerJuegosFavoritos.php",
        type: "GET",
        success: function (juegosFavoritos) {
            listadoFavoritosMarcar(juegosFavoritos);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
}

// Funcion que marca los juegos favoritos del usuario de la página principal.
function listadoFavoritosMarcar(lista) {
  let tipoDeUsuario = datosUsuarioStorage.getItem('tipoUsu');
    if (tipoDeUsuario !== "2") {
    $.ajax({
        url: "../../Modelo/seleccionFavoritos.php",
        type: "GET",
        data: { lista },
        success: function (ListadojuegosFav) {
            let array = JSON.parse(ListadojuegosFav);

            const listadoDeJuegos = Object.values(
            array.reduce((temp, obj) => {
            if (!temp[obj.id]) {
                temp[obj.id] = obj;
            } else {
                temp[obj.id].plataforma += `, ${obj.plataforma}`;
                temp[obj.id].desarrolladora += `, ${obj.desarrolladora}`;
            }
          return temp;
        }, {})
      );

            for (const juego of listadoDeJuegos) {
                $('#heart'+juego.id).attr('class', 'fa-solid fa-heart fa-2x heartclass' + juego.id);
                $('#heart'+juego.id).attr('id', 'heart' + juego.id);
                $('#heart'+juego.id).attr('marcado', "true");
                $('#heart'+juego.id).attr('style', 'color: #ff0000;');
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