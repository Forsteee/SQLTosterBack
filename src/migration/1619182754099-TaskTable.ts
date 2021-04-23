import { MigrationInterface, QueryRunner } from 'typeorm';

export class TaskTable1619182754099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Task"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Task"`);
  }
}
