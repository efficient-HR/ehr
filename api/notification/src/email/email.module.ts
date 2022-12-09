import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { Email } from 'src/database/entities/email.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Email])],
  providers: [EmailService],
  controllers: [EmailController]
})
export class EmailModule {}
