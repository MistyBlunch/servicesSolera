import { User } from '../user'
import { UserRepositoryInterface } from './interfaces/user.repository'

import { Sequelize, Model, ModelCtor, DataTypes } from 'sequelize';

export class UserRepository implements UserRepositoryInterface {
  client: Sequelize;
  model: ModelCtor<Model<User>>;

  constructor(client: Sequelize) {
    this.client = client;
    this.model = this.client.define<Model<User>>('Users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
    });
  }

  public async findByUsername(username: string): Promise<User | undefined> {
    return (await this.model.findOne({
      where: {
        username: username
      }
    }))?.get();
  }
}
