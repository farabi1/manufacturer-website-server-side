const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7ll96.mongodb.net/?retryWrites=true&w=majority`;


app.get('/', (req, res) => {
    res.send('Manufacturer Web App')
})

app.listen(port, () => {
    console.log(`Manufacturer Web App listening on port ${port}`)
})