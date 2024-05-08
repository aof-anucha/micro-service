import { Inject, Injectable, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy,
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
    @Inject('CART_SERVICE') private readonly cartClient: ClientProxy,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getPayment(): Observable<string> {
    return this.paymentClient.send({ cmd: 'get/payment' }, {});
  }

  getOrder(): Observable<string> {
    return this.orderClient.send({ cmd: 'get/order' }, {});
  }

  getCart(): Observable<string> {
    return this.cartClient.send({ cmd: 'get/cart' }, {});
  }

  getalluser(): Observable<string> {
    return this.userClient.send({ cmd: 'alluser' }, {});
  }

  getUser(userData: any): Observable<string> {
    return this.userClient.send({ cmd: 'get/user' }, userData);
  }

  getProduct(): Observable<string> {
    return this.productClient.send({ cmd: 'get/product' }, {});
  }

  async sum(userData: any) {
    console.log("--------------------------------------------------")
    console.log(userData.data)
    return this.userClient.send({ cmd: 'sum' }, userData.data).toPromise();
  }

  async addUser(userData: any) {
    console.log(userData)
    return this.userClient.send({ cmd: 'Add_User' },userData);
  }

  async editUser(id: string, userData: any) {
    console.log("User id:"+id)
    console.log(userData)
    return this.userClient.send({ cmd: 'Edit_User' },{id,userData});
  }

  async deleteUser(id: any) {
    console.log("User id:"+id)
    return this.userClient.send({ cmd: 'Delete_User' },id);
  }
}
