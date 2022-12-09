import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const postgresConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'arya',
  password: '',
  database: 'arya',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
