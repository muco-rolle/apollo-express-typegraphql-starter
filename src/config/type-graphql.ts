import { join } from "path";
import { buildSchema } from "type-graphql";
import { rootPath } from "@utils";

export const generateSchema = async () => {
    const resolversPath = "/src/app/resolvers/*.resolver.ts";
    const schemaPath = "/src/schema.graphql";

    return await buildSchema({
        resolvers: [join(rootPath, resolversPath)],
        emitSchemaFile: {
            path: join(rootPath, schemaPath),
            commentDescriptions: true,
        },
    });
};
