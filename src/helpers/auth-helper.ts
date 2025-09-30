import envConfig from '@src/config'
import jwt from 'jsonwebtoken';
import { UserPayload } from '@src/types/user'

/**
 * Utility function to generate JWT token for a user.
 */
export function generateUserToken(user: UserPayload): string {
    const payload = {
        _id: user.id,
        name: user.name,
        lastName: user.lastName,
        role: user.role,
    }
    return jwt.sign(payload, envConfig.jwtSecretKey)
}