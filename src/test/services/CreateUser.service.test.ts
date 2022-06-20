import { getConnection } from 'typeorm';
import Connection from '../../database/index';
import { CreateUserService } from '../../services/CreateUser.Service';
import { v4 as uuid } from 'uuid';

describe('CreateUserService', () => {
  beforeAll(async () => {
    const banco = await Connection();
    await banco.runMigrations();
  });

  afterAll(async () => {
    const banco = getConnection();
    await banco.query('DELETE FROM users');
    await banco.close();
  });

  const createUserService = new CreateUserService();
  it('Deve retornar o id do usuário criado', async () => {
    const result = await createUserService.execute({
      id: uuid(),
      name: 'User',
      email: 'email@email',
    });

    expect(result).toHaveProperty('id');
  });
});
