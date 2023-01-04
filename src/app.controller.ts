
import { Body, Controller,Request, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { MessagePattern } from '@nestjs/microservices';
import { LocalAuthGuard } from './auth/auth-guard/local-auth-guard';

@Controller()
export class AppController {

  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  // getHello() {
  //   return this.appService.getHello()
  // }
  
}

