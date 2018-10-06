const userResolver = {
  Query: {
    users: async (root: any, args: any, context: any) => {
      const {
        models: { users },
      } = context
      return users.getAll()
    },
  },

  Mutation: {
    addUser: async (root: any, args: any, context: any) => {
      const {
        models: { users },
      } = context
      return users.add(args.email, args.password, args.firstName)
    },
  },
}

export default userResolver
