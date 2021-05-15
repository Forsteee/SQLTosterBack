import { createConnection } from 'typeorm';
export default createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1',
  database: 'dbtest',
  entities: ['dist/testingapi/db/dbtest/**/*.entity{.ts,.js}'],
  /*migrationsTableName: 'migration_table',
  migrations: ['dist/migration/!*{.ts,.js}'],
  cli: {
    migrationsDir: 'migration',
  },*/
  synchronize: true,
});
