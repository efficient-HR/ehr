import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Email } from 'src/database/entities/email.entity';
import { Repository } from 'typeorm';
import { EmailDto } from './dto/email.dto';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(Email)
    private emailRepository: Repository<Email>,
    @InjectMapper()
    private mapper: Mapper,
  ) {}

  async findAll(): Promise<EmailDto[]> {
    const emails = await this.emailRepository.find();
    return this.mapper.mapArray(emails, Email, EmailDto);
  }

  create(): Promise<Email> {
    const email = new Email();
    email.body = 'body 1';
    email.to = 'Some to';
    email.subject = 'some subject';

    return this.emailRepository.save(email);
  }
}
