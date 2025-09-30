import { NextFunction, Response, Request } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
import { Roles } from '../types'

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.header('Authorization')

  if (!token) {
    return res.status(400).json('Error: No token provided.')
  }

  try {
    const verifyUser = jwt.verify(token, config.jwtSecretKey)
    req.user = verifyUser
    next()
  } catch (error) {
    return res.status(401).json('Invalid Token')
  }
}

export const adminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.user.role === Roles.Admin) {
    return next()
  }
  return res.status(403).json('Access denied for this operation.')
}
