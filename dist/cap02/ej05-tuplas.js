"use strict";
/**
 * Tuplas en TypeScript
 *
 * Las tuplas son arrays con longitud fija y tipos específicos en cada posición.
 * Útiles para representar datos estructurados como respuestas HTTP, coordenadas, etc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Tupla para respuesta HTTP: [statusCode: number, message: string]
let respuesta;
respuesta = [200, "Exitoso"];
console.log("Status:", respuesta[0]);
console.log("Mensaje:", respuesta[1]);
console.log("--------------------");
// Tupla para usuario: [id: number, password: string, estado: true (literal type)]
let usuario;
usuario = [123, "qwerty", true];
console.log("ID:", usuario[0]);
console.log("Password:", usuario[1]);
console.log("Estado:", usuario[2]);
//# sourceMappingURL=ej05-tuplas.js.map