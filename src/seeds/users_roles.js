export async function seed(knex) {
    // Clear existing relations
    await knex("user_roles").del();

    // Insert user-role relationships
    await knex("user_roles").insert([
        {
            user_id: 1,
            role_id: 1, // admin
        },
        {
            user_id: 1,
            role_id: 2, // editor
        },
        {
            user_id: 2,
            role_id: 2, // editor
        },
    ]);
};