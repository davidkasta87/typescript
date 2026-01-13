/**
 * Ejemplo de funciones en TypeScript
 *
 * Este archivo demuestra diferentes tipos de funciones en TypeScript:
 * - Funciones básicas con parámetros tipados
 * - Funciones que no retornan valor (void)
 * - Parámetros opcionales
 * - Valores por defecto en parámetros
 */

// Función básica que suma dos números
function sumar(a: number, b: number): number {
    return a + b;
}
let resultadoSuma: number = sumar(5, 3);
console.log("Resultado de la suma:", resultadoSuma); // salida: 8

// Función que no retorna un valor (void)
function saludar(nombre: string): void {
    console.log(`Hola, ${nombre}!`);
}
saludar("Ana"); // salida: Hola, Ana!

/**
 * Función con parámetros opcionales
 * @param nombre - Nombre de la persona (requerido)
 * @param apellido - Apellido de la persona (opcional)
 * @returns Saludo completo
 */
function saludarConApellido(nombre: string, apellido?: string): string {
    if (apellido !== undefined) {
        return `Hola, ${nombre} ${apellido}!`;
    }
    return `Hola, ${nombre}!`;
}
console.log(saludarConApellido("Luis")); // salida: Hola, Luis!
console.log(saludarConApellido("Luis", "Martínez")); // salida: Hola, Luis Martínez!

/**
 * Función con valores por defecto
 * @param nombre - Nombre de la persona
 * @param ciudad - Ciudad donde vive (por defecto "Desconocida")
 * @returns Saludo con ciudad
 */
function saludarConCiudad(nombre: string, ciudad: string = "Desconocida"): string {
    return `Hola, ${nombre} vives en ${ciudad}!`; // Si no se pasa ciudad, toma "Desconocida"
}
console.log(saludarConCiudad("Carla")); // salida: Hola, Carla vives en Desconocida!
console.log(saludarConCiudad("Laura", "Madrid")); // salida: Hola, Laura vives en Madrid!