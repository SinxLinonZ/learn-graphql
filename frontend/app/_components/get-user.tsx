import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";

const getUser = gql`
query GetUser($id: ID!) {
    getUser(id: $id) {
    id
    name
    email
    }
}
`;

export default function GetUser() {
  const [userId, setUserId] = useState("");
  const { loading: userLoading, error: userError, data: user, refetch: refetchUser } = useQuery(getUser);

  return (
    <>
      <p>Get user by id</p>
      <input className="border px-2 w-15" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button className="bg-green-800 px-2 mx-2" onClick={() => {refetchUser({
        id: parseInt(userId)
      })}}>Get User</button>
      <pre className="p-4 rounded border m-4">{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}
