//CONNECT TO MONGOOSE
const mongoose = require('mongoose');

//MODELS SCHEMAS AS NOTHING TO DO WITH GRAPHQL SCHEMAS !!
const ClientSchema = new mongoose.Schema({
  name: {
    // type: String, unique: true, required: true
    type: String
  },
  userName: {
    type: String
  },
  password: {type: String},
  img:
  {
      data: Buffer,
      contentType: String
  },
  email: {
    type: String
  },
  bio: {
    type: String
  },
  industryCat: {
    type: String
  },
  mainProject: {
    type: String
  },
  linkedinUrl: {
    type: String
  },
  location: {
    type: String,
  },
});

module.exports = mongoose.model('Client', ClientSchema);