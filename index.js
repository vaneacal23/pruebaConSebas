// Declará la variable diaDeSemana y asignale el valor "Domingo".
// Luego implementa un condicional usando el if que compare la igualdad de
//  diaDeSemana con el día "Domingo" , y si es verdadero que imprima por
//  pantalla "¡Hoy es día de descanso!".

// let diaDeSemana = "Domingo";
// if ( diaDeSemana == "Domingo") {
//     console.log ("¡Hoy es día de descanso!");
// }

// console.log(
//     "Gato" || "Perro" )

// function loro (){
//     for (let i=1;i<=5;i++) {
//         return ("¡lo repite!" + i);
//     }
// }

// Escribí la función puedeJubilarse que recibe por parámetro la edad,
// el género y además, los años de aportes jubilatorios (en ese orden)
// que posee una persona, ejemplo:

// puedeJubilarse(62, 'F', 34);
// // Ésto da como resultado true ya que cumple con las tres condiciones.
// Tené en cuenta que el mínimo de edad para realizar el trámite para las
// mujeres (género "F") es de 60 años, mientras que para los hombres (género "M")
//  es 65. En ambos casos, se deben contar con al menos 30 años de aportes jubilatorios.

// Te recomendamos que primero trates de resolver el ejercicio, después fijate
// lo que sigue y si podes resolverlo de ésta otra manera, deberíamos usar funciones
//  dentro de otra función, eso ya lo hicimos en funcionception , ¿Lo recordás?

// ¿Y si delegamos parte de la funcionalidad en otra función? Podríamos separar
//  la lógica de la siguiente manera:

// function puedeJubilarse(edad, genero, aniosAporte) {
//     return  estaEnEdad(edad, genero) && tieneSuficientesAportes(aniosAporte);
// }
// Al delegar correctamente hay veces en las que no es necesario alterar el
// orden de precedencia (cómo usamos los || OR y los && AND), ¡otro punto a
// favor de la delegación!

// function puedeJubilarse(edad, genero, aniosJubilado) {
//   if (edad >= 65 && genero == "M" && aniosJubilado >= 30) {
//     return true;
//   } else if (edad >= 60 && genero == "F" && aniosJubilado >= 30) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(puedeJubilarse(40, "F", 15));

// Supongamos que queremos representar al conjunto de nuestras series favoritas. ¿Cómo podríamos hacerlo?

// let seriesFavoritasDeAna = ["Game of Thrones", "Breaking Bad", "House of Cards"];
// let seriesFavoritasDeHector = ["En Terapia", "Recordando el show de Alejandro Molina"];
// Como ves, para representar a un conjunto de strings, colocamos todos esos strings que nos interesan,
//  entre corchetes ( [ y ] ) separados por comas. Fácil, ¿no?

// Probá y experimenta en la consola las siguientes consultas realizando distintas impresiones por pantalla:

// seriesFavoritasDeAna
// seriesFavoritasDeHector
// ["hola","mundo!"]
// ["hola","hola!"]
// Este ejercicio requiere de que muestres por consola las variables y los arrays mencionados anteriormente.

// RESPUESTA:

// let seriesFavoritasDeAna = ["Game of Thrones", "Breaking Bad", "House of Cards"];
// let seriesFavoritasDeHector = ["En Terapia", "Recordando el show de Alejandro Molina"];
// let array = ["hola","mundo!"]
// let arraDos = ["hola","hola!"]

// console.log(seriesFavoritasDeAna)
// console.log(seriesFavoritasDeHector)
// console.log(array)
// console.log(arraDos)

// imprimir 4 veces la parabra azul
// function imprimirAzul4() {
//     for (let i = 1; i <= 4; i++) {
//       console.log("Azul");
//     }
//   }

// let pelisFavoritas = ["cars", "toy story","la tuya","detras del ultimo no hay nadie", "hola care bola"];
// pelisFavoritas.indexOf(2)
// console.log(pelisFavoritas)
/* Esto es un comentario */

// let seriesFavoritasDeAna = ["Game of Thrones", "Breaking Bad", "House of Cards"];
// let seriesFavoritasDeHector = ["En Terapia", "Recordando el show de Alejandro Molina"];
// let array = ["hola","mundo!"]
// let sebas = ["hola","hola!"]

// console.log(seriesFavoritasDeAna)
// console.log(seriesFavoritasDeHector)
// console.log(array)
// console.log(sebas)

// let number= [7, 17, 13, 19, 5];
// function findLargest(numbers) {
//     return Math.max(...numbers)
// }
// console.log(findLargest(number))

// EL NUMERO MAS CERCA A CERO SEGUN ESTE ARREGLO
// let temperatura = [7, -10, 13, 8, 4, -7, -12, -3, 3, -9, 6, -1, -6, 7];
// function computeClosestToZero(ts) {
//   if (!ts.length) {
//     return 0;
//   }

//   let cercaCero = 0;

//   for (let i = 0; i < ts.length; i++) {
//     if (cercaCero === 0) {
//         cercaCero = ts[i];
//     } else if (ts[i] > 0 && ts[i] <= Math.abs(cercaCero)) {
//         cercaCero = ts[i];
//     } else if (ts[i] < 0 && -ts[i] < Math.abs(cercaCero)) {
//         cercaCero = ts[i];
//     }
//   }

//   return cercaCero;
// }
// console.log(computeClosestToZero(temperatura))

// Hagamos un ejercicio similar al anterior para despejar alguna que otra duda.

// Escribí una función llamada pasandoPorI (la última letra es una i latina mayúscula)
// que muestre por consola "acá i tiene el valor de x" donde x va a ser el valor de la variable
// i en cada iteración, por cada valor que va tomando i desde 0 hasta el numero 4 inclusive.

// function pasandoPorI() {
//     for (let i = 0; i <= 4; i++) {
//      console.log("acá i tiene el valor de " + i);
//     }
//   }

//   Siguiendo las ejercitaciones anteriores, vamos a crear una función llamada pasandoPorLosPares
//   que por cada iteración de i, si el valor de i es par, imprima por pantalla “acá i tiene el valor de x”.

// Realizar una función llamada pasandoPorLosPares() que muestre por consola acá i tiene el valor de x
// por cada valor PAR que va tomando i desde 0 hasta 6 (inclusive). Te recordamos que debes prestar
// especial atención con los espacios. En el ejercicio debe haber un solo espacio entre cada palabra.

// function pasandoPorLosPares() {
//     for (let i = 0; i < 6; i++) {
//       if (i % 2) {
//         console.log("acá i tiene el valor de " + i);
//       }
//     }
//   }

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  let fraseNueva= arrayFrase.join();
  console.log(fraseNueva)