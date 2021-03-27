import { Request, Response } from "express";

import UsersRepositories from "../repositories/UsersRepositories";
import CreateUserService from "../services/CreateUserService";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password }: IRequest = request.body;

    const usersRepositories = new UsersRepositories();
    const createUserService = new CreateUserService(usersRepositories);

    const user = createUserService.execute({ name, email, password });

    return response.json(user);
  }
}

export default UsersController;
