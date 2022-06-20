import Connection from "../../database";
import { getConnection } from "typeorm";
import { UpdateUserService } from "../../services/UpdateUser.service";
import { FakeData } from "../../utils/FakeDataBase/fakeData";
describe("UpdateUserService", () => {
  beforeAll(async () => {
    const banco = await Connection();
    await banco.runMigrations();
  });

  afterAll(async () => {
    const banco = getConnection();
    await banco.query("DELETE FROM users");
    await banco.close();
  });

  const fakeData = new FakeData();

  it("Deve editar o nome do usuário", async () => {
    const mockUser = await fakeData.CreateUser();
    const updateUserService = new UpdateUserService();
    const result = await updateUserService.execute({
      id: mockUser.id,
      name: "Outro usuário",
    });

    expect(result).toHaveLength(0);
  });
});
