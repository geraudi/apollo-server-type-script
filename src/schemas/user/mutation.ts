import { gql } from 'apollo-server'

const userMutation = gql`
  type Mutation {
    addUser(
      email: String!
      password: String!
      firstName: String
      lastName: String
    ): User
  }
`
export default userMutation
