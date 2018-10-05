import * as Neo4J from 'neo4j-driver'

export default class Neo4JConnector {
  public session: Neo4J.v1.Session
  private driver: Neo4J.v1.Driver

  constructor({ uri, user, password }: any) {
    this.driver = Neo4J.v1.driver(uri, Neo4J.v1.auth.basic(user, password))
    this.session = this.driver.session()
  }
}

/*
Usage :
async function allUsers() {
  const session = neo4j.session
  const query: string = 'MATCH (user:User) RETURN user LIMIT 25;'
  const result = await session.run(query)
  return result.records.map(record => {
    return record.get('user').properties
  })
}

allUsers().then(result => console.log(result))
*/
