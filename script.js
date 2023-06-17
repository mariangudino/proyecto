console.log('Bienvenido/a a nuestra pagina de streaming de peliculas, series y anime')
let desicion = prompt('Desea ver nuestros planes disponibles?')// si o no
if (desicion == 'si') {
  console.log('-1: 1 mes de prueba + 3 meses \n -2: 1 mes de prueba + 6 meses \n -3: 1 mes de prueba + 1 año')
  
} else if(desicion == 'no') {
  console.log('Esta bien')
}
switch (desicion) {
  case 'si':
    let valor = 0
console.log('Cual plan desea obtener?')
let planelegido = prompt ()
function preciofinal (plan) {
 
  switch (plan) {
    case '1': console.log('El precio es de : $500')
      return 500
      break;
    
    case '2': console.log('El precio es de : $700')
    return 700
      break;
    
    case '3': console.log ('El precio es de : $800')
    return 800
  
    default:
      break;
  }
}

valor = preciofinal (planelegido)

function Descuento (respuesta,valor) {
  if (respuesta == 'si') {
    let resultado = valor * 0.2
    console.log('Ha adquirido un descuento del 20%, su valor final es:$'+resultado)

  }
  else if (respuesta == 'no') {
    console.log('Se mantiene el mismo precio')

  }
      
}


 function cantidadDeUsuarios (i){
  for (let a = 1; a <= i; a++) {
    let nombreusuario = prompt ('ingrese el nombre del usuario:');
    console.log('Creando: ' + nombreusuario)
    
  }
 }

 let i = prompt('ingrese el numero de usuarios con los que va a compartir la cuenta:')

 cantidadDeUsuarios(i)
 
 let respuesta = prompt ('Tiene un codigo de descuento? ')
 respuesta = Descuento (respuesta,valor)
    
    break;

  default:
    break;
}

 
 

 






