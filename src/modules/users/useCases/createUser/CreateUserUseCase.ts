import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepository.create({ name, email, password });

    return user;
  }
}

export { CreateUserUseCase };
