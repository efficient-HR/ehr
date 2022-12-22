import { AutoMap } from '@automapper/classes';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
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

  @OneToMany(() => Company, (c) => c.vacancies)
  vacancies: Vacancy[];
}
