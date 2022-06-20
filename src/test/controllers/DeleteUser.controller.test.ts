import Connection from "../../database";
import { getConnection } from "typeorm";
import { UpdateUserService } from "../../services/UpdateUser.service";
import { FakeData } from "../../utils/FakeDataBase/fakeData";
import { makeMockRequest } from "../../utils/mocks/MocKRequest";
import { makeMockResponse } from "../../utils/mocks/MockResponse";
import { DeleteUserController } from "../../controllers/DeleteUser.controller";
describe("UpdateUserService", () => {
  beforeAll(async () => {
    const banco = await Connection();
    await banco.runMigrations();
  });

  afterAll(async () => {
    const banco = getConnection();
    await banco.close();
  });

  const fakeData = new FakeData();
  const deleteUseController = new DeleteUserController();

  it("Deve retornar 204 quando o usuário for retornado", async () => {
    const mockUser = await fakeData.CreateUser();

    const request = makeMockRequest({
      params: {
        id: mockUser.id,
      },
    });

    const response = makeMockResponse();

    await deleteUseController.handle(request, response);
  });
});
