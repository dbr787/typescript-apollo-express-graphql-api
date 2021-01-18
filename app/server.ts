import express, { Express, Request, Response } from "express";
import compression from 'compression';
import cors from 'cors';
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import depthLimit from "graphql-depth-limit";
import path from "path";


export class Server {
  private app: Express;

  constructor(app: Express) {
    this.app = app;

    this.app.use(express.static(path.resolve("./") + "/build/frontend"));

    this.app.get("/", (req: Request, res: Response): void => {
        res.sendFile(path.resolve("./") + "/build/frontend/index.html");
    });

    this.app.use('*', cors());
    this.app.use(compression());
  }

  public start(port: number): void {
    this.app.listen(port, (): void =>
      console.log(`The web app is now running at http://localhost:${port}\nGraphQL explorer is now running at http://localhost:${port}/graphql\nGraphQL healthcheck is now running at http://localhost:8080/.well-known/apollo/server-health`)
    );
  }

  public graphql = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
  });
}
