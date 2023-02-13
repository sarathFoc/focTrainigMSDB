import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { Blog } from './blog/blog.entity';
import { BlogModule } from './blog/blog.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5433,
    //   username: 'postgres',
    //   password: 'PonnusKannan@2',
    //   database: 'foctalk',
    //   synchronize: true,
    //   entities: [User,Blog],
    //   autoLoadEntities: true,
    // }),

    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.local.env',
          // envFilePath:'.prod.env', for production
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: configService.get<boolean>('DB_SYNC'),
        logging: true,
        autoLoadEntities:true,
        entities: [User,Blog],      
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
