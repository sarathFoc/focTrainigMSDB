import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';
import { createBlogDto } from './dto/createBlog.dto';

@Injectable()
export default class BlogService {
  constructor(@InjectRepository(Blog) private repo: Repository<Blog>) {}

  async getBlog() {
    const data = await this.repo.find({ relations: { user: true } });
    return data;
  }

  async createNewBlog(blog: createBlogDto, user) {
    const blogData = new Blog();
    blogData.title = blog.title;
    blogData.blog = blog.blog;
    blogData.user = user;

    const newBlog = this.repo.save(blogData);
    return newBlog;

  }
}
