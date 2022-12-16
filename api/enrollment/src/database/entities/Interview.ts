import { AutoMap } from '@automapper/classes';
import { Entity, Column } from 'typeorm';
import { ParentEntity } from './parentEntity';

@Entity({ schema: 'company', name: 'interview' })
export class Interview extends ParentEntity {
  @Column()
  @AutoMap()
  applicationId: number;

  @Column()
  @AutoMap()
  name: string;

  @Column()
  @AutoMap()
  schedule: Date;

  @Column()
  @AutoMap()
  duration: number;

  @Column()
  @AutoMap()
  interviewer: string;

  @Column()
  @AutoMap()
  score: number;

  @Column()
  @AutoMap()
  isSelected: boolean;
}
