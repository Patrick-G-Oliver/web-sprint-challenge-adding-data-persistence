exports.seed = async function(knex) {
  await knex("tasks").insert([
    { task_number: 1, task_description: "sand fence", information: "use fine-grit sandpaper", completed: false, project_id: 1},
    { task_number: 2, task_description: "prime fence", information: "use white primer", completed: false, project_id: 1},
    { task_number: 3, task_description: "paint fence", information: "use a brush", completed: false, project_id: 1},
    { task_number: 4, task_description: "clean up", information: "use a rag", completed: false, project_id: 1},
    { task_number: 1, task_description: "rake leaves", information: "use a rake", completed: true, project_id: 2},
    { task_number: 2, task_description: "cut grass", information: "use a lawn mower", completed: true, project_id: 2},
    { task_number: 3, task_description: "trim edges", information: "use an edge trimmer", completed: true, project_id: 2},
    { task_number: 4, task_description: "sweep up stray grass clippings", information: "use a broom", completed: true, project_id: 2},
  ]);
};