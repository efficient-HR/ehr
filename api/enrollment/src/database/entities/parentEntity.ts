import { AutoMap } from '@automapper/classes';
import { PrimaryGeneratedColumn } from 'typeorm';

export class ParentEntity {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;
}
