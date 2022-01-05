const bodyParser = require("body-parser");
const {graphqlHTTP} = require("express-graphql");
const graphqlSchema = require("../schema");

module.exports = function (app) {

    require('./mongoDb')
    require('./corsHandle')(app)
    require('./errorHandle')(app)

    app.use(bodyParser.json());

    app.use('/graphql'/*, graphqlRoute*/, graphqlHTTP({
        schema: graphqlSchema,
        graphiql: process.env.NODE_ENV === 'development'
    }));

}

