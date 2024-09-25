import { User } from "../entities/user.entity";
import { databaseProviders } from "../config/database.providers";

export class UserRepository {
  private userRepository = databaseProviders.getRepository(User);

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async save(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}

export const userRepository = new UserRepository();
