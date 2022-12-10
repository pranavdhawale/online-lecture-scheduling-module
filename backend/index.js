require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

const port = 9000

app.use(cors())

app.use(bodyParser.json())
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.set('strictQuery', false);

// connect to mongodb atlas
const mongouri =  `mongodb+srv://admin:${process.env.ATLAS_PASSWORD}@online-lecture-scheduli.woweejf.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(mongouri, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log('MongoDB database connection established successfully!');
    }
);

// import routes
const adminRoutes = require('./routes/admin.routes')

// use routes
app.use('/admin', adminRoutes)

app.get('/', (req, res) => {
    console.log("Working");
})

app.listen(port, () => {
    console.log("Server running on port : " + port);
})