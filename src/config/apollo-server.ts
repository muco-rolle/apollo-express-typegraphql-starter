import { ApolloServer } from "apollo-server-express";
import { GraphQLSchema } from "graphql";

export const createApolloServer = (schema: GraphQLSchema) =>
    new ApolloServer({
        schema,
        context: async ({ req }) => {
            return { req };
        },
    });
