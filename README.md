# Recipe App - Angular

## Descripción

Aplicación web desarrollada con Angular que permite visualizar un catálogo de recetas y consultar los detalles de cada una.

## Requisitos previos

- Node.js
- Angular CLI 21+

## Instalación

Clonar el repositorio e instalar las dependencias:

```bash
git clone https://github.com/Evelynmerlo93/examen-angular.git
cd examen-angular
npm install
```

## Ejecutar la aplicación

Para iniciar el servidor de desarrollo:

```bash
ng serve
```

Abrir en el navegador:

`http://localhost:4200/`

## Ejecutar los tests

Para ejecutar los tests unitarios:

```bash
ng test
```

## Tecnologías utilizadas

- Angular 21+
- TypeScript
- Signals
- Angular Router
- Vitest

## Arquitectura del proyecto

```text
mi-app/
├── public/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── card-recipe/
│   │   │   ├── list-recipes/
│   │   │   └── detail-recipe/
│   │   ├── interface/
│   │   │   └── recipe.ts
│   │   ├── services/
│   │   │   ├── recipe-service.ts
│   │   │   └── recipe.spec.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   └── app.spec.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```