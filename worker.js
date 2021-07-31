const express = require('express')
const app = express()
const port = 9000
const pid = process.pid


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
	console.log(pid)
  	console.log(`App listening at http://localhost:${port}`)
})
