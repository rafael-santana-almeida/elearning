import { getRepository, Repository } from "typeorm";

import User from "../../../typeorm/entities/User";
import IUsersRepositories, { IUser } from "./IUsersRepository";

class UsersRepository implements IUsersRepositories {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async create(userData: IUser): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }
}

export default UsersRepository;
