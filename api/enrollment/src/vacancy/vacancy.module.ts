import { Module } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { VacancyController } from './vacancy.controller';
import { VacancyMapperProfile } from 'src/mapping/vacancy.mapper.profile';
import { Vacancy } from 'src/database/entities/vacancy.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Vacancy])],
  controllers: [VacancyController],
  providers: [VacancyService, VacancyMapperProfile],
})
export class VacancyModule {}
