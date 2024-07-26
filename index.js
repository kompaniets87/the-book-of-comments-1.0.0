const {apoloserver} = require('apollo-server')
const mongoose = require('mongoose')
const typeDefs = require ('./graphql/typeDef')
const resolvers = require('./graphql/resolvers')

const MONGODB = "mongodb+srv://ludakompaniiets:31528Luda@cluster0.y7o9izx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const  server = new Apolloserver({
typeDefs,
    resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB Connection successful");
        return server.listen({port: 5000})
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    })
