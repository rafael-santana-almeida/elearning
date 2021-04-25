import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password }: IRequest = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  }
}

export { CreateUserController };
