exports.seed = async function(knex) {
  await knex("projects").insert([
    { name: "paint fence", description: "apply paint to fence", completed: false},
    { name: "mow lawn", description: "sever blades of grass uniformly", completed: true},
  ]);
};
