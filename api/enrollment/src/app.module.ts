import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresConfig } from 'config/postgres.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { VacancyModule } from './vacancy/vacancy.module';
import { ApplicationModule } from './application/application.module';
import { InterviewModule } from './interview/interview.module';

@Module({
  imports: [
    CompanyModule,
    TypeOrmModule.forRoot(postgresConfig),

    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),

    VacancyModule,

    ApplicationModule,

    InterviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
