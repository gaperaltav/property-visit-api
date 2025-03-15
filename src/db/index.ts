import mongoose from 'mongoose'
import debug from 'debug'
import config from '@src/config'

const debugServer = debug('server:db')

export function connectToDB() {
  const { host } = config
  return mongoose
    .connect(host)
    .then(() => {
      debugServer(`Connected to ${host}`)
    })
    .catch((error) => {
      debugServer(`Failed to connect to ${host}`, { message: error.message })
    })
}
