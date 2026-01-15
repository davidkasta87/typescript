/*
Interface

Define la forma de un objeto.
Es ideal para describir objetos,
clases y funciones.
Piénsalo como un contrato de cómo debe lucir un objeto.
*/

// Define la interfaz ProductoComercial con propiedades obligatorias y opcionales
interface ProductoComercial{
    nombre: string,      // Nombre del producto (obligatorio)
    precio: number,      // Precio del producto en unidades monetarias (obligatorio)
    stock: boolean,      // Indica si el producto está en stock (obligatorio)
    color?: string       // Color del producto (opcional - indicado por ?)
}

// Crea un objeto que cumple con la interfaz ProductoComercial
const miProducto: ProductoComercial = {
    nombre: "computador",     // Asigna el nombre del producto
    precio: 1000,             // Asigna el precio del producto
    stock: true,              // Indica que el producto está disponible
    color: "gris"             // Asigna el color (propiedad opcional)
}
console.log(miProducto);