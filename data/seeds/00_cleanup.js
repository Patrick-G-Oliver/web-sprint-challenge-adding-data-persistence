// clears out the tables so we can start fresh
// truncate does more than .del(), like resetting the autoincrement counts
exports.seed = async function(knex) {
	await knex("projects_tasks").truncate()
	await knex("tasks").truncate()
	await knex("resources").truncate()
	await knex("projects").truncate()
}
// Note the order of appearance (being the reverse of the order of creation, as with down function in initial migration file).
// Order is crucial here to avoid reference to non-existent (i.e. recently-cleared) tables. 