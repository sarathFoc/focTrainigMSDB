import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UserController } from './user.controller';

describe('UserController', () => {
  let userController: UserController;

  const mockUserService = {
    createNewUser: jest.fn((data) => {
      return {
        ...data,
        id: 3,
        createdAt: '2022-12-28T06:30:16.853Z',
        LastUpdated: '2022-12-28T06:30:16.853Z',
      };
    }),

    findOne: jest.fn((data) => {
      return {
        id: 2,
        name: 'sarath',
        role: 2,
        email: 'sarathkaruvanthal@gmail.com',
        password: 'sarath@1999',
        createdAt: '2022-12-28T06:29:42.024Z',
        LastUpdated: '2022-12-28T06:29:42.024Z',
      };
    }),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUserService)
      .compile();

    userController = app.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  it('should create a new user', async () => {
    expect(
      await userController.createNewUser({
        name: 'sarath',
        role: 2,
        email: 'sarathkaruvanthal@gmail.com',
        password: 'sarath@1999',
      }),
    ).toEqual({
      name: 'sarath',
      role: 2,
      email: 'sarathkaruvanthal@gmail.com',
      password: 'sarath@1999',
      id: 3,
      createdAt: '2022-12-28T06:30:16.853Z',
      LastUpdated: '2022-12-28T06:30:16.853Z',
    });
  });

  it('should log in user', async () => {
    expect(
      await userController.loginUser({
        email: 'sarathkaruvanthal@gmail.com',
        password: 'sarath@1999',
      }),
    ).toEqual({
      id: 2,
      name: 'sarath',
      email: 'sarathkaruvanthal@gmail.com',
      password: 'sarath@1999',
      role: 2,
      createdAt: '2022-12-28T06:29:42.024Z',
      LastUpdated: '2022-12-28T06:29:42.024Z',
    });
  });
});
