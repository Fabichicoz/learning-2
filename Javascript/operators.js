var suma = 3 + 5;
var resta = 3 - 5;
var multiplicacion = 3 * 5;
var division = 3 / 5;

//EN ESTE EJ DA FALSE POR QUE LA MAQUINA PIENSA QUE QUERES COMPARAR LOS NUMEROS Y SON DIFERENTES
//var comparacion = 3 == 5;

// ES TRUE TAMBIEN COMO EL EJ DE ABAJO
var comparacion = 5 == 5;

//ACA SUCEDE LA COERCION LO LEE COMO UN STRING Y LA MAQUINA SUPONE QUE QUIERE COMPARAR LOS NUMEROS
// POR ESO DA TRUE (VERDADERO) POR SER DOS NUMEROS IGUALES.
var comparacion = 5 == "5";

//PARA COMPARAR ALGO SIEMPRE SE UTULIZA === PARA COMPARAR EN ESTA OCACION 
//DA FALSE POR QUE 5 NO ES IGUAL QUE "5" CARACTER POR ESO NO SON IGUALES
var comparacion = 5 === "5";

//EJEMPLO DE LA LOGICA SI UNA RESULTADO ES MAYOR,MENOR, MAYOR E IGUAL O MENOR E IGUAL
var mayor = 5 > 6; // 5 ES MAYOR QUE 6 NO ES FALSE
var menor = 5 < 6;// 5 ES MENOR QUE 6 SI ES TRUE
var mayorIgual = 5 >= 5;// 5 ES MAYOR O IGUAL QUE 5 SI ENTONCES ES TRUE
var menorIgual = 5 <= 5;// 5 ES MENOR O IGUAL A 5 SI ENTONCES ES TRUE


// SE ELIJE UNA OPCION Y SE COLOCA ESA OPCION QUE QUIERAS TRABAJAR ENTRE PARENTECIS
//console.log(mayor) 
//console.log(menor) 
//console.log(mayorIgual)
//console.log(menorIgual) 

true && true; // ES TRUE (VERDADERO)
true && false;// ES FALSE (FALSO)

var a = true;
var b = false;

a && b ;//FALSE 

//EJEMPLO REAL

var esMayor = true;
var esMenor = false;

var edad = 18;
var esMayor = edad >= 18;

// ES MAYOR DE EDAD Y PAGO LA ENTRADA ESTA RESPUESTA FUE TRUE (VERDADERA)
// ESTE ES PLANTEO

//var pago = true;

//var puedeEntrar = esMayor && pago;

//console.log(puedeEntrar, "Esta persona puede entrar si es true")  

// SEGUNDO EJEMPLO LA RESPUESTA FUE TRUE POR QUE CUMPLIÓ CON UNA DE LAS DOS CONDICIONES NO PAGO, PERO ERA MAYOR DE EDAD.
//var pago = false;

//var puedeEntrar = esMayor || pago; 

//console.log(puedeEntrar, "Esta persona puede entrar si la persona cumple alguna de las condiciones")  

//EL OPERADOR EJ EDAD Y EL SIMBOLO ++; LE SUMA 1 SE REPRESENTA EDAD++;

//var edad = 16;
//edad++;

//console.log(edad) 

// ESTE A DIFERENCIA DEL OTRO EJEMPLO NO SUMA DE A UNO, SI NO QUE SUMA DIRECTAMENTE EL NUMERO QUE ELIJAMOS
// SE REPRESENTA EDAD +=2
var edad = 16;
edad += 2;

console.log(edad)  
