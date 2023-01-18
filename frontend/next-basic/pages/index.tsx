import { clientQuery } from "../lib/ts-rest";

export default function Example() {

  const getPost = clientQuery.post.getPost.useQuery(['posts'], { params: { id: "1" } });

  const mutatePost = clientQuery.post.createPost.useMutation();

  const post = async () => {
    const create = await mutatePost.mutateAsync({ body: { title: "New Post", body: "123" } })
    console.log(create.body)
  }

  return (
    <div>
      Data from API: {getPost.data?.body?.title}
      <br/>
      <br/>
      <button onClick={post} >Mutate Post</button>
      <br/>
      <br/>
      Post Status: {mutatePost.status}
      <br/>
      Post return Title:{mutatePost.data?.body.title}
      <br/>
      Post return Body:{mutatePost.data?.body.body}
    </div>
  );
}
