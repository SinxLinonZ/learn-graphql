
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    post(id: string): Nullable<Post> | Promise<Nullable<Post>>;
    posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
}

export interface IMutation {
    createPost(userId: string, title: string, content: string): Nullable<Post> | Promise<Nullable<Post>>;
    createUser(name: string, email: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    author: User;
}

export interface User {
    id: string;
    name: string;
    email: string;
    emailDomain: string;
    posts: Nullable<Post>[];
}

type Nullable<T> = T | null;
