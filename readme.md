## Créer un projet

- `mkdir my-project && cd my-project`
- `npm init -y`
- `git init`
- `touch .gitignore` # Copier contenu fichier de ce repo)
- `touch makefile`

## Créer un service clasique (type "backend")

- `mkdir backend && cd backend`
- `npm init -y`
- `npm i typescript -D`
- `npx tsc --init`
- Modifs du tsconfig.json
  - Commenter "verbatimModuleSyntax"
  - "emitDecoratorMetadata": true,
  - "experimentalDecorators": true
- `cd ..`

## Créer un "frontend" (utilisation de Vite)

- `npm create vite@latest frontend -- --template react-ts`

## Dockerisation

- Ici on choisit d'avoir un dossier `environments` qui contiendra tous les fichiers nécessaires au bon fonctionnement de l'app
  - compose.yaml
  - .env
  - conf nginx
  - dossier de persistance
- compose.yaml
  - fait appel au .env à côté de lui et injecte les valeurs dans les containers

## Tests

- Unitaires/intégration: dans le dossier _unit-tests_ de chaque service

## CI

## Deploiement
