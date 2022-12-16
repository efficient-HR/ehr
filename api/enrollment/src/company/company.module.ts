import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/database/entities/company.entity';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { EmailMapperProfile } from '../mapping/company.mapper.profile';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  controllers: [CompanyController],
  providers: [CompanyService, EmailMapperProfile],
})
export class CompanyModule {}
