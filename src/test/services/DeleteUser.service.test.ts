import { getConnection } from "typeorm";
import Connection from "../../database";
import { DeleteUserService } from "../../services/DeleteUser.service";
import { FakeData } from "../../utils/FakeDataBase/fakeData";

describe("DeleteUserService", () => {
  beforeAll(async () => {
    const banco = Connection();
    await (await banco).runMigrations();
  });
  afterAll(async () => {
    const banco = getConnection();
    await banco.close();
  });

  const deleteUserService = new DeleteUserService();
  const fakeData = new FakeData();

  it("Deve retorna uma array vazia", async () => {
    const mockUser = await fakeData.CreateUser();
    const result = await deleteUserService.execute({ id: mockUser.id });

    expect(result).toHaveLength(0);
  });
});
