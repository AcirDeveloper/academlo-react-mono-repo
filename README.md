# ACADEMLO REACT MONO REPOSITORIO

Repositorio de las clases, proyecto final, entregables entre otras cosas del bootcamp Academlo.

**TABLA DE CONTENIDO**

---

- [ACADEMLO REACT MONO REPOSITORIO](#academlo-react-mono-repositorio)
- [Como ejecutar cada proyecto](#como-ejecutar-cada-proyecto)
- [ENTREGABLES](#entregables)
  - [1. APP QUOTES](#1-app-quotes)
  - [2. OPEN WEATHER APP](#2-open-weather-app)
  - [3. RICK AND MORTY API APP](#3-rick-and-morty-api-app)
  - [4. CRUD AUTHENTICATION USERS](#4-crud-authentication-users)
  - [5. POKEAPI](#5-pokeapi)
- [PROYECTO FINAL](#proyecto-final)

---

## Como ejecutar cada proyecto

Primero descargar las dependencias con el comando

<code>
npm install
</code>

<br />
Despues revisar el package.json que se encuentra en la raiz, para ejecutar un proyecto en especifico podemos escribir el siguiente comando
<code>
npm run dev:01et
</code>

<br/>

## ENTREGABLES

### 1. APP QUOTES

Sitio web: [Quotes Site](https://comillas-app-jvc.netlify.app/) <br>
Respoitorio: [Quotes Repo](https://github.com/AcirDeveloper/academlo-react-mono-repo/tree/main/01-et-quotes-app)

<!-- <details>
<summary>INSTRUCCIONES</summary>
Crea una app React

- Guarda este json: https://jsonblob.com/918261686465740800 en un archivo llamado quotes.json
- Debes crear un componente llamado QuoteBox que esté centrado, el cuál debe mostrar una cita al azar al momento de cargar la aplicación.
- Debes crear un botón que al dar clic cambie la cita aleatoriamente.
- Al cambiar de cita, también se debe cambiar el color del fondo, de las letras y del botón. (todos deben ser del mismo color)
- Debes tener un mínimo de 3 componentes en tu aplicación (incluyendo app).
- Todo el código debe estar en inglés, pero puedes colocar comentarios en español.

Criterios de evaluación:

1. Se muestra una cita al azar al cargar la aplicación (20pts).
2. Al hacer clic en el botón, la cita cambia aleatoriamente (30pts).
3. Al hacer clic en el botón, cambia el color de fondo, las letras y los íconos. Todos deben ser del mismo color (30pts).
4. El componente QuoteBox está centrado (10pts).
5. El código está en inglés (10pts).
</details> -->

<hr />

### 2. OPEN WEATHER APP

Sitio web: [Cima Tacto Site](https://climatacto.netlify.app/) <br>
Respoitorio: [Cima Tacto Repo](https://github.com/AcirDeveloper/academlo-react-mono-repo/tree/main/02-et-weather-app)

<details>
<summary>INSTRUCCIONES</summary>
Aplicación que consuma la api de [openWeatherApp](https://openweathermap.org/) para mostrar el clima dependiendo de la ubicación del usuario

- Los datos del clima dependen de la ubicación del usuario (30pts).
- Correcto despliegue de datos: país, ciudad, icono que describa el clima, temperatura en grados centígrados. (30pts).
- Botón que cambia de grados centígrados a fahrenheit y viceversa (30pts).
- Código en inglés (10pts).

[DEMO APP](https://amazing-williams-f62284.netlify.app/)

</details>

<hr />

### 3. RICK AND MORTY API APP

Sitio web: [Name Site]() <br>
Respoitorio: [Name Repo]()

<details>
<summary>INSTRUCCIONES</summary>
Aplicación que consuma la api de [Rick and Morty API](https://rickandmortyapi.com/documentation/) para ver y filtrar a los personajes de Rick y Morty

- Ubicación aleatoria al cargar la página (10pts).
- Correcto despliegue de información en LocationInfo: Nombre, tipo, dimensión, cantidad de residentes (20pts).
- Listado de residentes en ResidentList (30pts).
- Correcto despliegue de información en ResidentInfo: Nombre, status, Imagen, cantidad de episodios donde aparece y lugar de origen (10pts).
- Correcto funcionamiento del componente SearchBox (20pts).
- Código en inglés (10pts).

[DEMO APP](https://rickymorty.netlify.app/)

</details>

<hr />

### 4. CRUD AUTHENTICATION USERS

Sitio web: [Name Site]() <br>
Respoitorio: [Name Repo]()

<details>
<summary>INSTRUCCIONES</summary>
CRUD de usuarios con autenticación usando una api creada por el instructor: [https://users-crud1.herokuapp.com/swagger](https://users-crud1.herokuapp.com/swagger)

- Correcto despliegue de información en cada item de usersList: nombre, apellido, email y fecha de nacimiento (10pts).
- Funcionalidad para eliminar usuarios (20pts).
- Funcionalidad para seleccionar un usuario, que sus datos salgan en el formulario como referencia para poder editarlo (20pts).
- Funcionalidad para crear usuarios en UsersForm (20pts).
- Funcionalidad para actualizar usuarios (20pts).
- Código en inglés (10pts).

[DEMO APP](https://fervent-mccarthy-6fbd8d.netlify.app/)

</details>

<hr />

### 5. POKEAPI

Sitio web: [Name Site]() <br>
Respoitorio: [Name Repo]()

<details>
<summary>INSTRUCCIONES</summary>
Aplicación consumiendo la [pokeapi](https://pokeapi.co/) usando los conceptos de rutas y lo básico de Redux para ver y filtrar pokemones.

- Las rutas /pokedex y /pokedex/:id están protegidas (10pts).
- El nombre insertado en el input de la ruta raíz se guarda en la store de redux (10pts).
- En /pokedex se muestra el nombre del usuario insertado anteriormente (10pts).
- En /pokedex se listan y se paginan todos los pokemones (10pts).
- En /pokedex cada tarjeta es un link que lleva a la ruta /pokedex/:id (15pts).
- En /pokedex se pueden filtrar los pokemones por tipo (15pts).
- En /pokedex hay un input para buscar un pokemon en específico (15pts).
- En /pokedex/:id se muestra correctamente la información del pokemon seleccionado (10pts).
- El código está en inglés (5pts).

[DEMO APP](https://mypokedex101.netlify.app/)

</details>

<hr />

## PROYECTO FINAL
