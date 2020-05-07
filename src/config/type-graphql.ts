import { join } from "path";
import { buildSchema } from "type-graphql";
import { rootPath } from "@utils";
import { ErrorInterceptor } from "@app/middlewares";

export const generateSchema = async () => {
    const resolversPath = "/src/app/resolvers/*.resolver.ts";
    const schemaPath = "/src/schema.graphql";

    return await buildSchema({
        resolvers: [join(rootPath, resolversPath)],
        globalMiddlewares: [ErrorInterceptor],
        emitSchemaFile: {
            path: join(rootPath, schemaPath),
            commentDescriptions: true,
        },
    });
};
