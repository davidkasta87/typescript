/**
 * Arrays en TypeScript
 *
 * Los arrays permiten almacenar múltiples valores del mismo tipo.
 * Sintaxis: tipo[] o Array<tipo>
 */

// Declaración de array de strings
let frutas: string[] = ["Manzana", "Pera", "Naranja"];

// Acceso a elementos por índice (comienza en 0)
console.log(frutas[0]); // salida: "Manzana" (primer elemento)
console.log(frutas[1]); // salida: "Pera" (segundo elemento)
console.log(frutas[2]); // salida: "Naranja" (tercer elemento)

// Declaración de array de números
let calificaciones: number[] = [10, 8, 9, 7];
// let calificaciones: Array<number> = [10, 8, 9, 7]; // Sintaxis alternativa

// Iteración con forEach
calificaciones.forEach(calificacion => {
    console.log(calificacion);
});

/*
// Acceso individual a elementos (comentado)
console.log(calificaciones[0]); // salida: 10
console.log(calificaciones[1]); // salida: 8
console.log(calificaciones[2]); // salida: 9
console.log(calificaciones[3]); // salida: 7
*/
