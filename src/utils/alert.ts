import fancyLogger from "@poppinss/fancy-logs";

export const alert = {
    info(message: any, prefix?: string) {
        return fancyLogger.info({
            message,
            prefix: prefix ? `[${prefix}]` : "",
        });
    },

    success(message: any, prefix?: string) {
        return fancyLogger.success({
            message,
            prefix: prefix ? `[${prefix}]` : "",
        });
    },

    pending(message: any, prefix?: string) {
        return fancyLogger.pending({
            message,
            prefix: prefix ? `[${prefix}]` : "",
        });
    },
    warn(message: any, prefix?: string) {
        return fancyLogger.warn({
            message,
            prefix: prefix ? `[${prefix}]` : "",
        });
    },

    complete(message: any, prefix?: string) {
        return fancyLogger.complete({
            message,
            prefix: prefix ? `[${prefix}]` : "",
        });
    },

    fatal(message: any, prefix: string) {
        return fancyLogger.fatal(message, prefix);
    },

    watch(message: any) {
        return fancyLogger.watch(message);
    },

    error(error: any, prefix?: string) {
        return fancyLogger.error({
            message: error,
            prefix: prefix ? `[${prefix}]` : "",
        });
    },
};
