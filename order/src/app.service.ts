import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private logger = new Logger('OrderService');

  private orders: { [key: string]: any } = [
    { order_id: 1, order_date: '05/11/2024', userID: 1, order_details:{detail1:"detail1",detail2:"detail2"} },
    { order_id: 2, order_date: '06/10/2024', userID: 1, order_details:{detail1:"detail1",detail2:"detail2"} },
    { order_id: 3, order_date: '30/03/2023', userID: 3, order_details:{detail1:"detail1",detail2:"detail2"} }];

  private new_id: number = this.orders.length;
  getHello(): string {
    return 'Hello World! This is a Order Service';
  }

  getAllProduct() {
    return this.orders;
  }

  getProduct(data) {
    const order = this.orders.filter(order => order.order_id === data);
    if (order.length === 0) {
      this.logger.log("Order not found");
      return "Order not found";
    }
    return order
  }

  addProduct(data) {
    const new_user: { [key: string]: any } = {};
    this.new_id += 1
    new_user.order_id = this.new_id
    new_user.order_date = data.order_date
    new_user.userID = data.userID
    new_user.order_details = data.order_details
    new_user.order_details.detail1 = data.order_details.detail1
    new_user.order_details.detail2 = data.order_details.detail2
    this.orders.push(new_user)
    this.logger.log("successfully added order");
    return new_user
  }

  editProduct(data) {
    const index = this.orders.findIndex(user => user.order_id === (+data.id));
    const new_data = data.userData
    if (index !== -1) {
      this.orders[index].order_date = new_data.order_date;
      this.orders[index].userID = new_data.userID;
      this.orders[index].order_details.detail1 = new_data.order_details.detail1;
      this.orders[index].order_details.detail2 = new_data.order_details.detail2;
      this.logger.log("successfully edited order");
      return this.orders[index];
    }
    this.logger.log("Order not found");
    return "Order not found";
  }


  deleteProduct(data) {
    const index = this.orders.findIndex(user => user.order_id === data);
    if (index !== -1) {
      this.orders.splice(index, 1);
      this.logger.log("successfully deleted order");
      return this.orders;
    }
    this.logger.log("Order not found");
    return "Order not found";
  }

}