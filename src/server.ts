import "reflect-metadata";
import { generateSchema } from "@config";
import { alert } from "@utils";

const bootstrap = async () => {
    const schema = await generateSchema();

    alert.info(schema as any);
};

bootstrap();
