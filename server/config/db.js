// This code connects to Supabase, signs in anonymously, creates a GraphQL handler, and sets up an HTTP server to listen on the specified port. 
//The Supabase client object is passed to the GraphQL context to be used in resolvers.
const { createClient } = require('@supabase/supabase-js');
const { createGraphQLHandler } = require('@supabase/supabase-graphql');
const http = require('http');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const connectDB = () => {
  console.log('Connecting to SUPABASE...'.yellow.underline.bold);

  return new Promise((resolve, reject) => {
    const supabase = createClient(supabaseUrl, supabaseKey);

    supabase.auth.signInAnonymously()
      .then(() => {
        console.log('SUPABASE Connected'.cyan.underline.bold);
        resolve(supabase);
      })
      .catch((error) => {
        console.error('Error connecting to SUPABASE:'.red.underline.bold, error.message);
        reject(error);
      });
  });
};

const server = http.createServer(async (req, res) => {
  const supabase = await connectDB();

  const { graphqlResponse } = await createGraphQLHandler({
    supabaseUrl,
    supabaseKey,
    graphqlOptions: {
      context: { supabase }, // pass the SupaBase client object to the context
    },
  })(req, res);

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.write(JSON.stringify(graphqlResponse));
  res.end();
});

const port = process.env.PORT || 5432;

server.listen(port, () => {
  console.log(`Server running on port ${port}`.green.underline.bold);
});






// const mongoose = require('mongoose');

// const connectDB = async () => {
//   const conn = await mongoose.connect(process.env.MONGO_URI);

//   console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
// };

// module.exports = connectDB;