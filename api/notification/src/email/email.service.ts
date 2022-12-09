import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Email } from 'src/database/entities/email.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(Email)
    private emailRepository: Repository<Email>,
  ) {}

  findAll(): Promise<Email[]> {
    return this.emailRepository.find();
  }

  create(): Email {
    const email = new Email();
    email.body = 'body 1';
    email.to = 'Some to';
    email.subject = 'some subject';
    var emailRes =  this.emailRepository.create(email);
    this.emailRepository.save(email);
    return emailRes;
  }
}
