import { User } from "../entities/user.entity";
import { databaseProviders } from "../config/database.providers";

export class UserService {
  private userService = databaseProviders.getRepository(User);

  async findByEmail(email: string): Promise<User | null> {
    return await this.userService.findOne({ where: { email } });
  }

  async save(user: User): Promise<User> {
    return await this.userService.save(user);
  }
}

export const userService = new UserService();
