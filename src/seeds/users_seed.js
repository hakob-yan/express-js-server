/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex("users").insert([
    { name: "John", email: "john@gmail.com", age: 25 },
    { name: "Alice", email: "alice@gmail.com", age: 30 },
    { name: "Bob", email: "bob@gmail.com", age: 35 }
  ]);
};
