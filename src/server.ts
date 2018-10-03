import { ApolloServer, PubSub } from 'apollo-server'
import schema from './schema'
import contextFunction from './contextFunction'

export const pubsub = new PubSub()

const server = new ApolloServer({
  schema,
  context: async ({ req }: any) => {
    return undefined
  },
  tracing: true,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
