import { client } from "../lib/ts-rest";

export default function App() {

  // Effectively a useQuery hook
  const posts = client.post.getPost.useQuery(
    ['posts'], // <- queryKey
    { params: { id: '1' } }, // <- Query params, Params, Body etc (all typed)
    { staleTime: 1000 } // <- react-query options (optional));
  );

  // Effectively a useMutation hook
  const mutate = client.post.createPost.useMutation();

  const createPost = async () => await mutate.mutateAsync(
    {
      body: {
        title: "New Post",
        body: "Post details..."
      }
    }
  );

  if (posts.isLoading) {
    return <div>Loading...</div>;
  }

  if (posts.data?.status !== 200) {
    return <div>Error</div>;
  }

  return (
    <div>
      Data from API: {JSON.stringify(posts.data?.body)}
      <br />
      <br />
      <button onClick={createPost} >Mutate Post</button>
      <br />
      <br />
      Post Status: {mutate.status}
      <br />
      Post return Title:{mutate.data?.body.title}
      <br />
      Post return Body:{mutate.data?.body.body}
    </div>
  );
}
