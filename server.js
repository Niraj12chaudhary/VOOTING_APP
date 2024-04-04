const express = require('express')
const app = express();

require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const connectDb = require('./utils/db');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

connectDb();
app.listen(PORT, ()=>{
    console.log('listening on port 3000');
}) 