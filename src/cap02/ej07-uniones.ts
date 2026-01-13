//Uniones

//let idPersona: number | string; variable previa, luego se convierte en type
type IDPERSONA = number | string; //Esto es una unión de tipos
let idPersona: IDPERSONA;
idPersona = 123; // Asignación de un número
//console.log("ID de persona como número:", idPersona);

idPersona = "abc123"; // Asignación de una cadena de texto
//console.log("ID de persona como cadena:", idPersona);

// Función que maneja la unión de tipos usando typeof para verificar el tipo en runtime
imprimirCodigo(idPersona);

function imprimirCodigo(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}


//Intersección de tipos
// Definimos un tipo base para productos
type Producto = {
    id: number;
    nombre: string;
    precio: number
}

// Tipo adicional para productos con descuento
type ConDescuento = {
    descuento: number; // Porcentaje de descuento
}

// Tipo que combina Producto y ConDescuento usando intersección (&)
// Esto significa que debe tener todas las propiedades de ambos tipos
type ProductoConDescuento = Producto & ConDescuento;

// Ejemplo de uso: un objeto que cumple con ProductoConDescuento
const libroEnOferta: ProductoConDescuento = {
    id: 101,
    nombre: "El gran libro TypeScript Avanzado",
    precio: 25.99,
    descuento: 15 // 15% de descuento
};