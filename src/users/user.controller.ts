import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller()
export class UserController {

  private logger = new Logger('UserController');

  constructor(private readonly userService: UsersService) {}


  @MessagePattern('signin')
  async createNewUser(data) {
    this.logger.log('create new user');
    const newUser = await this.userService.createNewUser(data)
    return newUser
  }

  @MessagePattern('auth/login')
 async  loginUser(data) {
    this.logger.log('login check user');
    const userLogIn = await this.userService.findOne(data.username)
    return userLogIn
  }

}
