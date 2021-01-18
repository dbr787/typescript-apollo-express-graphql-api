import { Server } from "./app/server";
import express from 'express';

const app = express();
const port = 8080;
const server = new Server(app);

server.graphql.applyMiddleware({ app, path: '/graphql' });
server.start(port);
