import { config } from "dotenv";
import { join } from "path";
import { rootPath } from "@utils";

export const env = {
    get(key: string): string | undefined {
        const envFilePath = `.env.${process.env["NODE_ENV"]}`;
        const path = join(rootPath, envFilePath);
        config({ path });

        return process.env[key.toUpperCase()];
    },
};
