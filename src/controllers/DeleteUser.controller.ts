import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUser.service";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const deleteUserService = new DeleteUserService();
    const { id } = request.params;

    if (id.length === 0) {
      return response.status(400).json({ message: "Informe o id" });
    }

    await deleteUserService.execute({ id });

    return response.status(204).json()
  }
}

export { DeleteUserController };
