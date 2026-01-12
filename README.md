# TypeScript Tutorial

This repository contains TypeScript learning exercises and examples organized by chapters.

## Project Structure

```
├── src/
│   ├── cap01/     # Chapter 1: Fundamentals
│   └── cap02/     # Chapter 2: Advanced Types
├── dist/          # Compiled JavaScript output
└── tsconfig.json  # TypeScript configuration
```

## Chapters

### Chapter 1 (cap01): Fundamentals
- `ej01-Holamundo.ts` - Hello World example
- `ej02-primitivos.ts` - Primitive types
- `ej03-any-unknown.ts` - Any and Unknown types

### Chapter 2 (cap02): Advanced Types
- `ej04-arrays.ts` - Arrays
- `ej05-tuplas.ts` - Tuples

## Getting Started

### Prerequisites
- Node.js installed
- TypeScript installed globally (`npm install -g typescript`)

### Compile TypeScript

```bash
tsc
```

This will compile all TypeScript files from `src/` to `dist/` directory.

### Run Examples

```bash
node dist/cap01/ej01-Holamundo.js
```

## Configuration

The project uses strict TypeScript settings including:
- Strict mode enabled
- Source maps for debugging
- Declaration files generation
- ES Next module system
