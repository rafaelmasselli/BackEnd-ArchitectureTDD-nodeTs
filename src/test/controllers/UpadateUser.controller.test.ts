import { getConnection } from "typeorm";
import { UpdateUserController } from "../../controllers/UpdateUser.controller";
import { Request } from "express";
import { makeMockResponse } from "../../utils/mocks/MockResponse";
import Connection from "../../database";
import { FakeData } from "../../utils/FakeDataBase/fakeData";
describe("UpdateUserController", () => {
  beforeAll(async () => {
    const connection = await Connection();
    connection.runMigrations();
  });

  afterAll(async () => {
    const connection = await getConnection();
    connection.query("DELETE FROM users");
    connection.close();
  });

  const fakeData = new FakeData();
  const updateUserController = new UpdateUserController();

  it("Deve retornar status 204 quando usuário for editado", async () => {
    const mockUser = await fakeData.CreateUser();
    const request = {
      body: {
        id: mockUser.id,
        name: "Outro nome",
        email: "email@email.com",
      },
    } as Request;

    const response = makeMockResponse();

    await updateUserController.handle(request, response);

    expect(response.state.status).toBe(204);
  });

  it("Deve retornar status 400 por estar com o campo name vazio", async () => {
    const mockUser = await fakeData.CreateUser();
    const request = {
      body: {
        id: mockUser.id,
        name: "",
        email: "email@email.com",
      },
    } as Request;

    const response = makeMockResponse();

    await updateUserController.handle(request, response);
    expect(response.state.status).toBe(400);
  });

  it("Deve retornar status 400 por estar com o campo id vazio", async () => {
    const request = {
      body: {
        id: "",
        name: "outro name",
        email: "email@email.com",
      },
    } as Request;

    const response = makeMockResponse();

    await updateUserController.handle(request, response);
    expect(response.state.status).toBe(400);
  });
});
