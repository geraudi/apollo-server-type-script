const userResolver = {
  Query: {
    users: async (root: any, args: any, context: any) => {
      const {
        models: { users },
      } = context
      return users.getAll()
    },
    validateUser(root: any, args: any) {
      return {}
    },
  },
}

export default userResolver
