import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import IUsersRepositories, { IUser } from "../IUsersRepository";

class UsersRepository implements IUsersRepositories {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(userData: IUser): Promise<User> {
    const user = this.repository.create(userData);

    await this.repository.save(user);

    return user;
  }
}

export default UsersRepository;
