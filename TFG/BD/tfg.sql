-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-12-2023 a las 13:24:36
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tfg`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `desarrolladoras`
--

CREATE TABLE `desarrolladoras` (
  `id` varchar(32) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `f_fundacion` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `desarrolladoras`
--

INSERT INTO `desarrolladoras` (`id`, `nombre`, `f_fundacion`) VALUES
('17b7fa05-cef3-41eb-a5ee-d677242f', 'Electronic Arts', '1982-05-27'),
('190a0c94-f1ba-11ed-a05b-0242ac12', 'Nintendo', '1889-09-23'),
('2b090cb0-3d7f-42f7-a3b0-ef7f619e', 'Digital Extremes', '1993-05-19'),
('3d8bf8a6-d639-4674-8c63-204d5775', 'Klei Entertainment', '2005-07-03'),
('472a3035-8b21-4348-b9a2-d9ab00a5', 'Merge Games', '2010-01-01'),
('545cb680-e9e4-4659-8fed-d2f82b5a', 'Warner Bros', '2004-01-14'),
('6395d859-d216-4be5-91e7-89038c5a', 'Hinterland Studio', '2012-10-12'),
('765d03c9-9c43-4894-b0ea-5a643242', 'Unknown Worlds', '2001-10-12'),
('76945837-a8c9-4bf4-a41a-77fa6ad8', '505 Games', '2006-08-02'),
('7ded0f03-0943-4d58-8e5b-98961ab6', 'Rocksteady', '2004-11-08'),
('a2b5c258-e751-11ed-a05b-0242ac12', 'Bungie Studios', '1991-05-17'),
('b11dee45-1a18-4c62-9685-bd6fcdca', 'Naughty Dog', '1984-09-27'),
('c505eec3-5fad-48ab-8103-01d01d94', 'Capcom', '1979-05-30'),
('ca3a6d35-eb62-44c6-856a-49c761e2', 'Behaviour Interactive', '1992-09-21'),
('d9588f06-fd62-4cec-b5f1-16c372c9', 'DICE', '1992-05-26'),
('e65aa6b9-d614-4976-b15f-ff4a4574', 'Rockstar Games', '1998-12-14'),
('ecb8d0a2-e751-11ed-a05b-0242ac12', 'Kaos Studios', '2006-03-15'),
('fa403a82-f60e-11ed-b67e-0242ac12', 'Re-Logic', '2011-01-18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foro`
--

CREATE TABLE `foro` (
  `id` varchar(32) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `n_integrantes` int(10) NOT NULL,
  `propietario` varchar(50) NOT NULL,
  `tematica` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `foro`
--

INSERT INTO `foro` (`id`, `nombre`, `n_integrantes`, `propietario`, `tematica`) VALUES
('668732f3-8883-45ef-ab63-08abe03d', 'Para charlar', 1, 'Anonimo', 'Charla'),
('9740b747-3ace-4665-999a-ea9816fe', 'Historias y eventos', 2, 'Administradores', 'Experiencias'),
('a1bef6da-dcee-476d-9758-ea809541', 'Juegos de la antigua escuela', 2, 'Fred', 'Old school'),
('a4ff89cc-f0e6-4756-bfe6-758e4188', 'Juegos de Guerra', 33, 'Valverdiano', 'Guerra');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--

CREATE TABLE `juegos` (
  `id` varchar(32) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `precio` float NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `genero` varchar(50) NOT NULL,
  `n_jugadores` int(10) NOT NULL,
  `img` varchar(100) NOT NULL,
  `certificaciones` varchar(120) NOT NULL,
  `f_lanzamiento` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `juegos`
--

INSERT INTO `juegos` (`id`, `nombre`, `precio`, `descripcion`, `genero`, `n_jugadores`, `img`, `certificaciones`, `f_lanzamiento`) VALUES
('24a5945f-695d-4827-b2d3-71fc6a4c', 'Batman: Arkham City', 9.99, 'La continuación del aclamado Arkham Asylum para PS3 lleva de nuevo a Batman a combatir contra sus peores enemigos, esta vez en medio de un distrito de Gotham convertido en el asilo Arkham.', 'Accion', 1, 'ArkhamCity.webp', 'PEGI 18', '2011-10-21'),
('2ca2e0f6-c8a1-4b17-b582-8cf2d0cc', 'The Long Dark', 15, 'The Long Dark es un juego de supervivencia en primera persona, que nos ofrece la posibilidad de vivir una aventura como Will Mackenzie después de haber sufrido un aparatoso accidente en mitad de la nada. Este juego te pondrá a prueba imponiendo diferentes desafíos que tendrás que afrontar a medida que vayas avanzando.', 'Supervivencia en mundo abierto', 1, 'thelongdark.jpg', 'PEGI 16', '2017-08-01'),
('3e935101-1a34-454e-ab61-cf928df4', 'Legend of Zelda: Tears of The Kingdom', 59.99, 'The Legend of Zelda: Breath of the Wild 2 es la segunda parte de Breath of the Wild, el título que revolucionó los mundos abiertos y el concepto de la saga Zelda en Nintendo Switch y Wii U. Desarrollada por Nintendo y producida y dirigida por Eiji Aonuma.', 'Aventura', 1, 'The-Legend-of-Zelda-Tears-of-the-Kingdom.jpg', 'PEGI 12', '2023-05-12'),
('54d41d42-6960-4cef-9e6a-6c6a7d80', 'The Last Of Us: Parte 2', 30, 'Un mundo postapocaliptico, lleno de zombies con ganas de comer sesos. Recorre una aventura con Ellie y Joel y desentraña que se encuentra en la segunda parte de esta historia.', 'Horror', 1, 'thelastofus.jpg', 'PEGI 18', '2020-06-19'),
('60718fd1-8a44-4661-9068-a3916944', 'Destiny', 28.99, 'Destiny es la nueva propuesta de Bungie Software y Activision para PlayStation 4.\nSe trata de un título de acción y aventura en el que el jugador debe crear su propio personaje y evolucionarlo para lograr salvar la tierra.', 'Disparos', 1, 'Destiny_2_.jpg', 'PEGI 16', '2017-09-06'),
('6fedb2df-a7f3-4e90-98af-fddd2fc1', 'Mario kart', 49.99, 'Disfruta con Mario y sus amigos jugando carreras en diferentes mapas, con diferentes personajes y diferentes circuitos y para colmo podrás jugar multijugador. Un juego hecho para los fans de Mario.', 'Carreras', 1, '71C9pOGlKtL._AC_UF894,1000_QL80_.jpg', 'PEGI 3', '2017-04-28'),
('730297c2-3601-440f-9773-37bfbaac', 'Batman: Arkham Asylum', 7.99, 'Basado en el universo de Batman, experimenta una aventura única, oscura y atmosférica que te llevará a lo más profundo del Asilo Arkham. Muévete en las sombras, provocando el miedo entre tus enemigos y enfréntate al Joker y a los villanos de Gotham.', 'Accion', 1, 'ArkhamAsylum.webp', 'PEGI 18', '2009-08-25'),
('77e8233a-97eb-475f-a667-2bfb138c', 'Resident Evil 2: Remake', 16.99, 'En Resident Evil 2 regresa la acción clásica, la exploración llena de tensión y el estilo de resolución de puzles que definieron la saga Resident Evil. Los usuarios se unen al oficial de policía novato Leon S. Kennedy y a la estudiante universitaria Clair', 'Horror', 1, 'residentevil2.jpg', 'PEGI 18', '2019-02-25'),
('82b51ae8-c0ec-40d1-9fda-ae2c24d0', 'Pokemon Arceus', 35.95, 'Leyendas Pokémon: Arceus es la nueva entrega de Pokémon para Nintendo Switch desarrollada por GAME FREAK para Nintendo Switch. Este videojuego de rol, que se desarrollará en Sinnoh, nos llevará a una época pasada de inspiración feudal.', 'Aventura', 1, 'pokemon.jpg', 'PEGI 7', '2022-01-28'),
('82d1ba56-e6ba-11ed-a05b-0242ac12', 'Homefront', 14, 'Homefront es un videojuego de disparos en primera persona desarrollado por Kaos Studios y publicado por THQ, el jugador interpreta el rol de un miembro de un movimiento de resistencia que lucha contra la ocupación militar coreana de los Estados Unidos.', 'Accion', 4, 'homefront_u95f.jpg', 'PEGI 18, Mature 17+', '2011-03-15'),
('8878d1b6-d020-423f-b305-c31d9323', 'Battlefield 4', 16.99, 'EA Games y DICE publican una nueva entrega de Battlefield para PS4. Esta ocasión llevará al jugador a diferentes enclaves en Oriente. El nuevo Frostbite 3 promete un nivel gráfico y destructivo a gran escala pensando también en ver la guerra con gran realismo. Con el denominado \"Levolution\" la partida irá cambiando con la forma de avanzar de cada jugador. El en multijugador Battlefield 4 aportará un toque diferente con la incorporación de las tabletas y nuevas figuras jugables.', 'Guerra', 64, 'battlefield-4-cover-i14536.jpg', 'PEGI 18', '2013-10-29'),
('8d498297-2a85-4606-87c2-c1007a12', 'Sims 4', 10.98, 'Los sims 4 es un juego para divertirte, en donde encontraras un montonazo de cosas que hacer y que podrás compartir con todos tus amigos. ¡únete ya a la comunidad sim!', 'Simulador de vida', 1, 'sims.jpg', 'PEGI 12', '2014-09-02'),
('9f169de5-f5a7-48ca-a73b-c52f3a9d', 'Dead By Daylight', 20, 'Dead By Daylight es un juego en el cual se trata de un asesino y de 4 supervivientes, los supervivientes tendrán que reparar motores para escapar mientras que el asesino darles caza.', 'Horror', 1, 'Dead_by_Daylight_Steam_header.jpg', 'ESRB', '2016-06-14'),
('a75b8626-45b1-4cbc-bb27-fdc386e4', 'Smalland: Survive the wilds', 16.99, 'De repente has encogido y te encuentras en la hierba que solías pisar al caminar, que te ha sucedido te preguntaras... Bueno, ¡pues tendrás que averiguarlo moviéndote por las hierbas!.', 'Supervivencia', 1, 'Smalland-Survive-the-Wilds-pc-free-download.jpg', '-', '2023-03-29'),
('c6b90335-6a96-42cd-b85b-89c8e14a', 'Star Wars: Jedi Survivor', 79.99, 'La historia de Cal Kestis continúa en Star Wars Jedi: Survivor, un juego de acción y aventuras en tercera persona desarrollado por Respawn Entertainment en colaboración con Lucasfilm Games.', 'Lucha', 1, 'starwars.jpg', 'PEGI 16', '2023-04-28'),
('cabc6a2a-e6b8-11ed-a05b-0242ac12', 'Halo Reach', 25.99, 'Halo: Reach is a 2010 first-person shooter video game developed by Bungie and published by Microsoft Game Studios, originally for the Xbox 360. The fifth installment in the Halo series and a direct prequel to Halo.', 'Disparos', 2, 'caja-reach-halo_u3my.png', 'PEGI 18, MATURE-17', '2010-09-14'),
('cb95421a-834b-4345-8e3f-0225d1db', 'Lego Batman', 8.99, '¡Embárcate en una aventura con los legos de Batman, construyendo y rompiendo bloques de lego a mogollón mientras luchas contra el crimen bajo la mascara del caballero oscuro!', 'Construccion', 1, 'lego_batman.jpg', 'ESRB', '2008-09-23'),
('cfe1d63e-8dab-4e22-8e3a-51aa10b6', 'Grand Theft Auto V', 39.99, 'Grand theft auto es un juego de disparos, guerras de bandas, delincuencia y un mundo abierto, donde poder explorar cuanto quieras, sin ningún tipo de limite.', 'Disparos', 1, 'gta.jpg', 'PEGI 18', '2013-09-17'),
('df48d43c-2637-4a99-8c01-9df20ec1', 'Assetto Corsa', 36.95, '¡Un tremendo juego de carreras, para echar fuego por el tubo de escape mejor en el assetto corsa, haciendo derrapes y chuleandote de tus colegas con tu coche y tu manejo al volante!', 'Carreras', 1, 'assetto.webp', 'PEGI 3', '2016-08-26'),
('e7be8703-4b7f-4630-b0e1-90b299bd', 'Subnautica', 23, 'Sufres un accidente espacial y terminas en un planeta lleno completamente de agua, tu misión será sobrevivir hasta que lleguen los refuerzos, o al menos intentarlo. Podrás construir tu propia base, conocer diferentes animales marinos tanto pacíficos como agresivos, y sobretodo conocer todos los secretos que alberga. Sumérgete en esta gran aventura.', 'Mundo abierto', 1, 'boxart_2247.jpg', 'PEGI 12', '2018-01-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos_desarrolladoras`
--

CREATE TABLE `juegos_desarrolladoras` (
  `id` varchar(32) NOT NULL,
  `id_juegos` varchar(32) NOT NULL,
  `id_desarrolladoras` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `juegos_desarrolladoras`
--

INSERT INTO `juegos_desarrolladoras` (`id`, `id_juegos`, `id_desarrolladoras`) VALUES
('1e0eff14-e752-11ed-a05b-0242ac12', 'cabc6a2a-e6b8-11ed-a05b-0242ac12', 'a2b5c258-e751-11ed-a05b-0242ac12'),
('1f54f105-99bb-4eb3-a882-30ca2d08', '3e935101-1a34-454e-ab61-cf928df4', '190a0c94-f1ba-11ed-a05b-0242ac12'),
('25eaef5d-dd7a-47c1-8670-9596c036', '60718fd1-8a44-4661-9068-a3916944', 'a2b5c258-e751-11ed-a05b-0242ac12'),
('30fd66c6-7a6b-46f1-a3d6-6c4c6a0f', '82d1ba56-e6ba-11ed-a05b-0242ac12', 'ecb8d0a2-e751-11ed-a05b-0242ac12'),
('38b2ab10-d6e5-4617-bad2-0c54cb87', 'c6b90335-6a96-42cd-b85b-89c8e14a', '17b7fa05-cef3-41eb-a5ee-d677242f'),
('49058005-842a-46ec-9b14-aaabbf1f', '9f169de5-f5a7-48ca-a73b-c52f3a9d', 'ca3a6d35-eb62-44c6-856a-49c761e2'),
('665c763a-b67a-46a8-bc03-821f0f32', 'cb95421a-834b-4345-8e3f-0225d1db', '545cb680-e9e4-4659-8fed-d2f82b5a'),
('9873e3c5-e198-42f0-bb3d-90f84aa1', '54d41d42-6960-4cef-9e6a-6c6a7d80', 'b11dee45-1a18-4c62-9685-bd6fcdca'),
('9b514672-5d86-4f05-a089-101ade70', '8878d1b6-d020-423f-b305-c31d9323', '17b7fa05-cef3-41eb-a5ee-d677242f'),
('a9b8be91-f499-4761-9e6a-a837201e', '8d498297-2a85-4606-87c2-c1007a12', '17b7fa05-cef3-41eb-a5ee-d677242f'),
('b00c4c4e-6b4c-4848-bac0-60599d9b', '77e8233a-97eb-475f-a667-2bfb138c', 'c505eec3-5fad-48ab-8103-01d01d94'),
('bb36e70f-c188-484a-833f-c7fe9139', '82b51ae8-c0ec-40d1-9fda-ae2c24d0', '190a0c94-f1ba-11ed-a05b-0242ac12'),
('be50cf7d-d033-437d-85c2-8d80190e', '730297c2-3601-440f-9773-37bfbaac', '7ded0f03-0943-4d58-8e5b-98961ab6'),
('c94b63ae-55dc-4802-9372-7745d78e', '2ca2e0f6-c8a1-4b17-b582-8cf2d0cc', '6395d859-d216-4be5-91e7-89038c5a'),
('c99ff30a-aa34-4119-af75-07e49247', 'df48d43c-2637-4a99-8c01-9df20ec1', '76945837-a8c9-4bf4-a41a-77fa6ad8'),
('ccf46fe8-f108-4d34-a95b-90dcb14d', 'cfe1d63e-8dab-4e22-8e3a-51aa10b6', 'e65aa6b9-d614-4976-b15f-ff4a4574'),
('d5b65aee-f612-11ed-b67e-0242ac12', '9f169de5-f5a7-48ca-a73b-c52f3a9d', '76945837-a8c9-4bf4-a41a-77fa6ad8'),
('dcfce16f-db60-4a93-b39a-bbfcf166', 'a75b8626-45b1-4cbc-bb27-fdc386e4', '472a3035-8b21-4348-b9a2-d9ab00a5'),
('de8d194d-bc4f-4c61-949f-42eee243', '24a5945f-695d-4827-b2d3-71fc6a4c', '7ded0f03-0943-4d58-8e5b-98961ab6'),
('de8e5cac-2036-45ac-988d-5c5fc11f', 'e7be8703-4b7f-4630-b0e1-90b299bd', '765d03c9-9c43-4894-b0ea-5a643242'),
('fa85fc9d-c590-4226-865b-3260f1f5', '8878d1b6-d020-423f-b305-c31d9323', 'd9588f06-fd62-4cec-b5f1-16c372c9'),
('fdb93164-13d0-4b1a-972b-08cb396d', '6fedb2df-a7f3-4e90-98af-fddd2fc1', '190a0c94-f1ba-11ed-a05b-0242ac12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos_favoritos`
--

CREATE TABLE `juegos_favoritos` (
  `id` varchar(32) NOT NULL,
  `id_usuario` varchar(32) NOT NULL,
  `id_juego` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `juegos_favoritos`
--

INSERT INTO `juegos_favoritos` (`id`, `id_usuario`, `id_juego`) VALUES
('0633ffa0-d777-43dc-9f50-8502dc2b', '4d45f45a-4dd1-449f-b55d-3b5ecd6d', '3e935101-1a34-454e-ab61-cf928df4'),
('3d88d6db-b47e-483a-b5bf-9e358614', '4d45f45a-4dd1-449f-b55d-3b5ecd6d', '730297c2-3601-440f-9773-37bfbaac'),
('4dee1be0-50b7-4fcc-9a42-404800bf', '4d45f45a-4dd1-449f-b55d-3b5ecd6d', '60718fd1-8a44-4661-9068-a3916944'),
('5b61947f-b5e3-4621-b003-e63870f8', '2a6c7760-abc8-4226-bc5d-5ec91fa2', '24a5945f-695d-4827-b2d3-71fc6a4c'),
('799bc552-2e30-4e5e-8665-2f348fd6', 'a399598b-5cc2-4468-adec-2e73d8e0', '60718fd1-8a44-4661-9068-a3916944'),
('8aae363d-a516-44d1-851c-441277fc', '4d45f45a-4dd1-449f-b55d-3b5ecd6d', '82b51ae8-c0ec-40d1-9fda-ae2c24d0'),
('9ab5110e-a81b-4c21-a010-32625b50', '4d45f45a-4dd1-449f-b55d-3b5ecd6d', '24a5945f-695d-4827-b2d3-71fc6a4c'),
('b8225d11-783f-405e-8247-bdbe940b', '83cf26c4-c549-40fd-8b26-639cdd08', '60718fd1-8a44-4661-9068-a3916944'),
('c2608da9-753c-4999-80bd-30afe8b9', '4d45f45a-4dd1-449f-b55d-3b5ecd6d', '54d41d42-6960-4cef-9e6a-6c6a7d80'),
('eebcf2e3-866f-4c9f-91ec-a5269914', '4d45f45a-4dd1-449f-b55d-3b5ecd6d', '2ca2e0f6-c8a1-4b17-b582-8cf2d0cc'),
('f46e1d6d-d09a-4290-a090-a80d9055', '2a6c7760-abc8-4226-bc5d-5ec91fa2', '60718fd1-8a44-4661-9068-a3916944'),
('fd318bbf-1438-4087-a6eb-2ddc2399', '2a6c7760-abc8-4226-bc5d-5ec91fa2', '8d498297-2a85-4606-87c2-c1007a12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos_plataformas`
--

CREATE TABLE `juegos_plataformas` (
  `id` varchar(32) NOT NULL,
  `id_juegos` varchar(32) NOT NULL,
  `id_plataformas` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `juegos_plataformas`
--

INSERT INTO `juegos_plataformas` (`id`, `id_juegos`, `id_plataformas`) VALUES
('09103157-274a-492b-bc2c-2271c9ce', '82b51ae8-c0ec-40d1-9fda-ae2c24d0', '3d140e79-dbfb-45f9-bca7-d5f1fe58'),
('18120666-504f-45a7-be71-ef6b9bc6', 'cfe1d63e-8dab-4e22-8e3a-51aa10b6', '2eeb5b2c-7417-46cf-97a1-817db8c2'),
('2f9e97e0-bfda-4f1d-8340-8e0ff1ad', 'e7be8703-4b7f-4630-b0e1-90b299bd', '72bd77a8-8aef-47b9-9eea-4f50f1ee'),
('372598c2-74e4-4331-8d07-0fc592f3', '24a5945f-695d-4827-b2d3-71fc6a4c', '5257f960-e74d-11ed-a05b-0242ac12'),
('3a916b58-d22d-491b-a8c6-82701996', '77e8233a-97eb-475f-a667-2bfb138c', '2eeb5b2c-7417-46cf-97a1-817db8c2'),
('5a2c2754-5a2a-4bc7-920f-7722bdcd', '8878d1b6-d020-423f-b305-c31d9323', '72bd77a8-8aef-47b9-9eea-4f50f1ee'),
('6173db72-ccfe-4750-85c9-85235a4b', '730297c2-3601-440f-9773-37bfbaac', '5257f960-e74d-11ed-a05b-0242ac12'),
('6832b2ff-122f-42ff-97dd-0c73821b', '82d1ba56-e6ba-11ed-a05b-0242ac12', '5257f960-e74d-11ed-a05b-0242ac12'),
('6d9d6895-0160-484e-9ac6-5d76ffd5', 'df48d43c-2637-4a99-8c01-9df20ec1', '2eeb5b2c-7417-46cf-97a1-817db8c2'),
('77c1d875-c3d9-41d4-8295-09c33303', '2ca2e0f6-c8a1-4b17-b582-8cf2d0cc', '72bd77a8-8aef-47b9-9eea-4f50f1ee'),
('825f061e-68bb-49a6-aed8-8bd1b58d', 'e7be8703-4b7f-4630-b0e1-90b299bd', '5257f960-e74d-11ed-a05b-0242ac12'),
('83cbbe92-c6a4-4de3-8146-86b8894c', '60718fd1-8a44-4661-9068-a3916944', '2eeb5b2c-7417-46cf-97a1-817db8c2'),
('97a69c00-a232-4419-a060-02e15e15', '9f169de5-f5a7-48ca-a73b-c52f3a9d', '72bd77a8-8aef-47b9-9eea-4f50f1ee'),
('9b2cfe3b-a171-475e-8b16-a9f2626e', '730297c2-3601-440f-9773-37bfbaac', '2eeb5b2c-7417-46cf-97a1-817db8c2'),
('9dfd50e0-f6a2-45f0-a2f2-787d3264', '2ca2e0f6-c8a1-4b17-b582-8cf2d0cc', '5257f960-e74d-11ed-a05b-0242ac12'),
('a08e7462-c45b-4109-a638-055d1bac', '6fedb2df-a7f3-4e90-98af-fddd2fc1', '3d140e79-dbfb-45f9-bca7-d5f1fe58'),
('a2dd8d2f-29ad-4eef-bbd9-e5752123', 'cb95421a-834b-4345-8e3f-0225d1db', '5257f960-e74d-11ed-a05b-0242ac12'),
('b2269f4b-655a-4936-8c63-1d789735', '3e935101-1a34-454e-ab61-cf928df4', '3d140e79-dbfb-45f9-bca7-d5f1fe58'),
('bed0b39d-3120-4a72-b116-a295fa13', '8878d1b6-d020-423f-b305-c31d9323', '2eeb5b2c-7417-46cf-97a1-817db8c2'),
('c1213377-7c64-47a0-9340-c0196999', '54d41d42-6960-4cef-9e6a-6c6a7d80', '2eeb5b2c-7417-46cf-97a1-817db8c2'),
('c148c69a-3ad4-45e0-9aba-e5682a19', '8d498297-2a85-4606-87c2-c1007a12', '72bd77a8-8aef-47b9-9eea-4f50f1ee'),
('d21c170a-b2d4-4685-8e01-8bb0aec5', '730297c2-3601-440f-9773-37bfbaac', '72bd77a8-8aef-47b9-9eea-4f50f1ee'),
('d40b1039-a93f-4206-a2a4-03a456d3', 'c6b90335-6a96-42cd-b85b-89c8e14a', '5257f960-e74d-11ed-a05b-0242ac12'),
('d75e19a0-e74d-11ed-a05b-0242ac12', 'cabc6a2a-e6b8-11ed-a05b-0242ac12', '5257f960-e74d-11ed-a05b-0242ac12'),
('e3f4bef3-2c4c-4df1-9976-8d1585b0', '2ca2e0f6-c8a1-4b17-b582-8cf2d0cc', '2eeb5b2c-7417-46cf-97a1-817db8c2'),
('e543f23f-402e-4550-8764-7c45a4cd', 'e7be8703-4b7f-4630-b0e1-90b299bd', '2eeb5b2c-7417-46cf-97a1-817db8c2'),
('ef172136-2d23-483c-b44f-19735217', 'a75b8626-45b1-4cbc-bb27-fdc386e4', '72bd77a8-8aef-47b9-9eea-4f50f1ee'),
('ef23112d-94c9-41ab-8f75-46ba45b0', '24a5945f-695d-4827-b2d3-71fc6a4c', '72bd77a8-8aef-47b9-9eea-4f50f1ee'),
('f3a3241c-d56a-4201-a0cf-e03e1332', '8878d1b6-d020-423f-b305-c31d9323', '5257f960-e74d-11ed-a05b-0242ac12'),
('f96e70ae-9999-4b94-9156-696944d8', '24a5945f-695d-4827-b2d3-71fc6a4c', '2eeb5b2c-7417-46cf-97a1-817db8c2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plataformas`
--

CREATE TABLE `plataformas` (
  `id` varchar(32) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `plataformas`
--

INSERT INTO `plataformas` (`id`, `nombre`) VALUES
('2eeb5b2c-7417-46cf-97a1-817db8c2', ' PlayStation'),
('3d140e79-dbfb-45f9-bca7-d5f1fe58', 'Nintendo Switch'),
('5257f960-e74d-11ed-a05b-0242ac12', 'XBOX'),
('72bd77a8-8aef-47b9-9eea-4f50f1ee', 'PC');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

CREATE TABLE `post` (
  `id` varchar(32) NOT NULL,
  `f_publicacion` varchar(19) NOT NULL,
  `contenido` varchar(250) NOT NULL,
  `id_usuario` varchar(32) NOT NULL,
  `id_foro` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `post`
--

INSERT INTO `post` (`id`, `f_publicacion`, `contenido`, `id_usuario`, `id_foro`) VALUES
('44e5d0af-f3c7-4317-a61e-70c0eec3', '2023-12-03 02:43:39', '¡Hola muy buenas a todos y bienvenidos al foro para charlar!', '2a6c7760-abc8-4226-bc5d-5ec91fa2', '668732f3-8883-45ef-ab63-08abe03d'),
('4760ef87-561e-4146-9e00-59eb35b7', '2023-08-25 03:44:14', 'awddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddawdddddddddddddddddddddddddddddddd', '2a6c7760-abc8-4226-bc5d-5ec91fa2', 'a4ff89cc-f0e6-4756-bfe6-758e4188'),
('61747424-4b57-4239-8c50-3707b1b5', '2023-08-25 03:44:08', 'awdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', '2a6c7760-abc8-4226-bc5d-5ec91fa2', 'a4ff89cc-f0e6-4756-bfe6-758e4188'),
('91d43322-2c73-48ce-b413-eaeea355', '2023-11-29 08:49:50', 'awda', '2a6c7760-abc8-4226-bc5d-5ec91fa2', 'a4ff89cc-f0e6-4756-bfe6-758e4188'),
('96230f1e-e9b3-4b70-9ac6-36dcba63', '2023-08-25 03:46:02', 'awdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', '2a6c7760-abc8-4226-bc5d-5ec91fa2', 'a4ff89cc-f0e6-4756-bfe6-758e4188'),
('a19160dd-bb18-41f9-af23-a49710bb', '2023-11-27 12:39:47', '¡Hola muy buenas a todos y bienvenidos!', '2a6c7760-abc8-4226-bc5d-5ec91fa2', '9740b747-3ace-4665-999a-ea9816fe'),
('f5cc544a-41d5-4745-9364-87550402', '2023-11-27 12:42:04', '¡Bienvenidos al foro de juegos old school!', '2a6c7760-abc8-4226-bc5d-5ec91fa2', 'a1bef6da-dcee-476d-9758-ea809541'),
('fcebe522-280e-4bd8-9074-a592d9fe', '2023-05-30 02:02:44', 'awdawd', '2a6c7760-abc8-4226-bc5d-5ec91fa2', 'a4ff89cc-f0e6-4756-bfe6-758e4188');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas`
--

CREATE TABLE `respuestas` (
  `id` varchar(32) NOT NULL,
  `contenido` varchar(250) NOT NULL,
  `f_publicacion` varchar(19) NOT NULL,
  `id_post` varchar(32) NOT NULL,
  `id_usuario` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `respuestas`
--

INSERT INTO `respuestas` (`id`, `contenido`, `f_publicacion`, `id_post`, `id_usuario`) VALUES
('087ba6c7-bddd-46b0-b720-4adb8901', 'ge', '2023-11-28 07:36:16', 'f5cc544a-41d5-4745-9364-87550402', '2a6c7760-abc8-4226-bc5d-5ec91fa2'),
('1423b923-d4cd-45ec-b4f9-40852038', 'ad', '2023-11-29 08:05:41', 'fcebe522-280e-4bd8-9074-a592d9fe', '2a6c7760-abc8-4226-bc5d-5ec91fa2'),
('25637c3f-2eac-4d9a-b169-e32445a8', 'wawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', '2023-11-28 07:38:11', 'f5cc544a-41d5-4745-9364-87550402', '2a6c7760-abc8-4226-bc5d-5ec91fa2'),
('26d84b95-9e52-443f-8ec6-b56206c3', 'awda', '2023-12-09 06:04:29', 'fcebe522-280e-4bd8-9074-a592d9fe', '83cf26c4-c549-40fd-8b26-639cdd08'),
('2708b5e2-a337-4fcf-91ee-4827806a', 'Hola, muy buenas tardess', '2023-12-08 09:26:41', 'a19160dd-bb18-41f9-af23-a49710bb', '83cf26c4-c549-40fd-8b26-639cdd08'),
('2c1a64a5-a64c-41cc-9aa2-75019c68', 'Como molan los foros!', '2023-12-08 09:31:28', 'fcebe522-280e-4bd8-9074-a592d9fe', '0fc08250-e234-4968-801b-2a10ba09'),
('3567d7a2-72ce-4ab0-92a4-234e7643', 'Buenas!!!', '2023-12-08 09:30:15', 'f5cc544a-41d5-4745-9364-87550402', '08055802-a8f1-4c18-b512-e38b8e81'),
('36aaa915-9fc2-44c9-a15b-b8ff35ac', 'awdaw', '2023-11-29 09:18:45', '4760ef87-561e-4146-9e00-59eb35b7', '83cf26c4-c549-40fd-8b26-639cdd08'),
('560db2dc-3427-478e-9780-c5b5d725', 'awdad', '2023-11-29 09:18:28', '61747424-4b57-4239-8c50-3707b1b5', '83cf26c4-c549-40fd-8b26-639cdd08'),
('5c517a05-00fc-4fa3-9881-b868f2f5', 'Molaa', '2023-11-26 11:20:03', '61747424-4b57-4239-8c50-3707b1b5', '2a6c7760-abc8-4226-bc5d-5ec91fa2'),
('6255ffd1-5b0e-4826-b758-19c3dcf7', 'Probando!', '2023-12-08 09:32:44', '61747424-4b57-4239-8c50-3707b1b5', '0fc08250-e234-4968-801b-2a10ba09'),
('73fdb4bb-e141-435c-9283-d71dc554', 'awdad', '2023-12-09 05:49:55', 'fcebe522-280e-4bd8-9074-a592d9fe', '83cf26c4-c549-40fd-8b26-639cdd08'),
('781187fb-2a2a-4dca-a0cd-cda20fc3', 'awda', '2023-12-01 01:11:33', 'fcebe522-280e-4bd8-9074-a592d9fe', '2a6c7760-abc8-4226-bc5d-5ec91fa2'),
('83e8fb18-f7b5-4277-b73c-79027d6e', 'Holaaa', '2023-12-09 05:46:27', 'f5cc544a-41d5-4745-9364-87550402', '83cf26c4-c549-40fd-8b26-639cdd08'),
('8b12db6e-26cd-45f9-818e-89d2d482', 'awda', '2023-12-08 09:32:16', 'fcebe522-280e-4bd8-9074-a592d9fe', '0fc08250-e234-4968-801b-2a10ba09'),
('8bee6862-86e4-4d31-a0ef-1e273135', 'awdaw', '2023-12-01 01:10:29', 'fcebe522-280e-4bd8-9074-a592d9fe', '2a6c7760-abc8-4226-bc5d-5ec91fa2'),
('904d4276-a578-4621-b603-49fc57c2', 'Esto es una prueba de los fors', '2023-12-08 09:33:14', '91d43322-2c73-48ce-b413-eaeea355', '0fc08250-e234-4968-801b-2a10ba09'),
('9ca4d384-4e74-4d51-be78-f1b76504', 'dw', '2023-12-09 05:52:54', '61747424-4b57-4239-8c50-3707b1b5', '83cf26c4-c549-40fd-8b26-639cdd08'),
('a393d44c-7af0-45fa-b80c-4b550d6b', 'Funcionan bien, no?', '2023-12-08 09:36:35', '4760ef87-561e-4146-9e00-59eb35b7', '0fc08250-e234-4968-801b-2a10ba09'),
('bd597697-2d4a-4f7c-bad1-d2353b47', 'awd', '2023-11-29 09:18:24', '61747424-4b57-4239-8c50-3707b1b5', '83cf26c4-c549-40fd-8b26-639cdd08'),
('f3fb768b-920c-46d9-b1dc-08e34d11', 'probando!', '2023-12-08 09:34:12', 'fcebe522-280e-4bd8-9074-a592d9fe', '0fc08250-e234-4968-801b-2a10ba09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` varchar(32) NOT NULL,
  `username` varchar(50) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `apellidos` varchar(30) NOT NULL,
  `correo` varchar(60) NOT NULL,
  `password` varchar(32) NOT NULL,
  `tipo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `nombre`, `apellidos`, `correo`, `password`, `tipo`) VALUES
('08055802-a8f1-4c18-b512-e38b8e81', 'Lmnp1', 'Laura', 'Menéndez Náutaro ', 'LauMN1@hotmail.com', '25d55ad283aa400af464c76d713c07ad', 0),
('0fc08250-e234-4968-801b-2a10ba09', 'Richielpicaro', 'awda', 'awdad', 'admin@admin.com', '25d55ad283aa400af464c76d713c07ad', 0),
('1b3ca265-2144-4eb7-aae1-a6026f5f', 'Mariagamer12', 'Maria', 'Pérez Ruíz', 'marialopez@gmail.com', '7ef929d15647f0b12d04bf651ef181e0', 0),
('2a6c7760-abc8-4226-bc5d-5ec91fa2', 'Admin', 'admin', 'admin', 'admin@admin.es', '5136b96817648b5b81008f6a984284a7', 1),
('2e4c33cc-ecd4-4f98-80b9-4bc6bbba', 'Joseelcrack2000', 'Alex', 'Gimeno Zorian', 'josegz01@gmail.es', '34165cadd4291690b84159cf084d3adc', 0),
('38b78ad6-1875-4e59-8c99-329ce8ec', 'SniperZZZ10', 'Alfonso', 'Romero Ruiz', 'alfsniper@gmail.com', '9b1a1c3c181065008e136fa3f735ff43', 0),
('4743eaa0-1521-4677-aafb-bfe7041b', 'pepe', 'pepe', 'pepe', 'pepe@pepe.es', '71a0dd280ff5c275571bf09701b597e9', 0),
('4d45f45a-4dd1-449f-b55d-3b5ecd6d', 'joselillo', 'Prueba', 'prueba', 'joselillo@joselo.es', '0391393dc1fffa3708b60efc4b3cea92', 1),
('50aa79bd-1b52-4113-a60e-66cc9dab', 'Luisito04', 'Luis', 'Romero', 'luis@luis.com', '1926c576134561622772ee693296149c', 0),
('83cf26c4-c549-40fd-8b26-639cdd08', 'Pedrogamer12', 'Pedro', 'López Martinez', 'pedrolm1@gmail.com', 'e654fbb9504b6b68718c6fb56ac3f455', 0),
('8cf0cd85-ab70-4bde-925d-41a1b677', 'Alberto03', 'Alberto', 'Soler Martinez', 'albertosm033@gmail.com', 'db4e6057fa86a477c78fa492ad19607a', 0),
('a399598b-5cc2-4468-adec-2e73d8e0', 'AlexisTopPlayer02', 'Alejandro', 'Garcia Salon', 'alexcooper@gmail.com', '04717bd2f9173f1b6d287c3a9512ec9b', 0),
('d689a387-1458-4043-9165-51008e0e', 'gerlopez__19999', 'German', 'López', 'germlop@gmail.com', '25d55ad283aa400af464c76d713c07ad', 0),
('d81b16d8-6085-47aa-ae13-7dc4ddcb', 'Administrador', 'Administrador', 'Administrador', 'administrador@administrador.com', 'd51eb9e80c155b57c35c94890ebb2803', 1),
('daa626ec-2222-4526-b781-8ddd7173', 'Sara_202019', 'Sara', 'García Pérez', 'saritasarita20@gmail.com', '25d55ad283aa400af464c76d713c07ad', 0),
('fe442ca6-21cc-488e-9933-e6007156', 'Gorkapr2', 'Gorka', 'Peldaña Ramirez', 'gorkacrack@gmail.com', '25d55ad283aa400af464c76d713c07ad', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_foros`
--

CREATE TABLE `usuarios_foros` (
  `id` varchar(32) NOT NULL,
  `id_usuario` varchar(32) NOT NULL,
  `id_foro` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios_foros`
--

INSERT INTO `usuarios_foros` (`id`, `id_usuario`, `id_foro`) VALUES
('1fbf8b09-22aa-44a9-9523-8846e080', '0fc08250-e234-4968-801b-2a10ba09', 'a4ff89cc-f0e6-4756-bfe6-758e4188'),
('70c0dcbb-c7e0-4501-96df-9e4ab05e', '2a6c7760-abc8-4226-bc5d-5ec91fa2', '668732f3-8883-45ef-ab63-08abe03d'),
('71c90585-7c2c-49f4-9a9d-a56d70b8', '2a6c7760-abc8-4226-bc5d-5ec91fa2', '9740b747-3ace-4665-999a-ea9816fe'),
('79873676-3fa8-4ffa-aff2-d0253287', '4d45f45a-4dd1-449f-b55d-3b5ecd6d', 'a4ff89cc-f0e6-4756-bfe6-758e4188'),
('85bc859c-27bd-4cc7-9660-b3d8c407', '83cf26c4-c549-40fd-8b26-639cdd08', '9740b747-3ace-4665-999a-ea9816fe'),
('8b24b5a9-cde4-48a4-95fe-b355fe6a', '83cf26c4-c549-40fd-8b26-639cdd08', 'a1bef6da-dcee-476d-9758-ea809541'),
('b173b701-58be-4df9-9273-01addc63', '08055802-a8f1-4c18-b512-e38b8e81', 'a1bef6da-dcee-476d-9758-ea809541'),
('cc5ba2ee-af7c-4e96-8372-c41784a5', '83cf26c4-c549-40fd-8b26-639cdd08', 'a4ff89cc-f0e6-4756-bfe6-758e4188');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoraciones`
--

CREATE TABLE `valoraciones` (
  `id` varchar(32) NOT NULL,
  `graficos` float NOT NULL,
  `optimizacion` float NOT NULL,
  `jugabilidad` float NOT NULL,
  `comentario` varchar(500) NOT NULL,
  `id_juego` varchar(32) NOT NULL,
  `id_usuario` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `valoraciones`
--

INSERT INTO `valoraciones` (`id`, `graficos`, `optimizacion`, `jugabilidad`, `comentario`, `id_juego`, `id_usuario`) VALUES
('0d1cde47-aa35-4dcc-b6fc-16361466', 5, 4, 5, 'Posiblemente mejor juego de karts, por mucho que me cueste reconocerlo, pero creo que CTR no está a la altura y de los demás ni hablamos. Muchos personajes, muchos estilos de conducción, dificultad balanceada, muchos coches, motos, tipos de rueda etc. Circuitos nuevos, circuitos clásicos, en definitiva es como todo lo anterior pero mejor. Para jugar con amigos es una pasada, piques asegurados, risas, diversión. ', '6fedb2df-a7f3-4e90-98af-fddd2fc1', '0fc08250-e234-4968-801b-2a10ba09'),
('1a0029a3-a090-49a0-910e-34cb5f97', 5, 3, 5, 'Me parece un juegazo, los graficos que tiene puede que no sean los mejores pero desde luego le da esta tematica de un juego en la nieve, cuando lo jugué no pude evitar quedarme maravillado con todo lo que tiene, muy recomendado.', '2ca2e0f6-c8a1-4b17-b582-8cf2d0cc', 'd689a387-1458-4043-9165-51008e0e'),
('27d04bf0-74e5-478f-8158-4f276fee', 5, 4, 5, 'Siempre he sido muy fan de los juegos de pokemon, llevo jugandolos desde la 2º generacion y se podria incluso decir que soy veterano en ellos, pero este juego es una pasada comparado a los demás, la animación 3D es algo que no estaba muy visto en aquella epoca y ahora esta creando juegos tan buenos como este, que alegria poder ver la saga de juegos que mas te gusta florecer así.', '82b51ae8-c0ec-40d1-9fda-ae2c24d0', '2e4c33cc-ecd4-4f98-80b9-4bc6bbba'),
('413ec8ba-bede-4738-9553-18013114', 5, 5, 5, 'Cuando hablamos del mejor Grand Theft Auto entre yo y mis amigos, el primero que se me viene a la mente es gta 5, pero no es porque los demás gta sean malos sino porque el gta 5 es el mas nuevo y el que mas contenido alberga, desde los atracos la cosa solo ha ido hacia arriba y dentro de poco ya viene el Grand Theft Auto 6 asÍ que vamos a ver si llega a superar a este juego, de mientras este será el que sostenga el primer puesto en el podio.', 'cfe1d63e-8dab-4e22-8e3a-51aa10b6', '50aa79bd-1b52-4113-a60e-66cc9dab'),
('44b80d5e-728a-4b3f-8046-0f659f18', 5, 4, 3, 'El juego al principio estuvo muy bien, una trama cautivadora y unos graficos excelentes, el problema viene cuando avanzas mas en la historia dado que la cosa empieza a ponerse mal, no me gusto mucho el final del juego y al final mis expectativas cayeron mucho debido a eso, asi que por eso mismo no puedo calificarlo con la mejor valoracién después de todo.', '54d41d42-6960-4cef-9e6a-6c6a7d80', 'a399598b-5cc2-4468-adec-2e73d8e0'),
('4de336b2-0322-4c79-ba09-1a47e77a', 5, 5, 5, 'Desde que tengo consciencia recuerdo haber jugado varios juegos de lego batman pero el que más me llego fue este, recuerdo tener 7 años y estar jugando esta joyita de videojuego, recuerdo todos los niveles desde el pingüino hasta el joker. Que buena infancia me dio este juego, y que bien que hayan hecho una trilogía porque lo merece y mucho.', 'cb95421a-834b-4345-8e3f-0225d1db', '38b78ad6-1875-4e59-8c99-329ce8ec'),
('5a179018-a67f-4aeb-b1ef-fd3b807b', 2, 3, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida ultricies dui porttitor convallis. Nunc vel lorem egestas, volutpat quam vitae, finibus odio. Morbi sed mattis purus, et cursus justo. Sed id tellus dictum purus maximus accumsan vel non lacus. Quisque sit amet enim accumsan, imperdiet tellus ut, malesuada lacus. Aliquam gravida, quam et blandit iaculis, elit est auctor ante, vitae pulvinar arcu est quis augue. Aliquam a lorem id neque vestibulum varius. Vivamus commodo velit', '54d41d42-6960-4cef-9e6a-6c6a7d80', '4d45f45a-4dd1-449f-b55d-3b5ecd6d'),
('6cc5a375-6f5f-4bb4-bd39-a395c0b3', 5, 5, 5, 'Se nota el esfuerzo que puso capcom en este juego desde la IA y la jugbilidad tan pulidad, verdaderamente una joya comparable solamente con los exclusivos de Sony como God of War, Horizon o Bloodborne en calidad. Solo espero que capcom siga creando esta franquicia en tercera persona y no limite la saga solamente a titulos nuevos en primera persona. Que realicen Residente Evil nuevos en tercera persona como los remake del 2 y el tres.', '77e8233a-97eb-475f-a667-2bfb138c', '08055802-a8f1-4c18-b512-e38b8e81'),
('7950a561-b201-4d2b-913f-2edbfaf7', 4, 4, 5, 'Hay que dar la enhorabuena a EA por la cuarta entrega de los Sims, desde los Sims 1 hasta ahora han hecho un gran trabajo con la saga de los Sims, siempre mejorandolo todo y dandole al usuario nuevas acciones para poder hacer en cada entrega sin contar las expansiones. Tengo que admitir que los Sims 4 no tiene tanto contenido como los Sims 3, de hecho hasta se le parece un poco, pero sin duda esta más que logrado :D.', '8d498297-2a85-4606-87c2-c1007a12', '38b78ad6-1875-4e59-8c99-329ce8ec'),
('aaed1653-7477-4448-8cc1-5ec9dd9b', 5, 5, 5, 'Que mas podria decir de este juego, si es un Juegazo, su historia, esas explociones expectaculares, gran variedad de armas en el modo online.\n\nUna historia muy bien trabajada que trata de explicar los acontecimientos que sucedieron antes de la primera entrega de halo. Por lo demas el juego demuestra una calidad en la inteligencia artificial enemiga que te pone en aprietos a cada rato cuando lo juegas en heroico y legendario.', 'cabc6a2a-e6b8-11ed-a05b-0242ac12', 'fe442ca6-21cc-488e-9933-e6007156'),
('ae6d6e19-0d87-49ae-92af-3e5d3e8a', 5, 5, 5, 'El juego en si es una obra de arte de cara al jugador, niveles muy completos y muy entretenidos, se nota que los desarrolladores han hecho este juego con mucho cariño.', '3e935101-1a34-454e-ab61-cf928df4', 'd689a387-1458-4043-9165-51008e0e'),
('ba1ef1be-15d7-40c9-8b98-44df942b', 3, 2, 1, 'Ayer decidí comprar x primera vez un juego de coches y x dios QUE HORROR.... No e visto semejante basura en mucho tiempo.... La conducción lamentable cada vez que frenas empieza a culear el coche y te vas a tomar x el culo... Inconducible...pense que tendría para comprar tus coches y elegir el que quisieras pues no eventos de mierda donde tienes que correr con los coches que ellos quiera pero vamos creo que ni jugaré más xk para ni poder mantener el coche en pista...', 'df48d43c-2637-4a99-8c01-9df20ec1', 'daa626ec-2222-4526-b781-8ddd7173'),
('bf14f50c-5f89-4fbc-8416-5eaa109b', 4, 4, 4, 'Me parece un buen juego, esta bien desarrollado, sin embargo si que tengo una queja y es que el balanceo del juego esta por los suelos, es decir, mayoritariamente el asesino tiene mas ventaja que el superviviente y eso no me gusta dado que a los supervivientes se les ha impuesto muchas complicaciones para poder sobrevivir en una partida. Deberían corregir eso, pero conociendo a Behaviour solo se centran en añadir contenido en vez de arreglar fallos y bugs.', '9f169de5-f5a7-48ca-a73b-c52f3a9d', '83cf26c4-c549-40fd-8b26-639cdd08'),
('cb7a86bb-17a0-4fda-be93-7f26bd40', 5, 5, 4, 'Es un juego increible, no es de extrañar que recibiera el GOTY, de toda la saga Arkham es sin duda mi juego favorito, en aquellos tiempos esto era lo que se considera un \"boom\" en todo su esplendor, simplemente un juego maravilloso.', '24a5945f-695d-4827-b2d3-71fc6a4c', '8cf0cd85-ab70-4bde-925d-41a1b677'),
('cebf9d7c-cb66-4572-ba50-ea8b9e1d', 1, 1, 1, 'No me gusto en absoluto. No es lo que esperaba viniendo de un juego de Star Wars y no tengo nada más que decir la verdad.', 'c6b90335-6a96-42cd-b85b-89c8e14a', 'daa626ec-2222-4526-b781-8ddd7173'),
('f798ee66-31e0-4676-96d6-a25fdb70', 5, 5, 4, 'A mi me parecio un juegazo, igual que el primero, puede que la trama no sea la más excelente, pero cuenta con una muy buena jugabilidad, la optimización esta bastante lograda y los gráficos increibles así que para mi el juego tiene un 10/10 en cada campo, esta claro que cada uno tiene su opinion pero esta es la mia.', '54d41d42-6960-4cef-9e6a-6c6a7d80', '8cf0cd85-ab70-4bde-925d-41a1b677');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoracion_servicio`
--

CREATE TABLE `valoracion_servicio` (
  `id` varchar(32) NOT NULL,
  `valoracion` int(1) NOT NULL,
  `mensaje` varchar(300) NOT NULL,
  `id_usuario` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `valoracion_servicio`
--

INSERT INTO `valoracion_servicio` (`id`, `valoracion`, `mensaje`, `id_usuario`) VALUES
('013508f9-c833-41fd-a319-eaf965e0', 1, 'Me ha gustado.', '4743eaa0-1521-4677-aafb-bfe7041b'),
('2af5a64f-c685-4e12-be60-ac729edf', 1, 'wad', '83cf26c4-c549-40fd-8b26-639cdd08'),
('63bb36b5-64ae-431e-aaed-73208580', 0, 'No me ha gustado el servicio.', '4d45f45a-4dd1-449f-b55d-3b5ecd6d'),
('69060305-e27b-4e29-86d0-8cf61ae3', 1, 'Me gusta mucho el servicio.', '2a6c7760-abc8-4226-bc5d-5ec91fa2');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `desarrolladoras`
--
ALTER TABLE `desarrolladoras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `foro`
--
ALTER TABLE `foro`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `juegos_desarrolladoras`
--
ALTER TABLE `juegos_desarrolladoras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_juegos` (`id_juegos`),
  ADD KEY `fk_plataformas` (`id_desarrolladoras`);

--
-- Indices de la tabla `juegos_favoritos`
--
ALTER TABLE `juegos_favoritos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario` (`id_usuario`),
  ADD KEY `fk_juego` (`id_juego`);

--
-- Indices de la tabla `juegos_plataformas`
--
ALTER TABLE `juegos_plataformas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_juegos` (`id_juegos`),
  ADD KEY `fk_plataformas` (`id_plataformas`),
  ADD KEY `id_plataformas` (`id_plataformas`);

--
-- Indices de la tabla `plataformas`
--
ALTER TABLE `plataformas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario` (`id_usuario`),
  ADD KEY `fk_foro` (`id_foro`);

--
-- Indices de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_post` (`id_post`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios_foros`
--
ALTER TABLE `usuarios_foros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_foro` (`id_foro`);

--
-- Indices de la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_juego` (`id_juego`),
  ADD KEY `fk_usuario` (`id_usuario`);

--
-- Indices de la tabla `valoracion_servicio`
--
ALTER TABLE `valoracion_servicio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `juegos_desarrolladoras`
--
ALTER TABLE `juegos_desarrolladoras`
  ADD CONSTRAINT `juegos_desarrolladoras_ibfk_1` FOREIGN KEY (`id_juegos`) REFERENCES `juegos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `juegos_desarrolladoras_ibfk_2` FOREIGN KEY (`id_desarrolladoras`) REFERENCES `desarrolladoras` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `juegos_favoritos`
--
ALTER TABLE `juegos_favoritos`
  ADD CONSTRAINT `juegos_favoritos_ibfk_2` FOREIGN KEY (`id_juego`) REFERENCES `juegos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `juegos_favoritos_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `juegos_plataformas`
--
ALTER TABLE `juegos_plataformas`
  ADD CONSTRAINT `juegos_plataformas_ibfk_1` FOREIGN KEY (`id_juegos`) REFERENCES `juegos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `juegos_plataformas_ibfk_2` FOREIGN KEY (`id_plataformas`) REFERENCES `plataformas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_2` FOREIGN KEY (`id_foro`) REFERENCES `foro` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `post_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `respuestas`
--
ALTER TABLE `respuestas`
  ADD CONSTRAINT `respuestas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `respuestas_ibfk_2` FOREIGN KEY (`id_post`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios_foros`
--
ALTER TABLE `usuarios_foros`
  ADD CONSTRAINT `usuarios_foros_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `usuarios_foros_ibfk_2` FOREIGN KEY (`id_foro`) REFERENCES `foro` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  ADD CONSTRAINT `valoraciones_ibfk_1` FOREIGN KEY (`id_juego`) REFERENCES `juegos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `valoraciones_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `valoracion_servicio`
--
ALTER TABLE `valoracion_servicio`
  ADD CONSTRAINT `valoracion_servicio_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
