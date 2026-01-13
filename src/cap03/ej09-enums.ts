/**
 * Enums (Enumeraciones) en TypeScript
 *
 * Los enums permiten definir un conjunto de constantes con nombre.
 * Son útiles para representar valores fijos como estados, categorías, etc.
 *
 * Tipos de enums:
 * - Numéricos: valores por defecto comenzando en 0
 * - De cadena: valores explícitos de tipo string
 * - Mixtos: combinación de numéricos y strings
 */

/**
 * Enum numérico con valores por defecto
 * Los valores se asignan automáticamente: 0, 1, 2, 3...
 */
enum EstadoPedido {
    Inicial,    // 0
    EnProceso,  // 1
    Enviando,   // 2
    Recibido    // 3
}

// Uso del enum numérico
let estado: EstadoPedido;
estado = EstadoPedido.Enviando;
console.log("Estado del pedido:", estado); // salida: 2

/**
 * Enum de cadena con valores explícitos
 * Cada miembro tiene un valor string asignado
 */
enum EstadoCompra {
    Inicial = "I",
    Facturado = "F",
    Devuelto = "D",
}

// Uso del enum de cadena
let estadoCompra: EstadoCompra;
estadoCompra = EstadoCompra.Inicial;
console.log("Estado de la compra:", estadoCompra); // salida: I

/**
 * Enum numérico con valores explícitos
 * Los valores se asignan manualmente, comenzando desde el número especificado
 */
enum CodigoError {
    OK = 100,
    ErrorRed = 200,
    ErrorBD = 300,
}

// Uso del enum con valores numéricos explícitos
let codigoError: CodigoError;
codigoError = CodigoError.OK;
console.log("Código de error:", codigoError); // salida: 100