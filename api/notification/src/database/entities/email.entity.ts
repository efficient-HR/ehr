
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  to: string;

  @Column()
  body: string;

  @Column() 
  subject: string;
}