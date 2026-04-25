
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    getUser(id: string): Nullable<User> | Promise<Nullable<User>>;
    listUsers(): Nullable<User>[] | Promise<Nullable<User>[]>;
}

export interface IMutation {
    createUser(name: string, email: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

type Nullable<T> = T | null;
