import { AuthenticationError } from 'apollo-server'

const userResolver = {
  Query: {
    users(root: any, args: any, context: any) {
      console.log(context)
      // if (!context.authorized) {
      //   console.error('User not authorized')
      //   throw new AuthenticationError('you must be logged in')
      // }
      return [{ name: 'geraud' }]
    },
    validateUser(root: any, args: any) {
      return {}
    },
  },
}

export default userResolver
