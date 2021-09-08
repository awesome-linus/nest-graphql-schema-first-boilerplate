
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    todos(): Todo[] | Promise<Todo[]>;
}

export interface Todo {
    id: string;
    title: string;
    description?: Nullable<string>;
}

type Nullable<T> = T | null;
