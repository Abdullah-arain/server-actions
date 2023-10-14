"use server";

import { error } from "console";
import { db, todoTable } from "./drizzle";

export const getData = async () => {
  const fettcher = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await fettcher.json();

  return data;
};

export const getData1 = async () => {
  const user = await db.select().from(todoTable)
  return user
  
};

export const getData2 = async () => {
  await db
  .insert(todoTable)
  .values({task: 'task'})
  const users = await db.select().from(todoTable)
  return users
};


// 1. scalable
// 2. cors error
// 3. API route ki zarorat nhi