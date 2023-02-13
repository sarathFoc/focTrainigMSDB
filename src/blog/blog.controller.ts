import { Controller, Get, Post, Body, HttpCode, UsePipes, ValidationPipe, Logger} from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { DefaultValuePipe, ParseIntPipe } from '@nestjs/common/pipes';
import { MessagePattern } from '@nestjs/microservices';
import { IPaginationOptions } from 'nestjs-typeorm-paginate/dist/interfaces';
import { Pagination } from 'nestjs-typeorm-paginate/dist/pagination';
import {UsersService} from '../users/users.service';
import { Blog } from './blog.entity';
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
    try {

      const data = await this.blogService.getBlog();
      console.log("getBlog", data)
      return data
    }
    catch {
      console.log("error")
    }
  }


  @MessagePattern('createBlog')
  async createNewBlog(blogData) {
    const user = await this.userService.getUserInfo(blogData.userId);

    const blog = await this.blogService.createNewBlog(blogData, user);
    return blog
  }

  @MessagePattern('getBlogPaginate')
  async getBlogs(options: IPaginationOptions): Promise<Pagination<Blog>> {
    return await this.blogService.paginate(options)
  }

}
