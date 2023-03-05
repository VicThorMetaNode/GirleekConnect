import { PrismaClient } from '@prisma/client';
import  express  from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();



const typeDefs = `
    type Admin {
        id: String!
        name: String!
        password: String!
        created_at: DateTime!
        updated_at: DateTime!
        is_deleted: Boolean!
      }

      type Client {
        id: Int!
        name: String!
        username: String!
        password: String!
        img: String!
        email: String!
        bio: String
        industryCat: IndustryCategory = BUSINESS
        mainProject: String
        linkedinUrl: String @unique
        location: String
        created_at: DateTime!
        updated_at: DateTime! @updatedAt
        is_deleted: Boolean! @default(value: false)
      }

      type Coach {
        id: Int!
        name: String!
        password: String!
        img: String!
        email: String!
        bio: String
        industryCat: IndustryCategory = EDUCATION
        mainProject: String
        linkedinUrl: String! @unique
        location: String
        created_at: DateTime!
        updated_at: DateTime! @updatedAt
        is_deleted: Boolean! @default(value: false)
        projects: [Project!]!
        events: [Event!]!
      }

      
      type Project {
        id: Int!
        name: String!
        img: Bytes!
        description: String!
        status: ProjectStatus!
        industryCat: IndustryCategory!
        coach: Coach @relation(fields: [coachId], references: [id])
        coachId: Int!
        start_time: DateTime!
        end_time: DateTime!
        createdAt: DateTime!
        updatedAt: DateTime!
        isDeleted: Boolean!
      }

      
      type Event {
        id: Int!
        name: String!
        img: Bytes!
        description: String!
        status: EventStatus!
        industryCat: IndustryCategory!
        coach: Coach @relation(fields: [coachId], references: [id])
        coachId: Int!
        start_time: DateTime!
        end_time: DateTime!
        createdAt: DateTime!
        updatedAt: DateTime!
        isDeleted: Boolean!
      }



      enum ProjectStatus{
        NOT_STARTED
        BACKLOG
        SPRINTLOG
        IN_PROGRESS
        UNDER_REVIEW
        WAITING_VALIDATION
        COMPLETED
        DISCARDED
      }

      enum EventStatus{
        NOT_STARTED
        BACKLOG
        SPRINTLOG
        IN_PROGRESS
        UNDER_REVIEW
        WAITING_VALIDATION
        COMPLETED
        DISCARDED
      }


      enum IndustryCategory {
        BUSINESS
        FINANCE
        EDUCATION
        TECHNOLOGY
        HEALTHCARE
      }

  type Query {
    allAdmins: [Admin!]!
    allClients: [Client!]!
    allCoaches: [Coach!]!
    allProjects: [Project!]!
    allEvents: [Event!]!
  }

  type Mutation {
    createClient(name: String!, username: String!, password: String!, img: String!, email: String!, bio: String, industryCat: IndustryCategory = BUSINESS, mainProject: String, linkedinUrl: String!, location: String): Client!
    updateClient(id: Int!, name: String, username: String, password: String, img: String, email: String, bio: String, industryCat: IndustryCategory, mainProject: String, linkedinUrl: String, location: String): Client!
    deleteClient(id: Int!): Client!

    createCoach(name: String!, password: String!, img: String!, email: String!, bio: String, industryCat: IndustryCategory, mainProject: String, linkedinUrl: String!, location: String): Coach!
  updateCoach(id: Int!, name: String, password: String, img: String, email: String, bio: String, industryCat: IndustryCategory, mainProject: String, linkedinUrl: String, location: String): Coach!
  deleteCoach(id: Int!): Coach!

    createProject(name: String!, img: Bytes!, description: String!, status: ProjectStatus!, industryCat: IndustryCategory!, coachId: Int!, start_time: DateTime!, end_time: DateTime!): Project!
  updateProject(id: Int!, name: String, img: Bytes, description: String, status: ProjectStatus, industryCat: IndustryCategory, coachId: Int, start_time: DateTime, end_time: DateTime): Project!
  deleteProject(id: Int!): Project!

  createEvent(name: String!, img: Bytes!, description: String!, status: EventStatus!, industryCat: IndustryCategory!, coachId: Int!, start_time: DateTime!, end_time: DateTime!): Event!
  updateEvent(id: Int!, name: String, img: Bytes, description: String, status: EventStatus, industryCat: IndustryCategory, coachId: Int, start_time: DateTime, end_time: DateTime): Event!
  deleteEvent(id: Int!): Event!

  createAdmin(name: String!, password: String!): Admin!
  updateAdmin(id: String!, name: String, password: String): Admin!
  deleteAdmin(id: String!): Admin!
  }
`;

const resolvers = {
    Query: {
      admins: async (parent, args, context) => {
        return context.prisma.admin.findMany();
      },
      admin: async (parent, args, context) => {
        return context.prisma.admin.findUnique({
          where: { id: parseInt(args.id) }
        });
      },
      coaches: async (parent, args, context) => {
        return context.prisma.coach.findMany();
      },
      coach: async (parent, args, context) => {
        return context.prisma.coach.findUnique({
          where: { id: parseInt(args.id) }
        });
      },
      clients: async (parent, args, context) => {
        return context.prisma.client.findMany();
      },
      client: async (parent, args, context) => {
        return context.prisma.client.findUnique({
          where: { id: parseInt(args.id) }
        });
      },
      projects: async (parent, args, context) => {
        return context.prisma.project.findMany();
      },
      project: async (parent, args, context) => {
        return context.prisma.project.findUnique({
          where: { id: parseInt(args.id) }
        });
      },
      events: async (parent, args, context) => {
        return context.prisma.event.findMany();
      },
      event: async (parent, args, context) => {
        return context.prisma.event.findUnique({
          where: { id: parseInt(args.id) }
        });
      }
    },
    Mutation: {
        createAdmin: async (_, { name, password }, { prisma }) => {
            const admin = await prisma.admin.create({
              data: {
                name,
                password,
              },
            })
            return admin
          },
          updateAdmin: async (_, { id, name, password }, { prisma }) => {
            const admin = await prisma.admin.update({
              where: { id },
              data: {
                name,
                password,
              },
            })
            return admin
          },
          deleteAdmin: async (_, { id }, { prisma }) => {
            const admin = await prisma.admin.delete({
              where: { id },
            })
            return admin
          },
        createClient: async (_, { name, username, password, img, email, bio, industryCat, mainProject, linkedinUrl, location }, { prisma }) => {
          const client = await prisma.client.create({
            data: {
              name,
              username,
              password,
              img,
              email,
              bio,
              industryCat,
              mainProject,
              linkedinUrl,
              location,
            },
          })
          return client
        },
        updateClient: async (_, { id, name, username, password, img, email, bio, industryCat, mainProject, linkedinUrl, location }, { prisma }) => {
          const client = await prisma.client.update({
            where: { id },
            data: {
              name,
              username,
              password,
              img,
              email,
              bio,
              industryCat,
              mainProject,
              linkedinUrl,
              location,
            },
          })
          return client
        },
        deleteClient: async (_, { id }, { prisma }) => {
          const client = await prisma.client.delete({
            where: { id },
          })
          return client
        },
        createCoach: async (_, { name, password, img, email, bio, industryCat, mainProject, linkedinUrl, location }, { prisma }) => {
            const coach = await prisma.coach.create({
              data: {
                name,
                password,
                img,
                email,
                bio,
                industryCat,
                mainProject,
                linkedinUrl,
                location,
              },
            })
            return coach
          },
          updateCoach: async (_, { id, name, password, img, email, bio, industryCat, mainProject, linkedinUrl, location }, { prisma }) => {
            const coach = await prisma.coach.update({
              where: { id },
              data: {
                name,
                password,
                img,
                email,
                bio,
                industryCat,
                mainProject,
                linkedinUrl,
                location,
              },
            })
            return coach
          },
          deleteCoach: async (_, { id }, { prisma }) => {
            const coach = await prisma.coach.delete({
              where: { id },
            })
            return coach
          },



        createProject: async (_, { name, img, description, status, industryCat, coachId, start_time, end_time }, { prisma }) => {
            const project = await prisma.project.create({
              data: {
                name,
                img,
                description,
                status,
                industryCat,
                coach: { connect: { id: coachId } },
                start_time,
                end_time,
              },
            })
            return project
          },
          updateProject: async (_, { id, name, img, description, status, industryCat,  start_time, end_time }, { prisma }) => {
            const project = await prisma.project.update({
              where: { id },
              data: {
                name,
                img,
                description,
                status,
                industryCat,
                
                start_time,
                end_time,
              },
            })
            return project
          },
          deleteProject: async (_, { id }, { prisma }) => {
            const project = await prisma.project.delete({
              where: { id },
            })
            return project
          },
          createEvent: async (_, { name, img, description, status, industryCat, coachId, start_time, end_time }, { prisma }) => {
            const event = await prisma.event.create({
              data: {
                name,
                img,
                description,
                status,
                industryCat,
                coach: { connect: { id: coachId } },
                start_time,
                end_time,
              },
            })
            return event
          },
          updateEvent: async (_, { id, name, img, description, status, industryCat, coachId, start_time, end_time }, { prisma }) => {
            const event = await prisma.event.update({
              where: { id },
              data: {
                name,
                img,
                description,
                status,
                industryCat,
                start_time,
                end_time,
              },
            })
            return event
          },
          deleteEvent: async (_, { id }, { prisma }) => {
            const event = await prisma.event.delete({
              where: { id },
            })
            return event
          },


      },
  };


  export const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
  });

  const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
}));

app.listen(4000, () => {
    console.log(`Server running on port 4000`);
  });