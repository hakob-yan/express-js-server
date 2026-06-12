export async function seed(knex) {
  // delete existing users
  await knex("users").del();

  // insert real users
  await knex("users").insert([
    {
      id: 1,
      name: "John",
      email: "john@test.com",
    },
    {
      id: 2,
      name: "Alex",
      email: "alex@test.com",
    },
  ]);
};