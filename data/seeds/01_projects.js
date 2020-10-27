exports.seed = async function(knex) {
  await knex("projects").insert([
    { project_name: "paint fence", project_description: "apply paint to fence", completed: false},
    { project_name: "mow lawn", project_description: "sever blades of grass uniformly", completed: true},
  ]);
};
