//CONNECT TO MONGOOSE
const mongoose = require('mongoose');

//MODELS SCHEMAS AS NOTHING TO DO WITH GRAPHQL SCHEMAS !!
const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  img:
  {
      data: Buffer,
      contentType: String
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  function: {
    type: String,
  },
  mainProject: {
    type: String,
  },
});

module.exports = mongoose.model('Admin', AdminSchema);