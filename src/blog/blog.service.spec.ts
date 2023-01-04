import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Blog } from './blog.entity';
import BlogService from './blog.service';

describe('BlogService', () => {
  let service: BlogService;

  const blogsData = {
    id: 15,
    title: 'kjasvsadv',
    blog: 'heklekeoe',
    createdAt: '2022-12-27T12:30:45.376Z',
    LastUpdated: '2022-12-27T12:30:45.376Z',
    user: {
      id: 1,
      name: 'sarath',
      role: 1,
      email: 'coolll@gmail.com',
      password: 'sarath@1999',
      createdAt: '2022-12-20T09:24:48.784Z',
      LastUpdated: '2022-12-20T09:24:48.784Z',
    },
  };


  const mockBlogRepository = {
    find: jest.fn().mockImplementation((data) => {
      return {
        ...blogsData,
      };
    }),

    save: jest.fn().mockImplementation((data) => {
      return {
        title: 'kjasvsadv',
        blog: 'heklekeoe',
        user: {
          id: 1,
          name: 'sarath',
          role: 1,
          email: 'coolll@gmail.com',
          password: 'sarath@1999',
          createdAt: '2022-12-20T09:24:48.784Z',
          LastUpdated: '2022-12-20T09:24:48.784Z'
        }
      }
    })
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        BlogService,
        {
          provide: getRepositoryToken(Blog),
          useValue: mockBlogRepository,
        },
      ],
    }).compile();

    service = app.get<BlogService>(BlogService);
  });

  it('should be defined"', () => {
    expect(service).toBeDefined();
  });

  it('should get blog"', async () => {
    expect(await service.getBlog()).toEqual({
      id: 15,
      title: 'kjasvsadv',
      blog: 'heklekeoe',
      createdAt: '2022-12-27T12:30:45.376Z',
      LastUpdated: '2022-12-27T12:30:45.376Z',
      user: {
        id: 1,
        name: 'sarath',
        role: 1,
        email: 'coolll@gmail.com',
        password: 'sarath@1999',
        createdAt: '2022-12-20T09:24:48.784Z',
        LastUpdated: '2022-12-20T09:24:48.784Z',
      },
    });
  });

  it('should create blog',async  () => {
    const blog =  { blog: 'heklekeoe', title: 'kjasvsadv', userId: 1 }
    const user = {
      id: 1,
      name: 'sarath',
      role: 1,
      email: 'coolll@gmail.com',
      password: 'sarath@1999',
      createdAt: '2022-12-20T09:24:48.784Z',
      LastUpdated: '2022-12-20T09:24:48.784Z'
    }
    expect(await service.createNewBlog(blog, user)).toEqual({     
        title: 'kjasvsadv',
        blog: 'heklekeoe',
        user: {
          id: 1,
          name: 'sarath',
          role: 1,
          email: 'coolll@gmail.com',
          password: 'sarath@1999',
          createdAt: '2022-12-20T09:24:48.784Z',
          LastUpdated: '2022-12-20T09:24:48.784Z'
        }
      
    });
  });
});
