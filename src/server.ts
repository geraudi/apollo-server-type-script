import { ApolloServer, PubSub } from 'apollo-server'
import schema from './schema'
import context from './context'

export const pubsub = new PubSub()

const server = new ApolloServer({
  schema,
  context,
  tracing: true,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
