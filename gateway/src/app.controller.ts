import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('payment')
  getPayment(): Observable<string> {
    return this.appService.getPayment();
  }

  @Get('order')
  getOrder(): Observable<string> {
    return this.appService.getOrder();
  }

  @Get('cart')
  getCart(): Observable<string> {
    return this.appService.getCart();
  }

  @Get('product')
  getProduct(): Observable<string> {
    return this.appService.getProduct();
  }
  // ------------------------------------------------------ USER SERVICE ---------------------------------------------------------

  @Get('user')
  getalluser(): Observable<any> {
    return this.appService.getalluser();
  }

  @Get('user/:id')
  getuser(@Param('id') id): Observable<any> {
    console.log(id)
    return this.appService.getUser(id);
  }

  @Post('user/')
  addUser(@Body() userData: any) {
    console.log(userData)
    return this.appService.addUser(userData)
  }

  @Put('user/:id')
  editUser(@Param('id') id: string,@Body() userData: any) {
    console.log(userData)
    return this.appService.editUser(id,userData)
  }

  @Delete('user/:id')
  deleteUser(@Param('id') id) {
    console.log()
    return this.appService.deleteUser(id)
  }

  @Post('sum')
  sum(@Body() userData: any) {
    console.log(userData)
    return this.appService.sum(userData)
  }

  // ------------------------------------------------------ PRODUCT SERVICE ---------------------------------------------------------

  // ------------------------------------------------------ ORDER SERVICE ---------------------------------------------------------




}