//IMPORT DATA from sampleData.js
// const { projects, clients } = require('../sampleData')

//IMPORT MONGOOSE MODELS
const Client = require('../models/Client')
const Project = require('../models/Project')


//-------------------- GRAPHQL SETUP
//WHEN HAVING NUMEROUS DATA AS PROJECTS & CLIENTS YOU NEED TYPE AS REF
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');

//CLIENT TYPE: convention use Capitalize 
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString}
    })
});

//PROJECT TYPE: convention use Capitalize 
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {type: GraphQLString},
        //create relation btw types to get clients ID
        client: {
            type: ClientType,
            resolve(parent, args) {
              return Client.findById(parent.clientId);
                //return clients.find(client => client.id === parent.clientId); if you want to access data from sampleData.js
            }
        }
    })
});

//TO GET: CREATE ROOT QUERY OBJECTS + we need to pass args as argument to get ID by client
//resolve may be seen as the return with is a fct and has a parent's value and args
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        //all clients query using a list of ClientType
        clients: {
        type: new GraphQLList(ClientType),
        resolve(parent, args) {
            //Query to mongoose models and because we want all data from client we don't specify in the find()
            return Client.find();
            // return clients;
        }
        },
        //single client query
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                //when using a single data sample
                return Client.findById(args.id);
                // return clients.find(client => client.id === args.id); if you want to access data from sampleData.js

            }
        },
           //all projects query using a list of ProjectType
           projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                //Query to mongoose models and because we want all data from project we don't specify in the find()
                return Project.find();
                // return projects; if you want to access data from sampleData.js
            }
            },
            //single project query
            project: {
                type: ProjectType,
                args: { id: { type: GraphQLID }},
                resolve(parent, args) {
                    //when using a single data sample
                    return Project.findById(args.id);
                    // return projects.find(project => project.id === args.id); if you want to access data from sampleData.js
    
                }
            }
    }
});

//--------------- MUTATIONS
//everything is an object type
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      //ADD CLIENT
      addClient: {
        type: ClientType,
        args: {
            //if you want input as mandatory use GraphQLNonNull
          name: { type: GraphQLNonNull(GraphQLString) },
          email: { type: GraphQLNonNull(GraphQLString) },
          phone: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
            const client = new Client({
              name: args.name,
              email: args.email,
              phone: args.phone,
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
      
              return Client.findByIdAndRemove(args.id);
            },
          },
          //ADD PROJECT
          addProject: {
            type: ProjectType,
            args: {
              name: { type: GraphQLNonNull(GraphQLString) },
              description: { type: GraphQLNonNull(GraphQLString) },
              status: {
                type: new GraphQLEnumType({
                    //name should be unique and self-explanatory 
                  name: 'ProjectStatus',
                  values: {
                    new: { value: 'Not Started' },
                    progress: { value: 'In Progress' },
                    backLog: { value: 'BackLog' },
                    springLog: { value: 'SprintLog' },
                    progress: { value: 'In Progress' },
                    review: { value: 'Under Review' },
                    validation: { value: 'Waiting Validation' },
                    completed: { value: 'Completed' },
                    discarded: { value: 'Discarded' },
                  },
                }),
                defaultValue: 'Not Started',
              },
              //clientId is mandatory as well
              clientId: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
              const project = new Project({
                name: args.name,
                description: args.description,
                status: args.status,
                clientId: args.clientId,
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
              status: {
                type: new GraphQLEnumType({
                    //once again, the name has to be unique
                  name: 'ProjectStatusUpdate',
                  values: {
                    new: { value: 'Not Started' },
                    progress: { value: 'In Progress' },
                    backLog: { value: 'BackLog' },
                    springLog: { value: 'SprintLog' },
                    progress: { value: 'In Progress' },
                    review: { value: 'Under Review' },
                    validation: { value: 'Waiting Validation' },
                    completed: { value: 'Completed' },
                    discarded: { value: 'Discarded' },
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
                  },
                },
                //if not there, it gonna creates a new project
                { new: true }
              );
            },
          },
}});




//To be able to use this query now we need to export it as a schema
module.exports = new GraphQLSchema({
    query: RootQuery, mutation
})
