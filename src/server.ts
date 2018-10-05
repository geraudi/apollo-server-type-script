import { ApolloServer, PubSub } from 'apollo-server'
import schema from './schema'
import context from './context'
import { Request, Response } from 'express'
export const pubsub = new PubSub()

export interface IServerParams {
  req: Request
  res: Response
}

const server = new ApolloServer({
  schema,
  context: (params: IServerParams) => context(params),
  tracing: true,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
