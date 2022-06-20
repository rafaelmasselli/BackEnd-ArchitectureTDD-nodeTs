import { getConnection } from 'typeorm';
import Connection from '../../database/index';
import { GetAllUsers } from '../../services/GetAllUsers.service';
import { FakeData } from '../../utils/FakeDataBase/fakeData';

describe('GetAllUserService', () => {
  beforeAll(async () => {
    const Banco = await Connection();
    await Banco.runMigrations();
  });

  afterAll(async () => {
    const Banco = getConnection();
    await Banco.query('DELETE FROM users');
    await Banco.close();
  });

  const fakeData = new FakeData();
  it('Deve retorna todos os usuários cadastrados', async () => {
    await fakeData.execute();
    const expectedResponse = [
      { name: 'Algum usuário', email: 'email@email' },
      { name: 'Outro usuário', email: '' },
    ];

    const GetAllUserService = new GetAllUsers();
    const result = await GetAllUserService.execute();
    return result 
  });
});
