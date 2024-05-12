import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get/order' })
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'getorder' })
  getProduct(data) {

    return this.appService.getProduct(+data)
  }

  @MessagePattern({ cmd: 'allorders' })
  getAllProduct() {
    return this.appService.getAllProduct()
  }

  @MessagePattern({ cmd: 'Add_Order' })
  addProduct(data) {

    return this.appService.addProduct(data)
  }

  @MessagePattern({ cmd: 'Edit_Order' })
  editProduct(data) {

    return this.appService.editProduct(data)
  }

  @MessagePattern({ cmd: 'Delete_Order' })
  deleteProduct(data) {
    return this.appService.deleteProduct(+data)
  }
}
