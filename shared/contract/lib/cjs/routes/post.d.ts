import { z } from "zod";
export declare const post: {
    createPost: {
        method: "POST";
        path: "/posts";
        responses: {
            201: z.ZodObject<{
                id: z.ZodString;
                title: z.ZodString;
                body: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                body: string;
                title: string;
            }, {
                id: string;
                body: string;
                title: string;
            }>;
        };
        body: z.ZodObject<{
            title: z.ZodString;
            body: z.ZodString;
        }, "strip", z.ZodTypeAny, {
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
            200: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                title: z.ZodString;
                body: z.ZodString;
            }, "strip", z.ZodTypeAny, {
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
