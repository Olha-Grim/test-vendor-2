export const errors: {
    graphQLErrors: never[];
    networkError: {
        name: string;
        response: {};
        statusCode: number;
        result: {
            errors: {
                message: string;
                locations: {
                    line: number;
                    column: number;
                }[];
                extensions: {
                    code: string;
                    exception: {
                        stacktrace: string[];
                    };
                };
            }[];
        };
        message: string;
        stack: string;
    };
    message: string;
    name: string;
    stack: string;
}[];
//# sourceMappingURL=error.d.ts.map