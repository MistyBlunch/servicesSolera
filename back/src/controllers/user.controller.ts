import express from 'express';
import * as bcrypt from 'bcrypt';

import { UserRepository } from '../models/repositories/user.repository';
import { BaseController } from './base.controller';

export class UserController implements BaseController {
  public router: express.Router;
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.router = express.Router();
    this.userRepository = userRepository;

    this.router.post('/user', this.getUser);
  }

  getUser = async (req: express.Request, res: express.Response) => {
    let user = await this.userRepository.findByUsername(req.body.username);

    if(!user) {
      return res.send({
        error: {
          message: "Invalid username or password"
        }
      })
    }

    if(!await bcrypt.compare(req.body.password, user.password)) {
      return res.send({
        error: {
          message: "Invalid username or password"
        }
      })
    }

    res.send({
      fullname: user.fullname
    })
  }
}
