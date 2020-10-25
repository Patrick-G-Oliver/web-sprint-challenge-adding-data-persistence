exports.seed = async function(knex) {
  await knex("tasks").insert([
    { task_number: 1, description: "sand fence", information: "use fine-grit sandpaper", completed: false, task_id: 1},
    { task_number: 2, description: "prime fence", information: "use white primer", completed: false, task_id: 1},
    { task_number: 3, description: "paint fence", information: "use a brush", completed: false, task_id: 1},
    { task_number: 4, description: "clean up", information: "use a rag", completed: false, task_id: 1},
    { task_number: 1, description: "rake leaves", information: "use a rake", completed: true, task_id: 2},
    { task_number: 2, description: "cut grass", information: "use a lawn mower", completed: true, task_id: 2},
    { task_number: 3, description: "trim edges", information: "use an edge trimmer", completed: true, task_id: 2},
    { task_number: 4, description: "sweep up stray grass clippings", information: "use a broom", completed: true, task_id: 2},
  ]);
};