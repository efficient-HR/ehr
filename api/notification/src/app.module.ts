import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresConfig } from 'config/postgres.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';

@Module({
  imports: [TypeOrmModule.forRoot(postgresConfig), EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
