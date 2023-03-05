const { createClient } = require('@supabase/supabase-js');
const { PrismaClient } = require('@prisma/client');
const http = require('http');
require('dotenv').config();
var colors = require('colors');
colors.enable();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const prisma = new PrismaClient();

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
      context: { supabase, prisma }, // pass the Prisma client object to the context
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
