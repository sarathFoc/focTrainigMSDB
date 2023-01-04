import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users/users.service';
import { BlogController } from './blog.controller';
import BlogService from './blog.service';

describe('BlogController', () => {
  let blogController: BlogController;

  const blogsData =  
        
    {
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
        LastUpdated: '2022-12-20T09:24:48.784Z'
      }
    }
  


  const mockBlogService = {
    createNewBlog: jest.fn((data) => {
      return {
        ...data,
      };
    }),

    getUserInfo: jest.fn((userId) => {
      console.log('userid', userId);
      return {
        id: 1,
        name: 'sarath',
        role: 1,
        email: 'coolll@gmail.com',
        password: 'sarath@1999',
        createdAt: '2022-12-20T09:24:48.784Z',
        LastUpdated: '2022-12-20T09:24:48.784Z',
      };
    }),

    getBlog: jest.fn(() => {
      return {

        ...blogsData
        
      }       
      
    })
  };

  const mockUserService = {
    getUserInfo: jest.fn((userId) => {
      return {
        id: 1,
        name: 'sarath',
        role: 1,
        email: 'coolll@gmail.com',
        password: 'sarath@1999',
        createdAt: '2022-12-20T09:24:48.784Z',
        LastUpdated: '2022-12-20T09:24:48.784Z',
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogController],
      providers: [BlogService, UsersService],
    })
      .overrideProvider(BlogService)
      .useValue(mockBlogService)
      .overrideProvider(UsersService)
      .useValue(mockUserService)
      .compile();

    blogController = module.get<BlogController>(BlogController);
  });

  it('should be defined', () => {
    expect(blogController).toBeDefined();
  });

  it('should return all blogs', async() => {
    expect(await blogController.getAllBlogs()).toEqual({

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
          LastUpdated: '2022-12-20T09:24:48.784Z'
        }

    }
      
    );
  });

  it('should create a new blog', async () => {
    expect(
      await blogController.createNewBlog({
        title: 'blog title',
        blog: 'this is just for unit test',
        userId: 1,
      }),
    ).toEqual({
      title: 'blog title',
      blog: 'this is just for unit test',
      userId: 1,
    });
  });
});
