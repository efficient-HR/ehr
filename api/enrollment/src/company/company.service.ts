import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/database/entities/company.entity';
import { Repository } from 'typeorm';
import { CompanylDto } from './dto/company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    @InjectMapper()
    private mapper: Mapper,
  ) {}

  async findAll(): Promise<CompanylDto[]> {
    const emails = await this.companyRepository.find();
    return this.mapper.mapArray(emails, Company, CompanylDto);
  }

  create(company: CompanylDto): Promise<Company> {
    const req = this.mapper.map(company, CompanylDto, Company);
    return this.companyRepository.save(req);
  }
}
