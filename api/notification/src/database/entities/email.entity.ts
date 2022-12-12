import { AutoMap } from '@automapper/classes';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column()
  @AutoMap()
  to: string;

  @Column()
  @AutoMap()
  body: string;

  @Column()
  @AutoMap()
  subject: string;
}
