import bcrypt from 'bcrypt'
import * as Neo4J from 'neo4j-driver'

export interface IUser {
  id: number
  name?: string
  email?: string
  roles?: string[]
}

export default class Users {
  public db: Neo4J.v1.Session

  constructor(session: Neo4J.v1.Session) {
    this.db = session
  }

  public getById = (id: number) => undefined

  public getAll = async () => {
    const query: string = 'MATCH (user:User) RETURN user LIMIT 25;'
    const result = await this.db.run(query)
    return result.records.map((record: any) => {
      return record.get('user').properties
    })
  }

  public add = async (email: string, password: string, firstName: string) => {
    const hash = await bcrypt.hash(password, 10)

    const params = {
      email,
      password: hash,
      firstName,
    }

    const query = `
      CREATE (user:User { 
        email: $email, 
        password: $password, 
        firstName: $firstName
      })
      RETURN user;
    `

    const result = await this.db.run(query, params)
    return result.records[0] ? result.records[0].get('user').properties : {}
  }
}
