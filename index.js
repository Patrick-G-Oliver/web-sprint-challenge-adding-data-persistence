const express = require("express")
const welcomeRouter = require("./welcome/welcome-router")
const projectsRouter = require("./routers/projects-router")

const server = express()
const port = process.env.PORT || 3500

server.use(express.json())
server.use(welcomeRouter)
server.use(projectsRouter)
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})