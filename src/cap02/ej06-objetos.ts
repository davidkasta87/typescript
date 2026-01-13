/* Tenemos un objeto persona que tiene las propiedades
-ID, que es numérico, no es modificable
-Nombre, que es una cadena de texto
-Email, que es una cadena de texto y es opcional
-esAdmin, que es boolean
*/

type Persona = {
    readonly id: number;
    nombre: string;
    email?: string; // Propiedad opcional
    esAdmin: boolean;
}

const persona1: Persona = {
    id: 1,
    nombre: "Pablo",
    email: "pablo@example.com",
    esAdmin: false
}

const persona2: Persona = {
    id: 2,
    nombre: "María",
    esAdmin: true
}
persona2.nombre = "María García";
//persona2.id = 3; ->Error: La propiedad 'id' es de solo lectura.

console.table(persona1);
console.table(persona2);