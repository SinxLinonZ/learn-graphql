import { gql } from "@apollo/client";
import { useLazyQuery } from "@apollo/client/react";
import { useState } from "react";

const getUserWithPosts = gql`
query GetUserWithPosts($id: ID!) {
    getUserWithPosts(id: $id) {
    id
    name
    email
    posts {
      id
      userId
      title
      content
    }
  }
}
`;

export default function GetUserWithPosts() {
  const [userId, setUserId] = useState("");
  const [ fetchUserWithPosts, { data: userWithPosts } ] = useLazyQuery(getUserWithPosts);

  return (
    <>
      <p>Get user with posts</p>
      <input className="border px-2 w-15" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button className="bg-green-800 px-2 mx-2" onClick={() => {fetchUserWithPosts({
        variables: { id: userId }
      })}}>Get User With Posts</button>
      <pre className="p-4 rounded border m-4">{JSON.stringify(userWithPosts, null, 2)}</pre>
    </>
  )
}
