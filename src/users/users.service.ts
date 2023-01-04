import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createNewUser(data) {

    const newUser = await this.userRepository.save(data)
    return newUser
    
  }

  async getUserInfo(userId) {
    console.log("userId", userId)
   const user =   await this.userRepository.findOneBy({ id: userId });
   console.log("userData", user)
   return user
  }

  async findOne(username: string): Promise<User> {
    const result = await this.userRepository.findOneBy({ email: username });
    return result
  }

}
