"use strict";
//Uniones
Object.defineProperty(exports, "__esModule", { value: true });
let idPersona;
idPersona = 123; // Asignación de un número
//console.log("ID de persona como número:", idPersona);
idPersona = "abc123"; // Asignación de una cadena de texto
//console.log("ID de persona como cadena:", idPersona);
imprimirCodigo(idPersona);
function imprimirCodigo(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
//# sourceMappingURL=ej07-uniones.js.map