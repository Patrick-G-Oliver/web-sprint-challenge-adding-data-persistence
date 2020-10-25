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

router.get("/resources", async (req, res, next) => {
	try {
		const resources = await projectsModel.getResources()
		res.json(resources)
	} catch(err) {
		next(err)
	}
})

router.get("/tasks", async (req, res, next) => {
	try {
		const tasks = await projectsModel.getTasks()
		res.json(tasks)
	} catch(err) {
		next(err)
	}
})

module.exports = router