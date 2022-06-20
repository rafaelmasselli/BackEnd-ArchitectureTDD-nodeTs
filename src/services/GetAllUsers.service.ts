import { getRepository } from 'typeorm';
import { User } from '../entities/User';

class GetAllUsers {
  async execute() {
    const Users = await getRepository(User)
      .createQueryBuilder('users')
      .select()
      .getMany();
    return Users;
  }
}

export { GetAllUsers };
