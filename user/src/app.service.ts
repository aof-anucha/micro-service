import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private logger = new Logger('UserService');
  private users: { [key: string]: any } = [{ id: 1, name: 'Julian Wright' }, { id: 2, name: 'Wyatt Bennett' }, { id: 3, name: 'Thomas Taylor' }];
  private new_id: number = this.users.length;
  getHello(): string {
    return 'Hello World! This is a Uesr Service';
  }

  getAllusers() {
    return this.users;
  }

  getUser(data) {
    const user = this.users.filter(user => user.id === data);
    if (user.length === 0) {
      this.logger.log("User not found");
      return "User not found";
    }
    return user;
  }

  addUser(data) {
    const new_user: { [key: string]: any } = {};
    this.new_id += 1
    new_user.id = this.new_id
    new_user.name = data.name
    this.users.push(new_user)
    this.logger.log("successfully added user");
    return new_user
  }

  editUser(data) {
    const index = this.users.findIndex(user => user.id === (+data.id));
    if (index !== -1) {
      this.users[index].name = data.userData.name;
      this.logger.log("successfully edited user");
      return this.users[index];
    }
    this.logger.log("User not found");
    return "User not found";
  }


  deleteUser(data) {
    const index = this.users.findIndex(user => user.id === data);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.logger.log("successfully deleted user");
      return this.users;
    }
    this.logger.log("User not found");
    return "User not found";
  }

}
