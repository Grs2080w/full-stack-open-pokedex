/* eslint-disable no-undef */
const express = require("express")
const app = express()

// get the port from env variable
/* eslint-disable no-console */
const PORT = process.env.PORT || 5000

app.use(express.static("dist"))

app.get("/version", (req, res) => {
	res.send("with test berfore deploy")
})

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`)
})
