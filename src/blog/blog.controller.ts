import { Controller, Get, Post, Body, HttpCode, UsePipes, ValidationPipe, Logger} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import {UsersService} from '../users/users.service';
import BlogService from './blog.service';
import { createBlogDto } from './dto/createBlog.dto';

@Controller()
export class BlogController {
  private logger = new Logger('BlogCoontroller');

  constructor(
    private blogService: BlogService,
    private userService: UsersService,
  ) {}

  @MessagePattern('getBlog')
  async getAllBlogs() {
    const data = await this.blogService.getBlog();
    return data
  }

  @MessagePattern('createBlog')
  async createNewBlog(blogData) {
    const user = await this.userService.getUserInfo(blogData.userId);

    const blog = await this.blogService.createNewBlog(blogData, user);
    return blog
  }

}
