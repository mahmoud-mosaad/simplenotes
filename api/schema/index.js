const graphql = require('graphql');
const _ = require('lodash');
const Note = require('../models/noteModel');
const Author = require('../models/userModel');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const NoteType = new GraphQLObjectType({
    name: 'Note',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        content: {type: GraphQLString},
        color: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args){
                //return _.find(authors, {id:parent.authorId});
                return Author.findById(parent.authorId);
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        fullname: {type: GraphQLString},
        email: {type: GraphQLString},
        notes: {
            type: new GraphQLList(NoteType),
            resolve(parent, args){
                //return _.filter(books, {authorId: parent.id});
                return Note.find({ authorId: parent.id });
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        note:{
            type: NoteType,
            args:{id:{type:GraphQLID}},
            resolve(parent, args){
                // code to get data from database or other sources
                //return _.find(books, {id:args.id});
                return Note.findById(args.id);
            }
        },
        author:{
            type: AuthorType,
            args: {id:{type:GraphQLID}},
            resolve(parent, args){
                //return _.find(authors, {id:args.id});
                return Author.findById(args.id);
            }
        },
        notes:{
            type: new GraphQLList(NoteType),
            resolve(parent, args){
                //return books;
                return Note.find({});
            }
        },
        authors:{
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                //return authors;
                return Author.find({});
            }
        }
    }
});


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                fullname: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                let author = new Author({
                    fullname: args.fullname,
                    email: args.email
                });
                return author.save();
            }
        },
        addNote: {
            type: NoteType,
            args: {
                title: {type: new GraphQLNonNull(GraphQLString)},
                content: {type: new GraphQLNonNull(GraphQLString)},
                color: {type: new GraphQLNonNull(GraphQLString)},
                authorId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                let note = new Note({
                    title: args.title,
                    content: args.content,
                    color: args.color,
                    authorId: args.authorId
                });
                return note.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
