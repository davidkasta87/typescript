/*
¿Qué son los tipos literales?
En Typescript, un tipo literal es un tipo que solo acepta un valor específico.
En otras palabras, no se limita a tipos genéricos como string o number,
sino a valores exactos. Son muy útiles para definir un conjunto fijo y
limitado de valores, lo que mejora la seguridad y la legibilidad del código.
Imagina que en lugar de decir "esto es una cadena de texto", dices 
"esto es exactamente la cadena de texto 'rojo'".
*/

// Define un tipo literal TallaCamisa que solo acepta tres valores específicos
type TallaCamisa = 'small' | 'medium' | 'large'

// Crea una variable de tipo TallaCamisa con valor inicial 'small'
let miTalla1: TallaCamisa = 'small'
// Asigna un nuevo valor permitido 'medium'
miTalla1 = 'medium'
// miTalla1 = 'extra-large' -> Error, no es un valor permitido por el tipo literal

// Define un tipo literal calificacion que solo acepta números del 1 al 5
type calificacion = 1 | 2 | 3 | 4 | 5

// Declara una variable de tipo calificacion sin inicializar
let miCalificacion: calificacion
// Asigna un valor válido (5) a la variable
miCalificacion = 5
// miCalificacion = 6 -> Error, no es un valor definido para este tipo literal