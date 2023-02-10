//IMPORT DATA from sampleData.js
// const { projects, clients } = require('../sampleData')

//IMPORT MONGOOSE MODELS
const Client = require('../models/Client')
const Project = require('../models/Project')


//GRAPHQL SETUP
//WHEN HAVING NUMEROUS DATA AS PROJECTS & CLIENTS YOU NEED TYPE AS REF
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList} = require('graphql');

//Client Type: convention use Capitalize 
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString}
    })
});

//Project Type: convention use Capitalize 
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
//To be able to use this query now we need to export it as a schema
module.exports = new GraphQLSchema({
    query: RootQuery
})
