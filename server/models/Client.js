//CONNECT TO MONGOOSE
const mongoose = require('mongoose');

//MODELS SCHEMAS AS NOTHING TO DO WITH GRAPHQL SCHEMAS !!
const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  job: {
    type: String,
  },
  mainProject: {
    type: String,
  },
});

module.exports = mongoose.model('Client', ClientSchema);