import { clientQuery } from "../lib/ts-rest";

export default function Example() {

    const getPost = clientQuery.post.getPost.useQuery(['posts'], {params: {id: "1"}});
    const mutatePost = clientQuery.post.createPost.useMutation();

    const post = async () => {
      const create = await mutatePost.mutateAsync({ body: {title: "", body: "123"}})
      console.log(create.body)
    }

  return (
    <div>
      <h1>{getPost.data?.body?.title}</h1>
      <button onClick={post} >Push</button>
    </div>
  );
}

