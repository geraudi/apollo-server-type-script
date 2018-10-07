import * as Neo4J from 'neo4j-driver'
import * as dotenv from 'dotenv'

dotenv.config()
const uri: string = process.env.NEO4J_URI || ''
const user: string = process.env.NEO4J_USER || ''
const password: string = process.env.NEO4J_PASSWORD || ''

if (uri === '') {
  throw new Error('Neo4j uri is required')
}
if (user === '') {
  throw new Error('Neo4j user is required')
}
if (password === '') {
  throw new Error('Neo4j password is required')
}

let session: Neo4J.v1.Session

const getNeo4JSession = (): Neo4J.v1.Session => {
  if (!session) {
    const driver = Neo4J.v1.driver(uri, Neo4J.v1.auth.basic(user, password))
    session = driver.session()
  }
  return session
}

export default getNeo4JSession
