import fancyLogger from "@poppinss/fancy-logs";

export const alert = {
    info(message: string, prefix?: string) {
        return fancyLogger.info({ message, prefix: `[${prefix}]` });
    },

    success(message: string, prefix?: string) {
        return fancyLogger.success({ message, prefix: `[${prefix}]` });
    },

    pending(message: string, prefix?: string) {
        return fancyLogger.pending({ message, prefix: `[${prefix}]` });
    },
    warn(message: string, prefix?: string) {
        return fancyLogger.warn({ message, prefix: `[${prefix}]` });
    },

    complete(message: string, prefix?: string) {
        return fancyLogger.complete({ message, prefix: `[${prefix}]` });
    },

    fatal(message: string, prefix: string) {
        return fancyLogger.fatal(message, prefix);
    },

    watch(message: string) {
        return fancyLogger.watch(message);
    },
};
