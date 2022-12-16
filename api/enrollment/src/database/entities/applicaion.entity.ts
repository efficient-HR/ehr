import { AutoMap } from '@automapper/classes';
import { Column, Entity } from 'typeorm';
import { ParentEntity } from './parentEntity';

@Entity({ schema: 'company', name: 'applicaion' })
export class Applicaion extends ParentEntity {
  @Column()
  @AutoMap()
  vacancyId: number;

  @Column()
  @AutoMap()
  jobBoardId: number;

  @Column()
  @AutoMap()
  candidateId: number;

  @Column()
  @AutoMap()
  resumeUrl: string;

  @Column()
  @AutoMap()
  coverLetterUrl: string;

  @Column()
  @AutoMap()
  message: string;

  @Column()
  @AutoMap()
  email: string;

  @Column()
  @AutoMap()
  phone: string;
}
