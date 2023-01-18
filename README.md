# TS-REST with NextJS and NestJS Examples
Turborepo with NestJS API Backend sharing Contracts with NextJS Frontend

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
