
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    getPost(id: string): Nullable<Post> | Promise<Nullable<Post>>;
    listPosts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;
    getUser(id: string): Nullable<User> | Promise<Nullable<User>>;
    listUsers(): Nullable<User>[] | Promise<Nullable<User>[]>;
    getUserPosts(userId: string): Nullable<Post>[] | Promise<Nullable<Post>[]>;
}

export interface IMutation {
    createPost(userId: string, title: string, content: string): Nullable<Post> | Promise<Nullable<Post>>;
    createUser(name: string, email: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Post {
    id: string;
    userId: string;
    title: string;
    content: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

type Nullable<T> = T | null;
