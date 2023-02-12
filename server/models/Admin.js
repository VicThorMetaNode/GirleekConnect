//CONNECT TO MONGOOSE
const mongoose = require('mongoose');

//MODELS SCHEMAS AS NOTHING TO DO WITH GRAPHQL SCHEMAS !!
const AdminSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  password: {
    type: String,
  },
  
});

module.exports = mongoose.model('Admin', AdminSchema);