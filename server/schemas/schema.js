//IMPORT DATA from sampleData.js
// const { projects, clients } = require('../sampleData')

//IMPORT MONGOOSE MODELS
const Coach = require("../models/Coach");
const Client = require("../models/Client");
const Project = require("../models/Project");
const Event = require("../models/Event");
const Admin = require("../models/Admin");

const bcrypt = require("bcryptjs");
//-------------------- GRAPHQL SETUP
//WHEN HAVING NUMEROUS DATA AS PROJECTS & CLIENTS YOU NEED TYPE AS REF
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");

// ----------------- TYPES -------------

//COACH TYPE: convention use Capitalize
const AdminType = new GraphQLObjectType({
  name: "Admin",
  fields: () => ({
    id: { type: GraphQLID },
    userName: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const CoachType = new GraphQLObjectType({
  name: "Coach",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    bio: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    job: { type: GraphQLString },
    industryCat: { type: GraphQLString },
    mainProject: { type: GraphQLString },
    linkedinUrl: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
  }),
});

//CLIENT TYPE: convention use Capitalize
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    userName: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    bio: { type: GraphQLString },
    industryCat: { type: GraphQLString },
    location: { type: GraphQLString },
    mainProject: { type: GraphQLString },
    linkedinUrl: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
  }),
});

//PROJECT TYPE: convention use Capitalize
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    //create relation btw types to get coaches ID
    coach: {
      type: CoachType,
      resolve(parent, args) {
        return Coach.findById(parent.coachId);
        //return clients.find(client => client.id === parent.clientId); if you want to access data from sampleData.js
      },
    },
  }),
});

//EVENT TYPE: convention use Capitalize
const EventType = new GraphQLObjectType({
  name: "Event",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    dateOfCreation: { type: GraphQLString },
    cat: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    //create relation btw types to get coaches ID
    coach: {
      type: CoachType,
      resolve(parent, args) {
        return Coach.findById(parent.coachId);
        //return clients.find(client => client.id === parent.clientId); if you want to access data from sampleData.js
      },
    },
  }),
});

// ----------------- QUERIES -------------
//TO GET: CREATE ROOT QUERY OBJECTS + we need to pass args as argument to get ID by type
//resolve may be seen as the return with is a fct and has a parent's value and args
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //all admins query using a list of CoachType
    admins: {
      type: new GraphQLList(CoachType),
      resolve(parent, args) {
        //Query to mongoose models and because we want all data from coach we don't specify in the find()
        return Admin.find();
        // return admins;
      },
    },
    //single admin query
    admin: {
      type: AdminType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //when using a single data sample
        return Admin.findById(args.id);
      },
    },
    //all coaches query using a list of CoachType
    coaches: {
      type: new GraphQLList(CoachType),
      resolve(parent, args) {
        //Query to mongoose models and because we want all data from coach we don't specify in the find()
        return Coach.find();
        // return coaches;
      },
    },
    //single coach query
    coach: {
      type: CoachType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //when using a single data sample
        return Coach.findById(args.id);
        // return clients.find(client => client.id === args.id); if you want to access data from sampleData.js
      },
    },
    //all clients query using a list of ClientType
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        //Query to mongoose models and because we want all data from coach we don't specify in the find()
        return Client.find();
        // return coaches;
      },
    },
    //single client query
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //when using a single data sample
        return Client.findById(args.id);
        // return clients.find(client => client.id === args.id); if you want to access data from sampleData.js
      },
    },
    //all projects query using a list of ProjectType
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        //Query to mongoose models and because we want all data from project we don't specify in the find()
        return Project.find();
        // return projects; if you want to access data from sampleData.js
      },
    },
    //single project query
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //when using a single data sample
        return Project.findById(args.id);
        // return projects.find(project => project.id === args.id); if you want to access data from sampleData.js
      },
    },
    //all events query using a list of EventType
    events: {
      type: new GraphQLList(EventType),
      resolve(parent, args) {
        //Query to mongoose models and because we want all data from event we don't specify in the find()
        return Event.find();
        // return projects; if you want to access data from sampleData.js
      },
    },
    //single event query
    event: {
      type: EventType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //when using a single data sample
        return Event.findById(args.id);
        // return projects.find(project => project.id === args.id); if you want to access data from sampleData.js
      },
    },
  },
});

//--------------- MUTATIONS
//everything is an object type
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //------ ADD ADMIN
    // addAdmin: {
    //   type: AdminType,
    //   args: {
    //     //if you want input as MANDATORY use GraphQLNonNull
    //     userName: { type: GraphQLNonNull(GraphQLString) },
    //     password: { type: GraphQLNonNull(GraphQLString) },
    //   },
    //   resolve(parent, args) {

    //     const admin = new Admin({
    //       userName: args.userName,
    //       password: args.password,
    //     });
    //     return admin.save();
    //   },
    // },

    addAdmin: {
      type: AdminType,
      args: {
        userName: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const hashedPassword = await bcrypt.hash(args.password, 10);

        const admin = new Admin({
          userName: args.userName,
          password: hashedPassword,
        });

        return admin.save();
      },
    },

    //------ ADD COACH
    addCoach: {
      type: CoachType,
      args: {
        //if you want input as MANDATORY use GraphQLNonNull
        name: { type: GraphQLNonNull(GraphQLString) },
        bio: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
        job: { type: GraphQLNonNull(GraphQLString) },
        industryCat: { type: GraphQLNonNull(GraphQLString) },
        mainProject: { type: GraphQLNonNull(GraphQLString) },
        linkedinUrl: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
      },
      resolve(parent, args) {
        const coach = new Coach({
          name: args.name,
          email: args.email,
          phone: args.phone,
          password: args.password,
          bio: args.bio,
          job: args.job,
          industryCat: args.industryCat,
          mainProject: args.mainProject,
          linkedinUrl: args.linkedinUrl,
          imageUrl: args.imageUrl,
        });
        return coach.save();
      },
    },
    //DELETE COACH
    deleteCoach: {
      type: CoachType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Coach.findByIdAndRemove(args.id);
        // Project.find({ clientId: args.id }).then((projects) => {
        //   projects.forEach((project) => {
        //     project.remove();
        //   });
        // });
      },
    },
    //UPDATE COACH
    updateCoach: {
      type: CoachType,
      args: {
        //only the id is mandatory for obvious reasons
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        bio: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        phone: { type: GraphQLString },
        job: { type: GraphQLString },
        industryCat: { type: GraphQLString },
        mainProject: { type: GraphQLString },
        linkedinUrl: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Coach.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              email: args.email,
              phone: args.phone,
              password: args.password,
              bio: args.bio,
              job: args.job,
              industryCat: args.industryCa,
              mainProject: args.mainProject,
              linkedinUrl: linkedinUrl,
              imageUrl: args.imageUrl,
            },
          },
          //if not there, it gonna creates a new coach
          { new: true }
        );
      },
    },

    //---------- ADD CLIENT
    addClient: {
      type: ClientType,
      args: {
        //if you want input as mandatory use GraphQLNonNull
        name: { type: GraphQLNonNull(GraphQLString) },
        userName: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        bio: { type: GraphQLNonNull(GraphQLString) },
        industryCat: { type: GraphQLNonNull(GraphQLString) },
        mainProject: { type: GraphQLNonNull(GraphQLString) },
        location: { type: GraphQLString },
        linkedinUrl: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
      },
      resolve(parent, args) {
        //unique:true equivalent
        // const existingClient = Client.findOne({
        //   $or: [
        //     { name: args.name, userName: args.userName, email: args.email },
        //     { linkedinUrl: args.linkedinUrl },
        //   ],
        // });
        //In MongoDB, the $or operator is used in a query to specify that the documents returned should match at least one of the conditions specified in the operator.
        // if (existingClient) {
        //   throw new Error(
        //     "A user with that name/username or email or Linkedin account already exists"
        //   );
        // }

        const client = new Client({
          name: args.name,
          userName: args.userName,
          password: args.password,
          email: args.email,
          bio: args.bio,
          industryCat: args.industryCa,
          mainProject: args.mainProject,
          location: args.location,
          linkedinUrl: args.linkedinUrl,
          imageUrl: args.imageUrl,
        });

        return client.save();
      },
    },
    //DELETE CLIENT
    deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Client.findByIdAndRemove(args.id);
        //   Project.find({ clientId: args.id }).then((projects) => {
        //     projects.forEach((project) => {
        //       project.remove();
        //     });
        //   });
      },
    },
    //UPDATE CLIENT
    updateClient: {
      type: ClientType,
      args: {
        //only the id is mandatory for obvious reasons
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        userName: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        bio: { type: GraphQLString },
        industryCat: { type: GraphQLString },
        mainProject: { type: GraphQLString },
        location: { type: GraphQLString },
        linkedinUrl: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Client.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              userName: args.userName,
              password: args.password,
              email: args.email,
              bio: args.bio,
              industryCat: args.industryCa,
              mainProject: args.mainProject,
              location: args.location,
              linkedinUrl: args.linkedinUrl,
              imageUrl: args.imageUrl,
            },
          },
          //if not there, it gonna creates a new client
          { new: true }
        );
      },
    },

    //---------- ADD PROJECT
    addProject: {
      type: ProjectType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        imageUrl: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            //name should be unique and self-explanatory
            name: "ProjectStatus",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              backLog: { value: "BackLog" },
              springLog: { value: "SprintLog" },
              progress: { value: "In Progress" },
              review: { value: "Under Review" },
              validation: { value: "Waiting Validation" },
              completed: { value: "Completed" },
              discarded: { value: "Discarded" },
            },
          }),
          defaultValue: "Not Started",
        },
        //coachId is mandatory as well
        coachId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const project = new Project({
          name: args.name,
          description: args.description,
          status: args.status,
          coachId: args.coachId,
          imageUrl: args.imageUrl,
        });

        return project.save();
      },
    },
    //DELETE PROJECT
    deleteProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Project.findByIdAndRemove(args.id);
      },
    },
    //UPDATE PROJECT
    updateProject: {
      type: ProjectType,
      args: {
        //only the id is mandatory for obvious reasons
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            //once again, the name has to be unique
            name: "ProjectStatusUpdate",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              backLog: { value: "BackLog" },
              springLog: { value: "SprintLog" },
              progress: { value: "In Progress" },
              review: { value: "Under Review" },
              validation: { value: "Waiting Validation" },
              completed: { value: "Completed" },
              discarded: { value: "Discarded" },
            },
          }),
        },
      },
      resolve(parent, args) {
        return Project.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
              imageUrl: args.imageUrl,
            },
          },
          //if not there, it gonna creates a new project
          { new: true }
        );
      },
    },

    //---------- ADD EVENT
    addEvent: {
      type: EventType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        imageUrl: { type: GraphQLNonNull(GraphQLString) },
        cat: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            //name should be unique and self-explanatory
            name: "EventStatus",
            values: {
              new: { value: "Coming Soon" },
              now: { value: "Live Now" },
              past: { value: "Past" },
            },
          }),
          defaultValue: "Coming Soon",
        },
        //coachId is mandatory as well
        coachId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const event = new Event({
          name: args.name,
          description: args.description,
          status: args.status,
          cat: args.imageUrl,
          imageUrl: args.imageUrl,
          coachId: args.coachId,
        });

        return event.save();
      },
    },
    //DELETE EVENT
    deleteEvent: {
      type: EventType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Event.findByIdAndRemove(args.id);
      },
    },
    //UPDATE EVENT
    updateEvent: {
      type: EventType,
      args: {
        //only the id is mandatory for obvious reasons
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
        cat: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            //once again, the name has to be unique
            name: "EventStatusUpdate",
            values: {
              new: { value: "Coming Soon" },
              now: { value: "Live Now" },
              past: { value: "Past" },
            },
          }),
        },
      },
      resolve(parent, args) {
        return Event.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
              cat: args.imageUrl,
              imageUrl: args.imageUrl,
            },
          },
          //if not there, it gonna creates a new event
          { new: true }
        );
      },
    },
  },
});

//To be able to use this query now we need to export it as a schema
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
