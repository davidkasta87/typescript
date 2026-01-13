//Uniones

//let idPersona: number | string; variable previa, luego se convierte en type
type IDPERSONA = number | string; //Esto es una unión de tipos
let idPersona: IDPERSONA;
idPersona = 123; // Asignación de un número
//console.log("ID de persona como número:", idPersona);

idPersona = "abc123"; // Asignación de una cadena de texto
//console.log("ID de persona como cadena:", idPersona);

imprimirCodigo(idPersona);

function imprimirCodigo(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}


//Intersección de tipos
type Producto = {
    id: number;
    nombre: string;
    precio: number
}

type ConDescuento = {
    descuento: number; // Porcentaje de descuento
}

// Tipo que combina Producto y ConDescuento
type ProductoConDescuento = Producto & ConDescuento;

constlibroEnOferta: ProductoConDescuento = {
    id: 101,
    nombre: "El gran libro TypeScript Avanzado",
    precio: 25.99,
    descuento: 15 // 15% de descuento
};