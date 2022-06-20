import { stringify } from 'querystring';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CriarUsuarios1653956709288
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'string',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'name',
            type: 'string',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'string',
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
