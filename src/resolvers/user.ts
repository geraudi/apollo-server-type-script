const userResolver = {
  Query: {
    users: async (root: any, args: any, context: any) => {
      const { neo4j } = context
      const allUsers = async () => {
        const session = neo4j.session
        const query: string = 'MATCH (user:User) RETURN user LIMIT 25;'
        const result = await session.run(query)
        return result.records.map((record: any) => {
          return record.get('user').properties
        })
      }
      return allUsers().then(result => result)
    },
    validateUser(root: any, args: any) {
      return {}
    },
  },
}

export default userResolver
