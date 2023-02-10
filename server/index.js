//------------- OUR ENTRY POINT

//IMPORT EXPRESS SERVER
const express = require('express');
//IMPORT COLORS to color terminal commands like console.log
const colors = require('colors');
//IMPORT .env
require('dotenv').config();
//IMPORT GRAPHQL 
const {graphqlHTTP} = require('express-graphql');
//IMPORT SCHEMAS
const schema = require('./schemas/schema');
//IMPORT DB CONNECTION FILE
const connectDB = require('./config/db')
//ADDING PORT
const port = process.env.PORT || 5000;
//INITIALIZE EXPRESS
const app = express();


//connect to database
connectDB();

//using graphql
app.use('/graphql', graphqlHTTP({
schema,
graphiql: process.env.NODE_ENV === 'development',
}))


//testing PORT connection 
app.listen(port, console.log(`Server running on port ${port}`));
