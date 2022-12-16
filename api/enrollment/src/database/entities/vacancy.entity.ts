import { AutoMap } from '@automapper/classes';
import { Entity, Column } from 'typeorm';
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

  // TODO: this must be linked to user table.
  @Column()
  @AutoMap()
  hr: string;
}
