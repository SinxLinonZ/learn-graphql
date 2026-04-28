import { gql } from "@apollo/client";
import { useLazyQuery } from "@apollo/client/react";
import { useState } from "react";

const getUserPosts = gql`
query GetUserPosts($userId: ID!) {
    getUserPosts(userId: $userId) {
    id
    authorId
    title
    content
  }
}
`;

export default function GetUserPosts() {
  const [userId, setUserId] = useState("");
  const [ fetchUserPosts, { data: userPosts } ] = useLazyQuery(getUserPosts);

  return (
    <>
      <p>Get user posts</p>
      <input className="border px-2 w-15" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button className="bg-green-800 px-2 mx-2" onClick={() => {fetchUserPosts({
        variables: { userId: userId }
      })}}>Get User Posts</button>
      <pre className="p-4 rounded border m-4">{JSON.stringify(userPosts, null, 2)}</pre>
    </>
  )
}
