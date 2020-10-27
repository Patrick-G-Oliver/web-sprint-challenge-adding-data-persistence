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
    return db("tasks as t")
        .innerJoin("projects as p", "p.id", "t.project_id")
        .select("t.*", "p.project_name", "p.project_description")
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

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask,
}