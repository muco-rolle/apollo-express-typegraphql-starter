import { MiddlewareFn } from "type-graphql";
import { alert, error } from "@utils";

export const ErrorInterceptor: MiddlewareFn<any> = async (_, next) => {
    try {
        return await next();
    } catch (err) {
        alert.error(err);
        throw error("Internal Server Error", "500");
    }
};
