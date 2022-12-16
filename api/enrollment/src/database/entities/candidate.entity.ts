import { AutoMap } from '@automapper/classes';
import { Column, Entity } from 'typeorm';
import { ParentEntity } from './parentEntity';

@Entity({ schema: 'company', name: 'candidate' })
export class Candidate extends ParentEntity {
  @Column()
  @AutoMap()
  name: string;

  @Column({ nullable: true })
  @AutoMap()
  location: string;

  @Column({ nullable: true })
  @AutoMap()
  photoUrl: string;
}
