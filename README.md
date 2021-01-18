# Typescript Apollo Express Graphql API

## Getting Started

This repository contains an express backend running GraphQL paired with a React frontend. All of which is running in Typescript.

- [index.ts](./index.ts) is the main entry point to the application
- The "app" folder houses our backend configuration
- The "frontend" folder houses our frontend configuration

## Build the backend
```sh
npm install
npm run build
```

## Build the frontend
```sh
cd frontend/
npm install
npm run build
```

## Run the app
```sh
cd ../ # root directory
npm run start
```

## Objective

Deploying this app and accessing it via localhost works as expected, however when trying to deploy to AWS (either using ECS or EC2), the frontend website only renders a blank page.

Deploy this application to AWS, making the website publicly accessible.
