import Neo4JConnector from './connectors/neo4j'
import { IServerParams } from './server'
import * as dotenv from 'dotenv'

dotenv.config()

export interface IAppContext {
  neo4j: any
  token: string
}

/**
 * NEO4J connector
 */
const neo4j = new Neo4JConnector({
  uri: process.env.NEO4J_URI,
  user: process.env.NEO4J_USER,
  password: process.env.NEO4J_PASSWORD,
})

const context = (params: IServerParams) => {
  return {
    neo4j,
    token: 'azerty',
  }
}

export default context
