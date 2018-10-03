import { GraphQLSchema } from 'graphql'
import { mergeSchemas } from 'graphql-tools'
import resolvers from './resolvers'
import schemas from './schemas'

const schema: GraphQLSchema = mergeSchemas({
  schemas,
  resolvers,
})

export default schema
