export async function seed(knex) {
  // clear existing roles
  await knex("roles").del();

  // insert roles
  await knex("roles").insert([
    {
      id: 1,
      name: "admin",
    },
    {
      id: 2,
      name: "editor",
    },
    {
      id: 3,
      name: "user",
    },
  ]);
};