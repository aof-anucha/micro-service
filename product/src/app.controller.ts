import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get/products' })
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'getproduct' })
  getProduct(data) {
    console.log(data)
    return this.appService.getProduct(+data)
  }

  @MessagePattern({ cmd: 'allproducts' })
  getAllProduct() {
    return this.appService.getAllProduct()
  }

  @MessagePattern({ cmd: 'Add_Product' })
  addProduct(data) {
    console.log(data)
    return this.appService.addProduct(data)
  }

  @MessagePattern({ cmd: 'Edit_Product' })
  editProduct(data) {
    console.log(data)
    return this.appService.editProduct(data)
  }

  @MessagePattern({ cmd: 'Delete_Product' })
  deleteProduct(data) {
    return this.appService.deleteProduct(+data)
  }
}
