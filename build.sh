#!/bin/bash

## Créer un projet
mkdir my-project && cd my-project
npm init -y
git init
touch .gitignore # Copier contenu fichier de ce repo)
touch makefile

## Créer un service clasique (type "backend")
mkdir backend && cd backend
npm init -y
npm i typescript -D
npx tsc --init
# # Modifs du tsconfig.json
# - Commenter "verbatimModuleSyntax"
# - "emitDecoratorMetadata": true,
# - "experimentalDecorators": true
cd ..

## Créer un "frontend" (utilisation de Vite)
npm create vite@latest frontend -- --template react-ts

## Dockerisation


## Tests
## CI
## Deploiement
