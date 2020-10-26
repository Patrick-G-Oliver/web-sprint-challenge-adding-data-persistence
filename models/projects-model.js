const db = require("../data/config")

function getProjects() {
    return db("projects")
}

/* getProjects() translates as:

SELECT *
FROM projects

*/

function getResources() {
    return db("resources")
}

/* getResources() translates as:

SELECT *
FROM resources

*/

function getTasks() {
    return db("projects_tasks as pt")
        .innerJoin("projects as p", "p.id", "pt.project_id")
        .innerJoin("tasks as t", "t.id", "pt.task_id")
        .select([
            "t.*",
            "t.description",
            "p.name",
            "p.description"
        ])
}

function addProject(project) {
    return db("projects")
        .insert(project)
}

function addResource(resource) {
    return db("resources")
        .insert(resource)
}

function addTask(task) {
    return db("tasks")
        .insert(task)
}

// function addTask() {
//     return db("projects_tasks as pt")
//         .innerJoin("projects as p", "p.id", "pt.project_id")
//         .innerJoin("tasks as t", "t.id", "pt.task_id")
//         .insert([
//             "t.*",
//             "p.name",
//             "p.description"
//         ])
// }

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask,
}