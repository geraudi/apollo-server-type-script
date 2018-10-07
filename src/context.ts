import getNeo4jSession from './connectors/neo4j'
import { IServerParams } from './server'
import Users from './models/Users'
import * as Neo4J from 'neo4j-driver'

export interface IAppContext {
  token: string
  models: []
}

const context = (params: IServerParams) => {
  const neo4jSession: Neo4J.v1.Session = getNeo4jSession()
  const users = new Users(neo4jSession)

  return {
    token: '',
    models: { users },
  }
}

export default context
