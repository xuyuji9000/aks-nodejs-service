const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const host = 'somehost'

app.get('/', (req, res) => res.send('Hello World! This is a nodejs app.'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))