import express, { Express } from 'express'
import morgan from 'morgan'
import appConfig from '@src/config'
import debug from 'debug'
import { connectToDB } from '@src/db'
import { loadingApiRoutes } from '@src/routes/index'

const { env, port, jwtSecretKey } = appConfig

if (!jwtSecretKey) {
  console.error('FATAL ERROR: JWT_SECRET_KEY is not defined.')
  process.exit(1)
}

const serverDebugger = debug('server:app')
const app: Express = express()

if (env === 'development') {
  app.use(morgan('dev'))
}

// Connecting to MongoDB
connectToDB()

// Loading api routes
loadingApiRoutes(app)

app.get('/api', (req, res) => {
  res.send('Welcome to properties API.')
})
 
app.listen(port)
serverDebugger(`Running server on port ${port}`)

export default app
