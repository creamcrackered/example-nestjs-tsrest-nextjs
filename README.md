# TS-REST with NextJS and NestJS Examples
Turborepo with NestJS API Backend sharing Contracts with NextJS Frontend

From the ts-rest readme
>ts-rest provides an RPC-like client side interface over your existing REST APIs, as well as allowing you define a separate contract implementation rather than going for >a 'implementation is the contract' approach, which is best suited for smaller or simpler APIs.
>
>If you have non typescript consumers, a public API, or maybe want to add type safety to your existing REST API? ts-rest is what you're looking for!

This repo has examples to show how we can use ts-rest with NestJS with a full-stack framework such as NextJS as an alternate backend to NextJS's API Routes and still ensure type-safety throughout.

Clone the repo and run in the root
1) `yarn install` to install all packages required in the TurboRepo
2) `yarn run dev` to start the the backend Nest API and the frontend Next Apps

Components:
- backend/nest-demo <- Nest API
- frontend/next-basic <- Basic demo showing how to use client to nest calls directly from the clienside
- frontend/next-proxy <- Proxy demo showing how to proxy requests from client through NextJS to Nest
- shared/contract <- Shared contract lib

Ports:
- `http://localhost:3001` API
- `http://localhost:3002` next-proxy demo
- `http://localhost:3000` next-basic demo

Reference:
 - TS-REST https://ts-rest.com/
 - NextJS https://nextjs.org/
 - NestJS https://nestjs.com/
