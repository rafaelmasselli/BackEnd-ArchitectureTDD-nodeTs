import { CreateUserService } from "../../services/CreateUser.Service";
import { v4 as uuid } from "uuid";

class FakeData {
  createUserService = new CreateUserService();
  async execute() {
    await this.createUserService.execute({
      id: uuid(),
      name: "Algum usuário",
      email: "email@email",
    });

    await this.createUserService.execute({
      id: uuid(),
      name: "Outro usuário",
      email: "",
    });
  }

  async CreateUser() {
   const user =  await this.createUserService.execute({
      id: uuid(),
      name: "Outro usuário",
      email: "email@email",
    });
    return user
  }
}

export { FakeData };
