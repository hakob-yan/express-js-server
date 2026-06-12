export function up(knex) {
  return knex.schema.createTable("user_roles", (table) => {
    table.integer("user_id").unsigned().notNullable();
    table.integer("role_id").unsigned().notNullable();

    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table
      .foreign("role_id")
      .references("id")
      .inTable("roles")
      .onDelete("CASCADE");

    table.primary(["user_id", "role_id"]);
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("user_roles");
}