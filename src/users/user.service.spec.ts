import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  const mockUserRepository = {
    save: jest.fn().mockImplementation((data) => {
      return {
        ...data,
        id: 3,
        createdAt: '2022-12-28T11:24:44.399Z',
        LastUpdated: '2022-12-28T11:24:44.399Z',
      };
    }),

    findOneBy: jest.fn().mockImplementation((data) => {
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
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined"', () => {
    expect(service).toBeDefined();
  });

  it('should be create a new user"', async () => {
    expect(
      await service.createNewUser({
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
      id: expect.any(Number),
      createdAt: '2022-12-28T11:24:44.399Z',
      LastUpdated: '2022-12-28T11:24:44.399Z',
    });
  });

  it('should get a user by email"', async () => {
    expect(await service.findOne(expect.any(String))).toEqual({
      id: expect.any(Number),
      name: 'sarath',
      role: 2,
      email: 'sarathkaruvanthal@gmail.com',
      password: 'sarath@1999',
      createdAt: '2022-12-28T06:29:42.024Z',
      LastUpdated: '2022-12-28T06:29:42.024Z',
    });
  });

  it('should get a user by userId"', async () => {
    expect(await service.getUserInfo(expect.any(Number))).toEqual({
      id: expect.any(Number),
      name: 'sarath',
      role: 2,
      email: 'sarathkaruvanthal@gmail.com',
      password: 'sarath@1999',
      createdAt: '2022-12-28T06:29:42.024Z',
      LastUpdated: '2022-12-28T06:29:42.024Z',
    });
  });
});
