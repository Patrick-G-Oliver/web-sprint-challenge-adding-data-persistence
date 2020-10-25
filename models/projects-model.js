const db = require("../data/config")

function getProjects() {
    return db("projects")
}

/* getProjects() translates as:

SELECT *
FROM projects

*/

module.exports = {
    getProjects,
    // getResources,
    // getTasks,
    // addProject,
    // addResource,
    // addTask,
}