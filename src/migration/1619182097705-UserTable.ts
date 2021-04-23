import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserTable1619182097705 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "User"`);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE  "User"`);
  }
}
