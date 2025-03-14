import { model } from 'mongoose'
import { userSchema, propertySchema } from '../db/schemas'
import { User, Property } from '../types'

export const PropertyModel = model<Property>('Property', propertySchema)

export const UserModel = model<User>('User', userSchema)
