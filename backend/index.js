const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 9000

app.get('/', (req, res) => {
    console.log("Working");
})

app.listen(port, () => {
    console.log("Server running on port : " + port);
})