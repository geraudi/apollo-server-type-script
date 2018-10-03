import { ApolloServer, PubSub } from 'apollo-server-express'
import schema from './schema'
import express from 'express'

const app: express.Application = express()
const PORT = 3000

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT)
})
