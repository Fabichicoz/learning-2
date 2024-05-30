//hay otro metodo, para no tener que copiar todo y seguir haciendo operaciones.

//var funcion = function() {};
//var numero1 = 10;
//var numero2 = 8;

//var numero3 = 5;
//var numero4 = 9;

//Este es el metodo más rapido e eficas que hay para hacer estas Operaciones.
//Te da la posibilidad cambiar los números la cantidad de veces que sean necesarias.
// podemos sumar.
var funcion  = function () {};
function suma (numero1, numero2) {
    console.log(numero1 + numero2);

}

console.log (suma(100, 8));
console.log (suma(122, 8));
console.log (suma(10, 81));
console.log (suma(10, 80)); 

// TAMBIEN PODEMOS HACER EL MISMO PLANTEO PARA HACER RESTAS.

//function suma(parametro1, parametro2) {}

//var resta = function (parametro1, parametro2) {
//  console.log(parametro1 - parametro2)

//}

//console.log(resta(3,2))

// COMO TAMBIEN HACER UNA MULTIPLICACION.
//const  multiplicacion = (parametro1, parametro2) =>{
//  return console.log (parametro1, parametro2)
//}
//console.log(multiplicacion(3, 2))


// otros datos importantes

//ESTO SE LLAMA SCOPE
//var funcion = function() {};
//let global = "global" esto es global por que esta por fuera y lo  puedo llamar en cualquier momento.

//ESTO SE LLAMA FUNCTION
//function suma (parametro1){
//  parametro1 = "local" por estar por dentro de la operación

//}