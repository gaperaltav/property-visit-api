import express, { Express } from 'express'
import helmet from 'helmet'

import properties from './properties'
import users from './users'
import auth from './auth'

export function loadingApiRoutes(app: Express) {
  app.use(express.json())
  app.use(helmet())
  app.use('/api/properties', properties)
  app.use('/api/users', users)
  app.use('/auth', auth)
}
