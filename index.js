const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const greeting = process.env.GREETING || "Hello World!"

app.get('/', (req, res) => res.send(`${greeting}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))