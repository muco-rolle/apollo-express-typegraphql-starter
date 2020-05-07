import "reflect-metadata";
import * as express from "express";
import { generateSchema, createApolloServer } from "@config";
import { alert, env } from "@utils";

const bootstrap = async () => {
    try {
        const port = env.get("port");
        const url = env.get("url");

        const schema = await generateSchema();

        const app = express();
        const apolloServer = createApolloServer(schema);

        apolloServer.applyMiddleware({ app, path: "/api" });

        app.listen(port, () => alert.info(`🚀 running at ${url}`, "Server"));
    } catch (error) {
        //
    }
};

bootstrap();
