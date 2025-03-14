import { JwtPayload } from 'jsonwebtoken'

interface JwtPayload {
  _id: string
}

declare global {
  namespace Express {
    export interface Request {
      user: userPayload | string
    }
  }
}
