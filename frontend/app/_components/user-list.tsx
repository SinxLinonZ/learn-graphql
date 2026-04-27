import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const listUsers = gql`{
  listUsers {
    id
    name
    email
  }
}`;

export default function UserList() {

  const { loading: listUsersLoading, error: listUsersError, data: allUsers, refetch: refetchListUsers } = useQuery(listUsers);

  return (
    <>
      <p>User list</p>
      <button className="bg-green-800 px-2" onClick={() => {refetchListUsers()}}>Get All Users</button>
      <pre className="p-4 rounded border m-4">{JSON.stringify(allUsers, null, 2)}</pre>
    </>
  )
}
