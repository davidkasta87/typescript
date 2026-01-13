"use strict";
//Uniones
Object.defineProperty(exports, "__esModule", { value: true });
let idPersona;
idPersona = 123; // Asignación de un número
//console.log("ID de persona como número:", idPersona);
idPersona = "abc123"; // Asignación de una cadena de texto
//console.log("ID de persona como cadena:", idPersona);
// Función que maneja la unión de tipos usando typeof para verificar el tipo en runtime
imprimirCodigo(idPersona);
function imprimirCodigo(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
// Ejemplo de uso: un objeto que cumple con ProductoConDescuento
const libroEnOferta = {
    id: 101,
    nombre: "El gran libro TypeScript Avanzado",
    precio: 25.99,
    descuento: 15 // 15% de descuento
};
//# sourceMappingURL=ej07-uniones.js.map