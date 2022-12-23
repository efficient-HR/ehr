import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/database/entities/company.entity';
import { CompanyMapperProfile } from 'src/mapping/company.mapper.profile';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  controllers: [CompanyController],
  providers: [CompanyService, CompanyMapperProfile],
})
export class CompanyModule {}
