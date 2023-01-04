import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { Blog } from './blog/blog.entity';
import { BlogController } from './blog/blog.controller';
import BlogService from './blog/blog.service';
import { BlogModule } from './blog/blog.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'PonnusKannan@2',
      database: 'foctalk',
      synchronize: true,
      entities: [User,Blog],
      autoLoadEntities: true,
    }),
    AuthModule,
    UsersModule,
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
