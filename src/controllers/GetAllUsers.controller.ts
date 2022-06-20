import { Request, Response } from 'express';
import { GetAllUsers } from '../services/GetAllUsers.service';

class GetAllUsersController {
  async handle(req: Request, res: Response) {
    const getAllUserService = new GetAllUsers();
    const users = await getAllUserService.execute();
    return res.status(200).json(users);
  }
}

export { GetAllUsersController };
