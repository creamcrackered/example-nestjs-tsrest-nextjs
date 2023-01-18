import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
  },
}

const proxy = (req: NextApiRequest, res: NextApiResponse) => (
  httpProxyMiddleware(req, res, {
    // NestJS API URL here to proxy requests to
    target: 'http://localhost:3001',
    // Rewrite path to remove the starting /api
    pathRewrite: [{
      patternStr: '^/api',
      replaceStr: ''
    }],
  })
);

export default proxy