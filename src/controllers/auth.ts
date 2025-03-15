import { Request, Response } from 'express'
import { authValidator } from './validators'
import { UserModel } from '../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import config from '../config'

export const login = async (req: Request, res: Response) => {
  const { error } = authValidator.validate(req.body)

  if (error) return res.status(400).json(error.message)

  try {
    const user = await UserModel.findOne({ email: req.body.email })

    if (!user)
      return res.status(400).json('This is not a valid email or password')

    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.password,
    )

    if (!isValidPassword)
      return res.status(400).json('This is not a valid email or password')

    const payload = {
      _id: user.id,
      name: user.name,
      lastName: user.lastName,
      role: user.role,
    }

    const token = jwt.sign(payload, config.jwtSecretKey)
    res.status(200).json({ token })
  } catch (error: any) {
    return res
      .status(500)
      .json('There is an error login a user, please try again later.')
  }
}

const authController = {
  login,
}

export default authController
