import { gql } from 'apollo-server'

const userType = gql`
  type User {
    id: String
    email: String
    firstName: String
    lastName: String
    locale: String
  }
`

export default userType
