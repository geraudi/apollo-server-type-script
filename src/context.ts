import Neo4JConnector from './connectors/neo4j'
import * as dotenv from 'dotenv'
import { IServerParams } from './server'
import * as models from './models'

export interface IAppContext {
  neo4j: any
  token: string
  models: []
}

dotenv.config()
const uri: string = process.env.NEO4J_URI || ''
const user: string = process.env.NEO4J_USER || ''
const password: string = process.env.NEO4J_PASSWORD || ''

/**
 * NEO4J connector
 */
const neo4j = new Neo4JConnector({
  uri,
  user,
  password,
})

const users = new models.Users(neo4j)

const context = (params: IServerParams) => {
  return {
    neo4j,
    token: 'azerty',
    models: { users },
  }
}

export default context
