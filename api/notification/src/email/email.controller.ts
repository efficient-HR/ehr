import { Controller, Get, Post } from '@nestjs/common';
import { Email } from 'src/database/entities/email.entity';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  all(): Promise<Email[]> {
    return this.emailService.findAll();
  }

  @Post()
  create(): Email {
    return this.emailService.create();
  }
}
