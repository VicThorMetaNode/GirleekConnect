//CONNECT TO MONGOOSE
const mongoose = require('mongoose');

//MODELS SCHEMAS AS NOTHING TO DO WITH GRAPHQL SCHEMAS !!
const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Not Started', 'BackLog', 'SprintLog', 'In Progress', 'Under Review', 'Waiting Validation', 'Completed', 'Discarded'],
  },
  clientId: {
    //the ObjectId is generated automatically 
    type: mongoose.Schema.Types.ObjectId,
    //but to create connection btw Project & Client we use ref
    ref: 'Client',
  }
});

module.exports = mongoose.model('Project', ProjectSchema);