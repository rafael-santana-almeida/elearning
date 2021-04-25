import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ email, name, password }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({ email, name, password });

    await this.repository.save(user);

    return user;
  }
}

export { UsersRepository };
