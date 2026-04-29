import { GetUserQuery, GetUserQueryVariables } from "@/graphql/generated/graphql";
import { gql } from "@apollo/client";
import { useLazyQuery } from "@apollo/client/react";
import { useState } from "react";

const getUserDocument = gql`
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    emailDomain
  }
}
`;

export default function GetUser() {
  const [userId, setUserId] = useState("");
  const [ fetchUser, { data: user } ] = useLazyQuery<GetUserQuery, GetUserQueryVariables>(getUserDocument);

  return (
    <>
      <p>Get user by id</p>
      <input className="border px-2 w-15" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button className="bg-green-800 px-2 mx-2" onClick={() => {fetchUser({
        variables: { id: userId }
      })}}>Get User</button>
      <pre className="p-4 rounded border m-4">{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}
