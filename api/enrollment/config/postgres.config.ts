import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// export const postgresConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'arya',
//   password: '',
//   database: 'arya',
//   entities: [__dirname + '/../**/*.entity.{js,ts}'],
//   synchronize: true,
//   logging: true,
// };
export const postgresConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'tiny.db.elephantsql.com',
  port: 5432,
  username: 'msugytwy',
  password: 'YM12sxNMrOK9mW1AU35mKg21q3oyKJft',
  database: 'msugytwy',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  logging: true,
};
