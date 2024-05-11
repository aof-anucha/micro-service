import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private products:{ [key: string]: any } = [
  {id:1, name:'Phone', category:"Electronics"},
  {id:2, name:'Chair', category:"Furniture"},
  {id:3, name:'PlayStation5', category:"Game console"}];

  private new_id:number = this.products.length;

  getHello(): string {
    return 'Hello World! This is a Product Service';
  }

  getAllProduct() {
    return this.products;
  }

  getProduct(data) {
    const product = this.products.filter(product => product.id === data);
    if (product.length === 0) {
      return "Product not found";
    }
    return product
  }

  addProduct(data) {
    const new_user: { [key: string]: any } = {};
    this.new_id +=1
    new_user.id = this.new_id
    new_user.name = data.name
    new_user.category = data.category
    this.products.push(new_user)
    return new_user
  }

  editProduct(data) {
    const index = this.products.findIndex(user => user.id === (+data.id));
    console.log(data)
    if (index !== -1) {
      this.products[index].name = data.userData.name;
      this.products[index].category = data.userData.category;
      return this.products[index];
    }
    return "Product not found";
  }


  deleteProduct(data){
    const index = this.products.findIndex(user => user.id === data);
    if (index !== -1) {
      this.products.splice(index, 1);
      return this.products;
    }
    return "Product not found";
  }



  accumulate(data: number[]): number {
    const result = (data || []).reduce((a, b) => a + b);
    // this.logger.log('accumulate has call result : ' + result);
    return result;
  }
}
