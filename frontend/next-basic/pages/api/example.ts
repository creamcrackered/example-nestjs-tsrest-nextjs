import { clientFetch } from "../../lib/ts-rest";

export default async function handler(req: any, res: any) {
  const data = await clientFetch.post.getPost({ params: { id: "1" } });
  res.status(200).json({ data })
}