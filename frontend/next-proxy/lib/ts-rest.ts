import { initQueryClient } from "@ts-rest/react-query";
import contract from "contract";

// Client with Tanstack react-query
export const clientQuery = initQueryClient(contract, {
    // We're pointing the endpoint to NextJS's /api/[...proxy].ts route
    baseUrl: '/api',
    baseHeaders: {},
  });