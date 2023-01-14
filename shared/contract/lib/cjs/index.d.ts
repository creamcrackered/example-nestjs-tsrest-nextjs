declare const contract: {
    post: {
        createPost: {
            method: "POST";
            path: "/posts";
            responses: {
                201: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    title: import("zod").ZodString;
                    body: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: string;
                    body: string;
                    title: string;
                }, {
                    id: string;
                    body: string;
                    title: string;
                }>;
            };
            body: import("zod").ZodObject<{
                title: import("zod").ZodString;
                body: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                body: string;
                title: string;
            }, {
                body: string;
                title: string;
            }>;
            summary: "Create a post";
        };
        getPost: {
            method: "GET";
            path: "/posts/:id";
            responses: {
                200: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    title: import("zod").ZodString;
                    body: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: string;
                    body: string;
                    title: string;
                }, {
                    id: string;
                    body: string;
                    title: string;
                }>>;
            };
            summary: "Get a post by id";
        };
    };
};
export default contract;
