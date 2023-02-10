import convict from 'convict';
import dotenv from 'dotenv';

import { Sequelize, Model, DataTypes } from 'sequelize';

import { App } from './app';
import { configSchema } from './config/config';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './models/repositories/user.repository';

dotenv.config();

const config = convict(configSchema).getProperties();

const sequelize = new Sequelize(
  config.database.name,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    dialect: 'mysql'
  }
);


const userRepository = new UserRepository(sequelize);

const app = new App(config, [
  new UserController(userRepository),
]);


Promise.all([sequelize.sync(), sequelize.authenticate()]).then(async () => {
  app.listen();
})
