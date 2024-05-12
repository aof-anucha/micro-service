import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger;
  constructor(private readonly appService: AppService) { this.logger = new Logger('MathService'); }

  @MessagePattern({ cmd: 'get/user' })
  getUser(data) {
    return this.appService.getUser(+data)
  }

  @MessagePattern({ cmd: 'alluser' })
  getAllusers() {
    return this.appService.getAllusers()
  }

  @MessagePattern({ cmd: 'Add_User' })
  addUser(data) {

    return this.appService.addUser(data)
  }

  @MessagePattern({ cmd: 'Edit_User' })
  editUser(data) {

    return this.appService.editUser(data)
  }

  @MessagePattern({ cmd: 'Delete_User' })
  deleteUser(data) {
    return this.appService.deleteUser(+data)
  }

  }
