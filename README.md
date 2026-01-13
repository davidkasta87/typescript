# TypeScript Tutorial

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)

This repository contains TypeScript learning exercises and examples organized by chapters. Perfect for beginners learning TypeScript fundamentals and advanced features.

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

### Chapter 3 (cap03): Functions

- `ej08-funciones.ts` - Function basics, optional parameters, default values

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd typescript-tutorial
```

2. Install dependencies:

```bash
npm install
```

### Development

#### Compile TypeScript

```bash
npm run build
```

This compiles all TypeScript files from `src/` to `dist/` directory.

#### Run Examples

You can run individual examples using ts-node:

```bash
npx ts-node src/cap01/ej01-Holamundo.ts
npx ts-node src/cap02/ej06-objetos.ts
npx ts-node src/cap03/ej08-funciones.ts
```

Or run the default example:

```bash
npm start
```

#### Development Mode

```bash
npm run dev src/cap01/ej01-Holamundo.ts
```

## Configuration

The project uses strict TypeScript settings in `tsconfig.json`:

- Strict mode enabled
- Source maps for debugging
- ES2020 target
- CommonJS modules

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-chapter`)
3. Make your changes
4. Run `npm run build` to ensure everything compiles
5. Commit your changes (`git commit -am 'Add new example'`)
6. Push to the branch (`git push origin feature/new-chapter`)
7. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

- Declaration files generation
- ES Next module system
