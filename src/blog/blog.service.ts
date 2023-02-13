import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { paginate } from 'nestjs-typeorm-paginate/dist/paginate';
import { Pagination } from 'nestjs-typeorm-paginate/dist/pagination';
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

  async paginate(options: IPaginationOptions): Promise<Pagination<Blog>> {
    const qb = this.repo.createQueryBuilder('blog');
    qb.orderBy('blog.id', 'DESC')

    return paginate<Blog>(qb, options)
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
