import {MigrationInterface, QueryRunner} from "typeorm";

export class SQLToster1619783388978 implements MigrationInterface {
    name = 'SQLToster1619783388978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "material" ("id" SERIAL NOT NULL, "file" json, CONSTRAINT "PK_0343d0d577f3effc2054cbaca7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("userId" SERIAL NOT NULL, "login" character varying NOT NULL, "name" character varying NOT NULL, "surname" character varying NOT NULL, "patronymic" character varying NOT NULL, "mail" character varying NOT NULL, "password" character varying NOT NULL, "isAdmin" boolean NOT NULL, CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "testing" ("id" SERIAL NOT NULL, "marker" integer NOT NULL, "userUserId" integer, "testId" integer, CONSTRAINT "PK_d380da037e5aa1b6a5fd58c5b7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "test" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "level" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "number" integer NOT NULL, "description" character varying NOT NULL, "standard" character varying NOT NULL, "recommendation" character varying NOT NULL, "testId" integer, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "testing" ADD CONSTRAINT "FK_854581b561c25bb25e25b223caa" FOREIGN KEY ("userUserId") REFERENCES "user"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "testing" ADD CONSTRAINT "FK_6f92e21039933b274b54b1fcce3" FOREIGN KEY ("testId") REFERENCES "test"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_aeafcad779cd6d5c0d8f6ca0144" FOREIGN KEY ("testId") REFERENCES "test"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_aeafcad779cd6d5c0d8f6ca0144"`);
        await queryRunner.query(`ALTER TABLE "testing" DROP CONSTRAINT "FK_6f92e21039933b274b54b1fcce3"`);
        await queryRunner.query(`ALTER TABLE "testing" DROP CONSTRAINT "FK_854581b561c25bb25e25b223caa"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TABLE "test"`);
        await queryRunner.query(`DROP TABLE "testing"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "material"`);
    }

}
