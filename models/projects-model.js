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

// function getTasks(project_id) {
//     return db("tasks as t")
//         .innerJoin("projects as p", )
// }

// function getTasks(project_id) {
//     return db("projects_tasks as pt")
//         .innerJoin("projects as p", "p.id", "pt.project_id")
//         .innerJoin("tasks as t", "t.id", "pt.task_id")
//         .where("p.id", project_id)
//         .select([
            
//             "p.name",
//             "p.description"
//         ])
// }

function getTasks() {
    return db("projects_tasks as pt")
        .innerJoin("projects as p", "p.id", "pt.project_id")
        .innerJoin("tasks as t", "t.id", "pt.task_id")
        // .where("p.id", project_id)
        .select([
            "t.*",
            "p.name",
            "p.description"
        ])
}

module.exports = {
    getProjects,
    getResources,
    getTasks,
    // addProject,
    // addResource,
    // addTask,
}