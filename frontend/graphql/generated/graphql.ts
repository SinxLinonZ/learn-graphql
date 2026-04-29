export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename: 'Mutation';
  createPost: Maybe<Post>;
  createUser: Maybe<User>;
};


export type MutationCreatePostArgs = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Post = {
  __typename: 'Post';
  author: User;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename: 'Query';
  post: Maybe<Post>;
  posts: Array<Maybe<Post>>;
  user: Maybe<User>;
  users: Array<Maybe<User>>;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename: 'User';
  email: Scalars['String']['output'];
  emailDomain: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  posts: Array<Maybe<Post>>;
};

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type CreateUserMutation = { createUser: { __typename: 'User', id: string, name: string, email: string } | null };

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { posts: Array<{ __typename: 'Post', id: string, title: string, content: string, author: { __typename: 'User', id: string, name: string, email: string, emailDomain: string } } | null> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetUserQuery = { user: { __typename: 'User', id: string, name: string, email: string, emailDomain: string } | null };

export type ListUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListUsersQuery = { users: Array<{ __typename: 'User', id: string, name: string, email: string, emailDomain: string } | null> };
