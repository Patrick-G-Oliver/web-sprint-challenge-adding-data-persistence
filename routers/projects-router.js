const express = require("express")
const projectsModel = require("../models/projects-model")

const router = express.Router()

router.get("/projects", async (req, res, next) => {
	try {
		const projects = await projectsModel.getProjects()
		res.json(projects)
	} catch(err) {
		next(err)
	}
})

module.exports = router