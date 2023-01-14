import { initClient } from "@ts-rest/core";
import { initQueryClient } from "@ts-rest/react-query";
import contract from "contract";

export const clientQuery = initQueryClient(contract, {
    baseUrl: 'http://localhost:3001',
    baseHeaders: {},
  });

export const clientFetch = initClient(contract, {
    baseUrl: 'http://localhost:3001',
    baseHeaders: {},
  });