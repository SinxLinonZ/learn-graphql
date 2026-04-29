import { GetPostsQuery, GetPostsQueryVariables } from "@/graphql/generated/graphql";
import { gql } from "@apollo/client";
import { useLazyQuery } from "@apollo/client/react";

const getPostsDocument = gql`
query GetPosts {
  posts {
    id
    title
    content
    author {
      id
      name
      email
      emailDomain
    }
  }
}
`;

export default function GetPosts() {
  const [ fetchPosts, { data: posts } ] = useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(getPostsDocument);

  return (
    <>
      <p>Get posts</p>
      <button className="bg-green-800 px-2" onClick={() => {fetchPosts()}}>Get Posts</button>
      <pre className="p-4 rounded border m-4">{JSON.stringify(posts, null, 2)}</pre>
    </>
  )
}
