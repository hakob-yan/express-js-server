export function up(knex) {
    return knex.schema.createTable("roles", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.timestamps(true, true);
    });
}

export function down(knex) {
    return knex.schema.dropTableIfExists("roles");
}