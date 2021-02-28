const app = require('express')();
const { makeExecutableSchema } = require('graphql-tools');
const { graphqlHTTP } = require('express-graphql');
const { readSchema } = require('./lib/fn');
const rootResolver = require('./lib/resolvers/rootResolver');

const port = 4000;

const typeDefs = readSchema('schema');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: [rootResolver],
});

app.use('/gql', graphqlHTTP({
  schema,
  rootValue: {},
  graphiql: true,
}));

/* eslint no-console: 0 */
app.listen(port, () => console.log('listening on port 4000'));
