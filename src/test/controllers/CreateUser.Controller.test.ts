import { getConnection } from 'typeorm';
import Connection from '../../database/index';
import { Request } from 'express';
import { CreateUserController } from '../../controllers/CreateUser.controller';
import { makeMockResponse } from '../../utils/mocks/MockResponse';

describe('CreateUserController', () => {
  beforeAll(async () => {
    const Banco = await Connection();
    await Banco.runMigrations();
  });
  afterAll(async () => {
    const banco = getConnection();
    await banco.query('DELETE FROM users');
    await banco.close();
  });
  const createUserController = new CreateUserController();

  const response = makeMockResponse();
  it('Deve retorna o status 201 quando o usuário for criado', async () => {
    const request = {
      body: {
        name: 'User',
        email: 'email@email.com',
      },
    } as Request;

    await createUserController.handle(request, response);
    expect(response.state.status).toBe(201);
  });
  it('Dever retornar o status 201 quando o email nao for informado', async () => {
    const request = {
      body: {
        name: 'User',
      },
    } as Request;

    await createUserController.handle(request, response);
    expect(response.state.status).toBe(201);
  });

  it('Deve retorna 400 quando der erro na criação do usuário', async () => {
    const request = {
      body: {
        email: 'email@email.com',
      },
    } as Request;
    await createUserController.handle(request, response);
    expect(response.state.status).toBe(400);
  });
});
