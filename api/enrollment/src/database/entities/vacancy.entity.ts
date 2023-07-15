import { AutoMap } from '@automapper/classes';
import { Entity, Column, ManyToOne } from 'typeorm';
import { Company } from './company.entity';
import { ParentEntity } from './parentEntity';

@Entity({ schema: 'company', name: 'vacancy' })
export class Vacancy extends ParentEntity {
  @Column()
  @AutoMap()
  title: string;

  // TODO: this is a list data. a table must be created and linked.
  @Column()
  @AutoMap()
  skill: string;

  @Column()
  @AutoMap()
  experience: string;

  @Column()
  @AutoMap()
  location: string;

  @Column()
  @AutoMap()
  description: string;

  @Column({ default: 1 })
  @AutoMap()
  status: number;

  // TODO: this must be linked to user table.
  @Column({ nullable: true })
  @AutoMap()
  hr: string;

  @ManyToOne(() => Company, (v) => v.vacancies, {
    onDelete: 'CASCADE',
  })
  company: Company;
}
