import IUsersRepositories from "../repositories/IUsersRepositories";
import User from "../typeorm/entities/User";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(private usersRepositories: IUsersRepositories) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepositories.create({ name, email, password });

    return user;
  }
}

export default CreateUserService;
