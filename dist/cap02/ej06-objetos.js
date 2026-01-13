"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Tenemos un objeto persona que tiene las propiedades
-ID, que es numérico, no es modificable
-Nombre, que es una cadena de texto
-Email, que es una cadena de texto y es opcional
-esAdmin, que es boolean
*/
const persona1 = {
    id: 1,
    nombre: "Pablo",
    email: "pablo@example.com",
    esAdmin: false
};
const persona2 = {
    id: 2,
    nombre: "María",
    esAdmin: true
};
persona2.nombre = "María García";
console.table(persona1);
console.table(persona2);
//# sourceMappingURL=ej06-objetos.js.map