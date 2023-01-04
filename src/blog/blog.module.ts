import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import BlogService from './blog.service';
import { Blog } from './blog.entity';
import { UsersService } from '../users/users.service';
// import { UserController } from '../user/.controller';
import { User } from '../users/user.entity';

@Module({
    controllers: [BlogController],
    imports: [TypeOrmModule.forFeature([Blog, User])],
    providers: [BlogService, UsersService] 

})
export class BlogModule {}
