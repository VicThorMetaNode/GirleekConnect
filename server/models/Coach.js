//CONNECT TO MONGOOSE
const mongoose = require('mongoose');

//MODELS SCHEMAS AS NOTHING TO DO WITH GRAPHQL SCHEMAS !!
const CoachSchema = new mongoose.Schema({
  name: {
    type: String, unique: true, required: true
  },
  img:
  {
      data: Buffer,
      contentType: String
  },
  password: {type: String, required: true},
  email: {
    type: String, unique: true, required: true
  },
  phone: {
    type: String, unique: true, required: true
  },
  job: {
    type: String,  required: true
  },
  bio: {
    type: String, required: true
  },
  industryCat: {
    type: String, required: true
  },
  linkedinUrl: {
    type: String, unique: true
  },
  mainProject: {
    type: String,  required: true
  },
});

module.exports = mongoose.model('Coach', CoachSchema);