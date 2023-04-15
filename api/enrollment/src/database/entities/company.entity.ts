import { AutoMap } from '@automapper/classes';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Vacancy } from './vacancy.entity';

@Entity({ schema: 'company', name: 'company' })
// @Entity()
export class Company {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column()
  @AutoMap()
  name: string;

  @Column()
  @AutoMap()
  location: string;

  @Column()
  @AutoMap()
  about: string;

  @OneToMany(() => Vacancy, (c) => c.company)
  vacancies?: Vacancy[];
}
