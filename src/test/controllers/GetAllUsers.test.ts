import Connection from "../../database/index";
import { getConnection } from "typeorm";
import { FakeData } from "../../utils/FakeDataBase/fakeData";
import { makeMockRequest } from "../../utils/mocks/MocKRequest";
import { makeMockResponse } from "../../utils/mocks/MockResponse";
import { GetAllUsersController } from "../../controllers/GetAllUsers.controller";

describe("GetAllUserController", () => {
  beforeAll(async () => {
    const Banco = await Connection();
    Banco.runMigrations();
  });

  afterAll(async () => {
    const Banco = getConnection();
    Banco.query("DELETE FROM users");
    Banco.close();
  });
  const getAllUserController = new GetAllUsersController();
  const fakeData = new FakeData();
  it("Deve retorna status 200 quando pegar todos os usuário", async () => {
    await fakeData.execute();

    const request = makeMockRequest({});
    const response = makeMockResponse();

    await getAllUserController.handle(request, response);

    expect(response.state.status).toBe(200);
  });
});
