import { AutoMap } from '@automapper/classes';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
