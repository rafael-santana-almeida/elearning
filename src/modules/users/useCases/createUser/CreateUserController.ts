import { Request, Response } from "express";

import CreateUserUseCase from "./CreateUserUseCase";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password }: IRequest = request.body;

    const user = await this.createUserUseCase.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  }
}

export default CreateUserController;
