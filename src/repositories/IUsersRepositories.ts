import User from "../typeorm/entities/User";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

interface IUsersRepositories {
  create(data: IUser): Promise<User>;
}

export default IUsersRepositories;
