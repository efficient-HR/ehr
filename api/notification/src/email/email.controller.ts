import { Controller, Get, Post } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiResponseProperty,
  ApiTags,
} from '@nestjs/swagger';
import { Email } from 'src/database/entities/email.entity';
import { EmailDto } from './dto/email.dto';
import { EmailService } from './email.service';

@Controller('email')
@ApiTags('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  @ApiResponse({ type: EmailDto, isArray: true })
  async all(): Promise<EmailDto[]> {
    return this.emailService.findAll();
  }

  @Post()
  create(): Promise<Email> {
    return this.emailService.create();
  }
}
