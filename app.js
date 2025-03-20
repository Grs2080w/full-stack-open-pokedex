/* eslint-disable no-undef */
const express = require('express')
const app = express()

// get the port from env variable
/* eslint-disable no-console */
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
