import { MigrationInterface, QueryRunner } from 'typeorm';

export class TestingTable1619182767074 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Testing"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Testing"`);
  }
}
