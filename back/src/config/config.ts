interface Server {
  host: string,
  port: number
}

interface Database {
  host: string,
  port: number,
  user: string,
  password: string,
  name: string,
}

export interface Config {
  server: Server,
  database: Database
}

export const configSchema = {
  server: {
    host: {
      format: String,
      default: '0.0.0.0',
      env: 'HOST'
    },
    port: {
      format: Number,
      default: 3000,
      env: 'PORT'
    },
  },
  database: {
    host: {
      format: String,
      default: '',
      env: 'DB_HOST'
    },
    port: {
      format: Number,
      default: 3306,
      env: 'DB_PORT'
    },
    user: {
      format: String,
      default: '',
      env: 'DB_USER'
    },
    password: {
      format: String,
      default: '',
      env: 'DB_PASSWORD'
    },
    name: {
      format: String,
      default: '',
      env: 'DB_NAME'
    },
  }
}
