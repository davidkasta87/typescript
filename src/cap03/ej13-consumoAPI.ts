/**
 * Consumo de APIs en TypeScript
 *
 * Este archivo demuestra cómo:
 * - Definir interfaces para tipado de datos de API
 * - Usar async/await para llamadas HTTP
 * - Consumir una API REST con fetch
 * - Manejar datos estructurados con TypeScript
 */

/**
 * Interface ProductoAPI
 * Define la estructura exacta del objeto producto que retorna la API.
 * Esto proporciona tipado fuerte y autocompletado en el IDE.
 */
interface ProductoAPI {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    // Objeto anidado para la categoría
    category: {
        id: number;
        name: string;
        image: string;
        slug?: string; // Propiedad opcional (?)
    };
    // Array de URLs de imágenes
    images: string[];
    creationAt: string;  // Fecha de creación
    updatedAt: string;   // Fecha de última actualización
}

/**
 * Función asíncrona para obtener un producto por su ID desde la API
 *
 * @param idProducto - El ID del producto a obtener
 * @returns Promise que resuelve al objeto ProductoAPI
 */
async function obtenerProducto(idProducto: number): Promise<ProductoAPI> {
    // Construir la URL con el ID del producto
    const url = `https://api.escuelajs.co/api/v1/products/${idProducto}`;
    
    // Realizar la solicitud HTTP GET a la API
    const response = await fetch(url);
    
    // Convertir la respuesta JSON a objeto tipado ProductoAPI
    const data: ProductoAPI = await response.json();
    
    // Retornar el objeto del producto
    return data;
}

/**
 * Función asíncrona para obtener solo el título del producto
 *
 * @param idProducto - El ID del producto
 * @returns Promise que resuelve al título (string) del producto
 */
async function obtenerTitulo(idProducto: number): Promise<string> {
    // Primero obtenemos el producto completo
    const producto = await obtenerProducto(idProducto);
    
    // Luego retornamos solo la propiedad title
    return producto.title;
}

/**
 * Función de prueba que obtiene y muestra el título del producto
 *
 * @param idProducto - El ID del producto a probar
 */
async function test(idProducto: number) {
    // Obtener el título del producto de forma asíncrona
    const tituloProducto = await obtenerTitulo(idProducto);
    
    // Mostrar el resultado en la consola
    console.log("El título del producto es:", tituloProducto);
}

// Ejecutar la función de prueba con el ID 117
test(117);