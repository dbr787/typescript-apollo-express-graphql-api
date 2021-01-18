import 'graphql-import-node';
import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolverMap';
import { GraphQLSchema } from 'graphql';

const typeDefs = gql`
  type Query {
    status: String!
  }
`;

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema
