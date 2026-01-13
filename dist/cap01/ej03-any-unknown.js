"use strict";
/**
 * Diferencia entre 'any' y 'unknown' en TypeScript
 *
 * - 'any': Desactiva el chequeo de tipos, permite cualquier operación
 * - 'unknown': Es seguro, requiere verificación de tipo antes de usar
 *
 * Recomendación: Evitar 'any', usar 'unknown' cuando sea necesario
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Usando 'any' - NO recomendado
let apellido1; // 'any' permite cualquier tipo y operación sin restricciones
apellido1 = "Castaneda";
// Con 'any', podemos llamar métodos sin verificación (potencialmente peligroso)
console.log("Apellido=", apellido1.toUpperCase());
console.log("longitud apellido=", apellido1.length);
// Usando 'unknown' - Recomendado para valores de tipo desconocido
let apellido2;
apellido2 = "Castaneda";
// Con 'unknown', debemos verificar el tipo antes de usar métodos
if (typeof apellido2 === "string") {
    // Dentro del bloque if, TypeScript sabe que apellido2 es string
    console.log("Apellido=", apellido2.toUpperCase());
    console.log("longitud apellido=", apellido2.length);
}
else {
    console.log("apellido2 no es una cadena de texto");
}
//# sourceMappingURL=ej03-any-unknown.js.map