import User from "../../../../typeorm/entities/User";
import IUsersRepository from "../../repositories/IUsersRepository";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  constructor(private usersRepositories: IUsersRepository) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepositories.create({ name, email, password });

    return user;
  }
}

export default CreateUserUseCase;
