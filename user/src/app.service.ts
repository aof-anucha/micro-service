import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private users:{ [key: string]: any } = [{id:1, name:'aof'},{id:2, name:'pat'},{id:3, name:'gus'}];
  private new_id:number = this.users.length;
  getHello(): string {
    return 'Hello World! This is a Uesr Service';
  }

  getAllusers() {
    return this.users;
  }

  getUser(data) {
    const user = this.users.filter(user => user.id === data);
    return user
  }

  addUser(data) {
    const new_user: { [key: string]: any } = {};
    this.new_id +=1
    new_user.id = this.new_id
    new_user.name = data.name
    this.users.push(new_user)
    return new_user
  }

  editUser(data) {
    const index = this.users.findIndex(user => user.id === (+data.id));
    console.log(data)
    if (index !== -1) {
      this.users[index].name = data.userData.name;
      return this.users[index];
    }
    return null;
  }


  deleteUser(data){
    const index = this.users.findIndex(user => user.id === data);
    if (index !== -1) {
      this.users.splice(index, 1);
      return this.users;
    }
    return null;
  }



  accumulate(data: number[]): number {
    const result = (data || []).reduce((a, b) => a + b);
    // this.logger.log('accumulate has call result : ' + result);
    return result;
  }
}
