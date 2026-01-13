/**
 * Tuplas en TypeScript
 *
 * Las tuplas son arrays con longitud fija y tipos específicos en cada posición.
 * Útiles para representar datos estructurados como respuestas HTTP, coordenadas, etc.
 */

// Tupla para respuesta HTTP: [statusCode: number, message: string]
let respuesta: [number, string];
respuesta = [200, "Exitoso"];

console.log("Status:", respuesta[0]);
console.log("Mensaje:", respuesta[1]);
console.log("--------------------");

// Tupla para usuario: [id: number, password: string, estado: true (literal type)]
let usuario: [number, string, true];
usuario = [123, "qwerty", true];

console.log("ID:", usuario[0]);
console.log("Password:", usuario[1]);
console.log("Estado:", usuario[2]);