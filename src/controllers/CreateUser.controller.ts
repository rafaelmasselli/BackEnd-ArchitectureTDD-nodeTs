import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUser.Service';
import { v4 as uuid } from 'uuid';

class CreateUserController {
  handle(req: Request, res: Response) {
    const createUserService = new CreateUserService();
    const { name, email } = req.body;
    const id = uuid();
    if (!name || name.length == 0) {
      return res.status(400).json({
        message: `O campo nome nao pode estar vazia`,
      });
    }
    const user = createUserService.execute({ id, name, email });

    return res.status(201).json(user);
  }
}

export { CreateUserController };
