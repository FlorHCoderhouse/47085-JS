let condicion = true;
let otraCondicion = false;
let edad = 37;
let string = '37';
let esMenor = 37 < 39;
let edadUser;
let noEsCierto = edadUser > 30;

/* if(condicion==true){
//acá lo que quiero que pase
console.log('La condición es true')
}

console.log('Se terminó el if') */

/* if (condicion==true) {
    console.log('La condición es verdadera')
}else{
    console.log('La condición es falsa');
} */

/* if (otraCondicion==true) {
    console.log('La condición es verdadera')
}else{
    console.log('La condición es falsa');
} */

/* if(edad==37){
    console.log('La edad es 37');
}else{
    console.log('La edad no es 37');
}*/

/* if (edad==string){
    console.log('Son iguales');
} else{
    console.log('No son iguales');
}

if (edad===string){
    console.log('Las variables son exactamente (estrictamente) iguales, en valor y tipo de datos');
} else{
    console.log('Las variables no son exactamente (estrictamente) iguales, en valor y tipo de datos');
} */


/*
//Variables booleanas

let edad = 12;
let miEdad = "38";
let edadLucas = prompt('Lucas, Ingresa tu edad');
let numeroA = 15;
let numeroB =320;

//Guardo un valor booleano explícito. Puede ser true o false
let variableBooleana = false;
//Guardo el resultado de una comparación, que es un valor true o false
let variableBooleanaB = (10>2);
//puedo guardar la comparación entre otras dos variables.
let variableBool = (numeroA<numeroB);
//El operador de igualdad estricta compara el valor de la variable y también el tipo de dato
let comparacion = (miEdad === edadLucas); */


//Operadores lógicos
//> Mayor que
//< Menor que
//>= Mayor o igual que
//<= Menor o igual que
//= asignación
//== comparacion de igualdad de valor
//=== comparacion estricta (compara el valor y el tipo de dato)
//!= distinto de
//!== distinto (estricto)

/* let edadUsuario = parseInt(prompt('Ingresá tu edad'))
let edadMinimaparaComprar = 18


if(edadUsuario>=edadMinimaparaComprar){
    console.log('Podés comprarte una birrita');
}else{
    console.log('No podés comprar alcohol')
} */

/* let pildora = prompt('Elegí una píldora');

if(pildora==='rojo'){
    console.log('Saliste de la Matrix');
}else if(pildora==='azul'){
console.log('Permanece en la ignorancia');
}else{
    console.log('elegiste un color inválido');
} */

/* let buenaNota = false;
let piezaOrdenada =false;
let clima = 'soleado'
if (piezaOrdenada && buenaNota) {
    console.log('Podés salir');
}else if(piezaOrdenada || buenaNota){
    console.log('Te quedás en casa');
}else{
    console.log('Chancletazo');
}

if ((piezaOrdenada || buenaNota)&&(clima=='soleado')) {
    console.log('Podés salir');
}else if(piezaOrdenada || buenaNota){
    console.log('Te quedás en casa');
}else{
    console.log('Chancletazo');
}

*/

//0 - 15 Prohibido votar
//16 - 17 Optativo votar
//18 - 69 Obligatorio votar
//70 - Mirtha Optativo votar

let edadUsuario = parseInt(prompt('Ingresa tu edad'));

let edadObligatoria = 18;
let edadMaxima = 69;
let edadMinima = 16;

if (edadUsuario < 0) {
    console.log('dato inválido');
}

if (edadUsuario >= edadObligatoria && edadUsuario <= edadMaxima) {
    console.log('Es obligatorio que votes');
} else if (edadUsuario >= edadMinima || edadUsuario > edadMaxima) {
    console.log('Es optativo que votés');
} else {
    console.log('No podés votar');
}


/* 
//Ojo con el orden en el que escribimos nuestras comparaciones

if(edadUser>=edadOptativa){
    alert('Podés votar si querés')
}else if(edadUser>=edadObligatoria){
    alert('Debés votar');
}else{
    alert('No podes votar');
}

alert('Fin del proceso'); */


//Acá les dejo más ejemplos, además de lo que vimos en clase

/* let nombre = prompt('Ingresa tu nombre'); 
let apellido = prompt('Ingresa tu apellido');

if(nombre!='' || apellido!=''){
    alert('Bienvenido/a '+nombre+' '+apellido)
}else{
    alert('Faltan datos')
}
 */


/*
let caracter = '1';
let numero = 1;

if (caracter == numero) {
    console.log('Son iguales');
}

if (caracter === numero) {
    console.log('Son iguales');
}

let letra = prompt('Ingresa X')
if (letra == 'X' || letra == 'x') {
    console.log('Ingresaste X')
}

*/



