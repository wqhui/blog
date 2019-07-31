const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(__dirname))
app.use('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'input.html'))
})
app.listen(8089, console.log)
