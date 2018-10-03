import { Request } from 'express'

const context = async (req: Request) => {
  return {
    token: 'azerty',
  }
}
export default context
