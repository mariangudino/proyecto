 const preciofinal = (plan) => {
  switch (plan) {
    case '1':
      console.log('El precio es de: $500');
      return 500;
    case '2':
      console.log('El precio es de: $700');
      return 700;
    case '3':
      console.log('El precio es de: $800');
      return 800;
    default:
      return 0;
  }
};

const Descuento = (respuesta, valor) => {
  const resultado = respuesta === 'si' ? valor * 0.8 : valor;
  console.log(respuesta === 'si' ? `Ha adquirido un descuento del 20%, su valor final es: $${resultado}` : 'Se mantiene el mismo precio');
};


function cantidadDeUsuarios(i) {
  let usuarios = []; // Crear un arreglo para almacenar los nombres de los usuarios
  for (let a = 1; a <= i; a++) {
    let nombreusuario = prompt('Ingrese el nombre del usuario:');
    usuarios.push(nombreusuario); // Agregar el nombre al arreglo
    console.log('Creando: ' + nombreusuario);
  } 

   // Mostrar los nombres de los usuarios usando SweetAlert
   let usuariosTexto = usuarios.join(', '); // Convertir el arreglo en una cadena
   Swal.fire({
     title: 'Usuarios creados:',
     text: usuariosTexto,
     icon: 'info'
   });
 }


console.log('Bienvenido/a a nuestra página de streaming de películas, series y anime');
const decisionInput = document.getElementById ("decisioninput")
const btnsubmit = document.getElementById ("btnSubmit")
const resultcontainer = document.getElementById ("resultcontainer")
let decision;
btnsubmit.addEventListener('click', () => {
 decision = decisioninput.value.toLowerCase();
  if(decision == 'si'){
    resultcontainer.textContent = '-1: 1 mes de prueba + 3 meses \n -2: 1 mes de prueba + 6 meses \n -3: 1 mes de prueba + 1 año ';
    

  } else if (decision == 'no'){
    resultcontainer.textContent = 'respuesta no valida';
  }
} ) ;

class Usuarioprincipal {
  constructor(nombre, apellido, Generopreferido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.Generopreferido = Generopreferido;
  }
  presentarse() {
    console.log(`El nombre completo del Usuario principal es: ${this.nombre} ${this.apellido}`);
    console.log(`...Armando catálogo en base al género: ${this.Generopreferido}`);
  }
}

console.log('A continuación, le pediré que ingrese por teclado los datos que se le van a pedir del usuario principal de la cuenta');
let nombre = prompt('Ingresar el primer nombre del usuario:');
let apellido = prompt('Ingresar apellido:');
let Generopreferido = prompt('¿Cuál es su género preferido?');
const Usuarioprincipal1 = new Usuarioprincipal(nombre, apellido, Generopreferido);
Usuarioprincipal1.presentarse();

const Peliculasdisponibles = [
  'El sol que abraza',
  'Midsomar',
  'Tiempo de caza',
  'El padrino',
  'Akira'
];

let peliculaDeseada = prompt('¿Qué película desea ver?');

if (Peliculasdisponibles.includes(peliculaDeseada)) {
  console.log(`Prepárese para ver la película seleccionada: ${peliculaDeseada}`);
} else {
  console.log('Disculpe, por el momento no tenemos ese título en nuestro catálogo');
}

const Genero = [
  { Peliculaa: 'La llamada', Generoo: 'terror' },
  { Peliculaa: 'Busqueda implacable', Generoo: 'suspenso' },
  { Peliculaa: 'No miren arriba', Generoo: 'comedia' },
  { Peliculaa: 'Actividad paranormal', Generoo: 'terror' },
  { Peliculaa: 'Hangover', Generoo: 'comedia' },
  { Peliculaa: 'Paranoia', Generoo: 'suspenso' }
];

let eleccionGenero = prompt('Indique un género y le mostraremos las películas que tenemos');

const filtrado = Genero.filter((el) => el.Generoo === eleccionGenero);

console.log(`Estos son los resultados sobre el género: ${eleccionGenero}`);
for (let index = 0; index < filtrado.length; index++) {
  console.log(filtrado[index].Peliculaa);
}

const seriesNuevas = [
  { id: 1, nombre: 'Arrow' },
  { id: 2, nombre: 'Cazadores de sombras' },
  { id: 3, nombre: 'The office' }
];

let contenedor = document.createElement('div');
document.body.appendChild(contenedor);

for (const serieNueva of seriesNuevas) {
  let div = document.createElement('div');
  div.innerHTML = `
    <h3> id: ${serieNueva.id}</h3>
    <p> nombre: ${serieNueva.nombre}</p>
  `;
  contenedor.appendChild(div);
}

var input = document.getElementById('input');
input.addEventListener('keyup', textModificado);

function textModificado() {
  var inputText = document.getElementById('input-text');
  inputText.innerText = input.value;
}

localStorage.setItem('Nombredelusuario', 'Mariano');
let ultimoUsuario = localStorage.getItem('Nombredelusuario');

if (!ultimoUsuario) {
  ultimoUsuario = prompt('Ingrese nombre de usuario');
}

const busquedasRecientes = [
  { id: 1, pelicula: 'John Wick' },
  { id: 2, serie: 'The OC' },
  { id: 3, pelicula: 'Tonto y Retonto' },
  { id: 4, pelicula: 'El viaje de Chihiro' }
];

localStorage.setItem('Ultimasbusquedas', JSON.stringify(busquedasRecientes));

let planElegido = prompt('¿Cuál plan desea obtener?');
    let valor = preciofinal(planElegido);

    let numUsuarios = prompt('Ingrese el número de usuarios con los que va a compartir la cuenta:');
    cantidadDeUsuarios(numUsuarios);

    let respuestaDescuento = prompt('¿Tiene un código de descuento?');
    Descuento(respuestaDescuento, valor);

    
































  


















 
 

 






