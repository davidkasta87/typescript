"use strict";
/* Tenemos un objeto persona que tiene las propiedades
-ID, que es numérico, no es modificable
-Nombre, que es una cadena de texto
-Email, que es una cadena de texto y es opcional
-esAdmin, que es boolean
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Creando una instancia de Persona con todas las propiedades
const persona1 = {
    id: 1,
    nombre: "Pablo",
    email: "pablo@example.com",
    esAdmin: false
};
// Creando otra instancia sin la propiedad opcional email
const persona2 = {
    id: 2,
    nombre: "María",
    esAdmin: true
};
// Modificando la propiedad nombre de persona2
persona2.nombre = "María García";
//persona2.id = 3; // Error: La propiedad 'id' es de solo lectura.
// Mostrando las personas en formato de tabla
console.table(persona1);
console.table(persona2);
//# sourceMappingURL=ej06-objetos.js.map