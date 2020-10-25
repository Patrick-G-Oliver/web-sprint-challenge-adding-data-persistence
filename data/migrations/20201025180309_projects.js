exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.text("description")
        table.boolean("completed").defaultTo(false).notNull()
    })

    await knex.schema.createTable("resources", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description")
    })

    await knex.schema.createTable("tasks", (table) => {
        table.increments("id")
        table.integer("task_number").notNull()
        table.text("description").notNull()
        table.text("information")
        table.boolean("completed").defaultTo(false).notNull()
        table
            .integer("task_id")
            .references("id")
            .inTable("tasks")
    })

    await knex.schema.createTable("projects_tasks", (table) => {
        table  
            .integer("project_id")
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()
        table 
            .integer("task_id")
            .references("id")
            .inTable("tasks")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()
        table
            .primary(["project_id", "task_id"])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects_tasks")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};
