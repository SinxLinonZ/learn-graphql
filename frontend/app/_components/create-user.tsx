import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useState } from "react";

const createUser = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [doCreateUser, { data: createUserResult }] = useMutation(createUser);

  return (
    <>
      <p>Create user</p>
      <input className="border px-2" type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="border px-2 mx-2" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className="bg-green-800 px-2" onClick={() => {
        doCreateUser({
          variables: { name, email }
        })
      }}>Create User</button>
      <pre className="p-4 rounded border m-4">{JSON.stringify(createUserResult, null, 2)}</pre>
    </>
  )
}
