
// Función que carga los juegos favoritos del usuario en la lista de favoritos.
function cargarFavoritosMarcadosEnModal() {
    let tipoDeUsuario = datosUsuarioStorage.getItem('tipoUsu');
    if (tipoDeUsuario !== "2") {
        $('#favoritos').on('click', function() {
    $.ajax({
        url: "../../Modelo/obtenerJuegosFavoritos.php",
        type: "GET",
        success: function (juegosFavoritos) {
            $('.video-juegos-fav').empty();
            listadoFavoritos(juegosFavoritos);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
    });
}
}

// Función que lista los juegos favoritos para el modal de Lista de Favoritos.
function listadoFavoritos(lista) {
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

        if (listadoDeJuegos.length > 0) {
            $('#video-juegos-fav').empty();
            $('#no-resultados-fav').empty();

            for (const juego of listadoDeJuegos) {
                comprobarFavoritosMarcados(juego);
            }

        } else {
            $('#no-resultados-fav').html('<h5>No tienes ningun juego añadido a favoritos</h5>')
        }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
}

// Función que introduce los juegos favoritos en la lista de favoritos.
function comprobarFavoritosMarcados(juego) {
    const {id, nombre, descripcion, genero, precio, n_jugadores, img, certificaciones, lanzamiento} = juego;

    let divisor = $("<div></div>");
    divisor.addClass("col" + " cards " + "col-sm-4 col-dm-4 col-4");

    let card = $("<div></div>");
        card.addClass("card card-fav");
        card.prop("style", "width: 18rem;");

    let divfavoritos = $("<div></div>");
        $(divfavoritos).addClass('div-favoritos');
        $(divfavoritos).html('<i class="fa-solid fa-heart fa-2x heartclass' + id + '" marcado="true" style="color: #ff0000;" id="heart' + id +'"></i>');
        $(divfavoritos).prop('id', 'fav'+id);

    let span = $("<span></span>");
    let span2 = $("<span></span>");
    let span3 = $("<span></span>");
    let span4 = $("<span></span>");

    let title = $('<h5></h5>');
        $(title).prop('class', "card-title");
        $(title).html(nombre);

    let cardbody = $("<div></div>");
        $(cardbody).addClass("card-body");

    let divdescripcion = $('<p></p>');
        $(divdescripcion).addClass("card-text");
        $(divdescripcion).html(descripcion);

    let divjugadores = $("<div></div>");
        $(divjugadores).addClass("texto-jugadores");
        $(divjugadores).html(n_jugadores);

    let divprecio = $("<div></div>");
        $(divprecio).addClass("texto-precio");
        $(divprecio).html(precio + '€');

    let divgenero = $("<div></div>");
        $(divgenero).addClass("texto-genero");
        $(divgenero).html(genero);

    let divcert = $("<div></div>");
        $(divcert).addClass("texto-certificaciones");
        $(divcert).html(certificaciones);

    let imagen = $("<img>");
        $(imagen).addClass("card-img-top card-img");
        $(imagen).prop("src", '../img/' + img);
        $(imagen).prop("id", "img-juegos-fav");
        $(imagen).prop("alt", "Card image cap");

    let divlanzamiento = $('<p></p>');
        $(divlanzamiento).addClass("texto-lanzamiento");
        $(divlanzamiento).html('<strong>Lanzamiento: </strong>' + lanzamiento);

    let Verdetalles = $("<button>");
        $(Verdetalles).prop("type", "button");
        $(Verdetalles).prop('id',"detalles"+id);
        $(Verdetalles).prop('class',"mt-5 mx-5 ver-detalles-fav");
        $(Verdetalles).prop("textContent", 'Ver detalles');

        $(divisor).append(card);
        $(card).append(imagen);
        $(card).append(cardbody);
        $(cardbody).append(span);
        $(cardbody).append(span2);
        $(cardbody).append(span3);
        $(cardbody).append(span4);
        $(cardbody).append(divfavoritos);
        $(cardbody).append(title);
        $(cardbody).append(divdescripcion);
        $(cardbody).append(divlanzamiento);
        $(cardbody).append(Verdetalles);
        
        $(".video-juegos-fav").append(divisor);
        añadirFavoritos(id);
        cerrarModal(divisor);
        abrirDetalles(id, nombre, precio, genero, n_jugadores, img, certificaciones, descripcion, lanzamiento);
}