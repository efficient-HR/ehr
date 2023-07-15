import { AutoMap } from '@automapper/classes';
import { Entity, Column } from 'typeorm';
import { ParentEntity } from './parentEntity';

@Entity({ schema: 'company', name: 'user' })
export class User extends ParentEntity {
  @Column()
  @AutoMap()
  firstName: string;

  @Column()
  @AutoMap()
  lastName: string;

  @Column()
  @AutoMap()
  email: string;

  @Column()
  @AutoMap()
  phone: string;

  @Column()
  @AutoMap()
  type: number;
}
