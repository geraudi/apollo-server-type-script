import { addMockFunctionsToSchema, makeExecutableSchema } from 'apollo-server'
import { GraphQLSchema } from 'graphql'
import userQuery from './query'
import userType from './type'

const userSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [userType, userQuery],
})
addMockFunctionsToSchema({ schema: userSchema })

export default userSchema
