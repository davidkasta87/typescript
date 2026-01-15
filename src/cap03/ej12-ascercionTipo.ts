/**
 * Aserciones de tipo en TypeScript
 *
 * Las aserciones de tipo son una forma de indicarle al compilador
 * que tú conoces mejor el tipo de una variable de lo que él podría inferir.
 *
 * Sintaxis:
 * - Angle brackets: <string>variable
 * - 'as' keyword: variable as string
 */

// Ejemplo 1: Aserción con variable de tipo any
let mensaje: any;
mensaje = "Hola Mundo";

let resultado = (mensaje as string).toUpperCase();
console.log("resultado =", resultado); // salida: HOLA MUNDO

// Ejemplo 2: Aserción cuando TypeScript infiere un tipo más genérico
let valor: unknown = "TypeScript";
let longitud = (valor as string).length;
console.log("longitud =", longitud); // salida: 10

// Ejemplo 3: Aserción con números
let numero: any = 42;
let suma = (numero as number) + 8;
console.log("suma =", suma); // salida: 50