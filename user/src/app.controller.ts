import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger;
  constructor(private readonly appService: AppService) { this.logger = new Logger('MathService'); }

  // @MessagePattern({ cmd: 'get/user' })
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  // @MessagePattern({ cmd: 'sum' })
  // accumulate(data: number[]): number {
  //   const result = (data || []).reduce((a, b) => a + b);
  //   this.logger.log('accumulate has call result : ' + result);
  //   return result;
  // }
  @MessagePattern({ cmd: 'sum' })
  accumulate(data) {
    console.log(data)
    return this.appService.accumulate(data)
  }

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
    console.log(data)
    return this.appService.addUser(data)
  }

  @MessagePattern({ cmd: 'Edit_User' })
  editUser(data) {
    console.log(data)
    return this.appService.editUser(data)
  }

  @MessagePattern({ cmd: 'Delete_User' })
  deleteUser(data) {
    return this.appService.deleteUser(+data)
  }




  // @MessagePattern({ cmd: 'sum' })
  // accumulate(data: { data: number[] }): number {
  //   if (!data || !Array.isArray(data)) {
  //     this.logger.log('accumulate has call resultsssss : ' + (data.data[0]+data.data[1]));
  //     // กรณี data เป็น null หรือไม่ใช่อาร์เรย์
  //     return; // หรือค่าเริ่มต้นที่คุณต้องการ
  //   }
  
  //   const result = (data || []).reduce((a, b) => a + b);
  //   this.logger.log('accumulate has call result : ' + result);
  //   return result;
  // }
  }
