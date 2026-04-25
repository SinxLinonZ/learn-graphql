"use client";

import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { useState } from "react";

export default function Home() {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [createUserResult, setCreateUserResult] = useState(null);

  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const listUsers = gql`{
    listUsers {
      id
      name
      email
    }
  }`;

  const getUser = gql`
    query GetUser($id: ID!) {
      getUser(id: $id) {
        id
        name
        email
      }
    }
  `;

  const createUser = gql`
    mutation CreateUser($name: String!, $email: String!) {
      createUser(name: $name, email: $email) {
        id
        name
        email
      }
    }
  `;

  const client = new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:3000/graphql" }),
    cache: new InMemoryCache(),
  });

  function handleGetAllUsers() {
    client
      .query({
        query: listUsers,
      })
      .then((result) => {
        setAllUsers(result.data.listUsers);
      });
  }

  function handleGetUser() {
    client
      .query({
        query: getUser,
        variables: { id: parseInt(userId) },
      })
      .then((result) => {
        setUser(result.data.getUser);
      });
  }

  function handleCreateUser() {
    client
      .mutate({
        mutation: createUser,
        variables: { name, email },
      })
      .then((result) => {
        setCreateUserResult(result.data.createUser);
      });
  }

  return (
    <ApolloProvider client={client}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Graphql Learning</h1>
        <hr className="mb-4" />

        <p>User list</p>
        <button className="bg-green-800 px-2" onClick={handleGetAllUsers}>Get All Users</button>
        <pre className="p-4 rounded border m-4">{JSON.stringify(allUsers, null, 2)}</pre>

        <hr className="my-4" />

        <p>Get user by id</p>
        <input className="border px-2 w-15" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <button className="bg-green-800 px-2 mx-2" onClick={handleGetUser}>Get User</button>
        <pre className="p-4 rounded border m-4">{JSON.stringify(user, null, 2)}</pre>

        <hr className="my-4" />

        <p>Create user</p>
        <input className="border px-2" type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="border px-2 mx-2" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="bg-green-800 px-2" onClick={handleCreateUser}>Create User</button>
        <pre className="p-4 rounded border m-4">{JSON.stringify(createUserResult, null, 2)}</pre>


      </div>
    </ApolloProvider>
  );
}
