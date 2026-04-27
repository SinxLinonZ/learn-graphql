"use client";

import UserList from "../_components/user-list";
import GetUser from "../_components/get-user";
import CreateUser from "../_components/create-user";
import GetUserPosts from "../_components/get-user-posts";
import GetUserWithPosts from "../_components/get-user-with-posts";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Graphql Learning</h1>
      <hr className="mb-4" />

      <UserList />
      <hr className="my-4" />

      <GetUser />
      <hr className="my-4" />

      <CreateUser />
      <hr className="my-4" />

      <GetUserPosts />
      <hr className="my-4" />

      <GetUserWithPosts />
    </div>
  );
}
