/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable("posts", (table) => {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE");
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    return knex.schema.dropTableIfExists("posts");
};
