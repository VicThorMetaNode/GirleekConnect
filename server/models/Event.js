//CONNECT TO MONGOOSE
const mongoose = require('mongoose');

//MODELS SCHEMAS AS NOTHING TO DO WITH GRAPHQL SCHEMAS !!
const EventSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Coming Soon', 'Live Now', 'Past'],
  },
  dateOfCreation: {
   Date
  },
  cat: {
    type: String,
    enum: ['Webinar', 'Coaching', 'Masterclass','Networking','Talk','Partner', 'Workshop', 'Other'],
  },
  coachId: {
    //the ObjectId is generated automatically 
    type: mongoose.Schema.Types.ObjectId,
    //but to create connection btw Project & Client we use ref
    ref: 'Coach',
  }
});

module.exports = mongoose.model('Event', EventSchema);