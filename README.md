# TypeScript Tutorial

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-DavidKasta87-black.svg)](https://github.com/DavidKasta87)

📚 Repositorio con ejercicios y ejemplos de TypeScript organizados por capítulos. Perfecto para aprender los fundamentos y características avanzadas de TypeScript.

## Project Structure

```
├── src/
│   ├── cap01/     # Chapter 1: Fundamentals
│   ├── cap02/     # Chapter 2: Advanced Types
│   └── cap03/     # Chapter 3: Functions
├── dist/          # Compiled JavaScript output
├── package.json   # Project dependencies and scripts
├── tsconfig.json  # TypeScript configuration
└── README.md      # This file
```

## Chapters

### Chapter 1 (cap01): Fundamentals

- `ej01-Holamundo.ts` - Hello World example
- `ej02-primitivos.ts` - Primitive types (number, string, boolean)
- `ej03-any-unknown.ts` - Any and Unknown types

### Chapter 2 (cap02): Advanced Types

- `ej04-arrays.ts` - Arrays and array operations
- `ej05-tuplas.ts` - Tuples for fixed-length arrays
- `ej06-objetos.ts` - Object types and interfaces
- `ej07-uniones.ts` - Union and intersection types

### Chapter 3 (cap03): Functions & Advanced Concepts

- `ej08-funciones.ts` - Function basics, optional parameters, default values
- `ej09-enums.ts` - Enums for defining named constants
- `ej10-interface.ts` - Interface definitions and implementations
- `ej11-literales.ts` - Literal types for precise type narrowing
- `ej12-ascercionTipo.ts` - Type assertion and narrowing
- `ej13-consumoAPI.ts` - API consumption examples

## Getting Started

### Prerequisites

- [Nodea el repositorio:

```bash
git clone https://github.com/DavidKasta87/Typescript.git
cd Typescript
```

2. Instala las dependencia
   git clone <your-repo-url>
   cd typescript-tutorial

````

2. Install dependencies:

```bash
npm install
````

### Development

#### Compilar TypeScript

```bash
npm run build
```

Compila todos los archivos TypeScript de `src/` al directorio `dist/`.

#### Ejecutar Ejercicios

Puedes ejecutar ejercicios individuales usando ts-node:

```bash
# Ejemplo individual
npx ts-node src/cap01/ej01-Holamundo.ts
npx ts-node src/cap02/ej06-objetos.ts
npx ts-node src/cap03/ej08-funciones.ts
```

O ejecutar el ejemplo por defecto:

```bash
npm start
```

#### Modo de Desarrollo

```bash
npm run dev -- src/cap01/ej01-Holamundo.ts
```

Scripts Disponibles

| Comando         | Descripción                     |
| --------------- | ------------------------------- |
| `npm run build` | Compila TypeScript a JavaScript |
| `npm start`     | Ejecuta el ejemplo por defecto  |
| `npm run dev`   | Modo desarrollo con ts-node     |
| `npm run clean` | Elimina la carpeta dist         |
| `npm run lint`  | Verifica errores de tipo        |

## Configuración

El proyecto usa configuración estricta de TypeScript en `tsconfig.json`:

- ✅ Strict mode habilitado
- 🗺️ Source maps para debugging
- 🎯 Target ES2020
- 📦 CommonJS modules

## Contribuir

1. Haz un fork del repositorio
2. Crea una rama (`git checkout -b feature/new-chapter`)
3. Realiza tus cambios
4. Ejecuta `npm run build` para asegurar compilación
5. Haz commit (`git commit -am 'Add new example'`)
6. Push a la rama (`git push origin feature/new-chapter`)
7. Abre unthe branch (`git push origin feature/new-chapter`)
8. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

- Declaration files generation
- ES Next module system
