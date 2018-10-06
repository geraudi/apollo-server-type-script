import { addMockFunctionsToSchema, makeExecutableSchema } from 'apollo-server'
import { GraphQLSchema } from 'graphql'
import userQuery from './query'
import userType from './type'
import userMutation from './mutation'

const userSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [userType, userQuery, userMutation],
})
addMockFunctionsToSchema({ schema: userSchema })

export default userSchema
