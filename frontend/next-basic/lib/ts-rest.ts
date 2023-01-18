import { initClient } from "@ts-rest/core";
import { initQueryClient } from "@ts-rest/react-query";
import contract from "contract";

// Client with Tanstack react-query
export const clientQuery = initQueryClient(contract, {
    baseUrl: 'http://localhost:3001',
    baseHeaders: {},
  });

// TS-REST's Fetch  
export const clientFetch = initClient(contract, {
    baseUrl: 'http://localhost:3001',
    baseHeaders: {},
  });