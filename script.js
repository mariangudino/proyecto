// function preciofinal(plan) {

//   switch (plan) {
//     case '1': console.log('El precio es de : $500')
//       return 500
//       break;

//     case '2': console.log('El precio es de : $700')
//       return 700
//       break;

//     case '3': console.log('El precio es de : $800')
//       return 800

//     default:
//       break;
//   }
// }

// function Descuento(respuesta, valor) {
//   if (respuesta == 'si') {
//     let resultado = valor * 0.2
//     console.log('Ha adquirido un descuento del 20%, su valor final es:$' + resultado)

//   }
//   else if (respuesta == 'no') {
//     console.log('Se mantiene el mismo precio')

//   }

// }

// function cantidadDeUsuarios(i) {
//   for (let a = 1; a <= i; a++) {
//     let nombreusuario = prompt('ingrese el nombre del usuario:');
//     console.log('Creando: ' + nombreusuario)
//   }
// }

// console.log('Bienvenido/a a nuestra pagina de streaming de peliculas, series y anime')
// let desicion = prompt('Desea ver nuestros planes disponibles?')// si o no
// if (desicion == 'si') {
//   console.log('-1: 1 mes de prueba + 3 meses \n -2: 1 mes de prueba + 6 meses \n -3: 1 mes de prueba + 1 año')

// } else if (desicion == 'no') {
//   console.log('Esta bien')
// }
// switch (desicion) {
//   case 'si':
//     let valor = 0
//     console.log('Cual plan desea obtener?')
//     let planelegido = prompt('Cual plan desea obtener?')

//     valor = preciofinal(planelegido)

//     let i = prompt('ingrese el numero de usuarios con los que va a compartir la cuenta:')

//     cantidadDeUsuarios(i)

//     let respuesta = prompt('Tiene un codigo de descuento? ')
//     respuesta = Descuento(respuesta, valor)

    

//     break;

//   default:
//     break;
// }

class Usuarioprincipal {
  constructor (nombre, apellido, Generopreferido){
    this.nombre= nombre
    this.apellido= apellido
    this.Generopreferido= Generopreferido
  }
  presentarse(){
    console.log("El nombre completo del Usuario principal es:"+ this.nombre + ' ' + this.apellido)
    console.log("...Armando catalago en base al genero: "+ this.Generopreferido )
  }
}

console.log('A continuacion voy a pedirle que carge por teclado los datos que se le van a pedir del usuario principal de la cuenta')
nombre = prompt('Ingresar el primer nombre del ususario:')
apellido = prompt('Ingresar apellido:')
Generopreferido = prompt('¿Cual es su genero preferido?')
const Usuarioprincipal1 = new Usuarioprincipal (nombre, apellido, Generopreferido)
Usuarioprincipal1.presentarse()

const Peliculasdisponibles = [
  {Pelicula: 'El sol que abraza'},
  {Pelicula:'Midsomar'},
  {Pelicula:'Tiempo de caza'},
  {Pelicula:'El padrino'},
  {Pelicula:'Akira'},

]
peliculadeseada = prompt("Que pelicula desea ver? : ")

const busqueda = Peliculasdisponibles.some ((la) => la.Pelicula == peliculadeseada )
console.log(busqueda)
if(busqueda == true){
  console.log('Preparese para ver la pelicula seleccionada: '+ peliculadeseada)
}
else {
  console.log('Disculpe por el momento no tenemos ese titulo en nuestro catalogo')
}

// Ahora voy a plantear otra situacion usando el metodo filter

const Genero = [
  {Peliculaa: 'La llamada', Generoo: 'terror'},
  {Peliculaa: 'Busqueda implacable', Generoo: 'suspenso'},
  {Peliculaa: 'No miren arriba', Generoo: 'comedia'},
  {Peliculaa: 'Actividad paranormal', Generoo: 'terror'},
  {Peliculaa: 'Hangover', Generoo: 'comedia'},
  {Peliculaa: 'Paranoia', Generoo: 'suspenso'},

]

let eleccion = prompt('Indique un genero y le mostraremos las peliculas que tenemos')

const filtrado  = Genero.filter((el) => el.Generoo.includes(eleccion))
 
function mostrarloquesefiltro (filtrado){
  for (let index = 0; index < filtrado.length; index++) {
    console.log(filtrado[index].Peliculaa)
    
  }
}

console.log('Estos son los resultados sobre el genero:' + eleccion)
mostrarloquesefiltro(filtrado)











 
 

 






