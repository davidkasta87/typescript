/**
 * Tipos primitivos en TypeScript
 *
 * Este archivo muestra los tipos básicos de TypeScript:
 * - number: números enteros y decimales
 * - string: cadenas de texto
 * - boolean: valores true/false
 * - null: valor nulo
 * - Tipos union (string | null)
 * - Inferencia de tipos automática
 */

/*
// Declaración explícita de tipos (comentada para comparación)
let edad: number;
let nombre: string;
let esAdmin: boolean;

edad = 20;
nombre = "David";
esAdmin = false;
*/

/*
// Declaración con inferencia de tipos (comentada)
let edad = 20;        // TypeScript infiere number
let nombre = "David"; // TypeScript infiere string
let esAdmin = false;  // TypeScript infiere boolean
*/

// Declaración con tipado explícito
let edad: number = 20;
let nombre: string = "David";
let esAdmin: boolean = false;

// Imprimir los valores
console.log(edad, nombre, esAdmin);

// Tipo union: puede ser string o null
let profesion: string | null;
profesion = null;           // Asignación inicial como null
profesion = "Programador";  // Luego asignamos un string

// Variable sin tipo explícito (TypeScript infiere 'any')
let pais;  // Equivalente a let pais: any;
console.log(pais);  // Imprime undefined