require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT
const database_url = process.env.DATABASE_URL

const userRoute = require('./routes/user')

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("This is a home page for User Authentication");
})

app.use('/api/v1/user', userRoute);

mongoose.connect ( database_url,)
  .then(() => app.listen(port, () => {console.log(`server is running on port ${port}`)}))
  .catch((err) => console.log(err.message))
