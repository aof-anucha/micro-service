import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private logger = new Logger('ProductService');

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
      this.logger.log("Product not found");
      return "Product not found";
    }
    return product
  }

  addProduct(data) {
    const new_product: { [key: string]: any } = {};
    this.new_id +=1
    new_product.id = this.new_id
    new_product.name = data.name
    new_product.category = data.category
    this.products.push(new_product)
    this.logger.log("successfully added product");
    return new_product
  }

  editProduct(data) {
    const index = this.products.findIndex(user => user.id === (+data.id));
  
    if (index !== -1) {
      this.products[index].name = data.userData.name;
      this.products[index].category = data.userData.category;
      this.logger.log("successfully edited product");
      return this.products[index];
    }
    this.logger.log("Product not found");
    return "Product not found";
  }


  deleteProduct(data){
    const index = this.products.findIndex(user => user.id === data);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.logger.log("successfully deleted product");
      return this.products;
    }
    this.logger.log("Product not found");
    return "Product not found";
  }

}
