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

router.post('/projects', (req, res) => {
    const newProject = req.body;
    projectsModel.addProject(newProject)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });

  router.post('/resources', (req, res) => {
    const newResource = req.body;
    projectsModel.addResource(newResource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });

  router.post('/tasks', (req, res) => {
    const newTask = req.body;
    projectsModel.addTask(newTask)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });

module.exports = router