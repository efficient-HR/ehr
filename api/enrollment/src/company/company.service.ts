import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './../database/entities/company.entity';
import { Repository } from 'typeorm';
import { CompanyDto } from './dto/company.dto';
@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    @InjectMapper()
    private mapper: Mapper,
  ) {}

  async findAll(): Promise<CompanyDto[]> {
    const emails = await this.companyRepository.find();
    return this.mapper.mapArray(emails, Company, CompanyDto);
  }

  async getById(id: number): Promise<CompanyDto> {
    const email = await this.companyRepository.findOne({
      where: { id: id },
    });
    return this.mapper.map(email, Company, CompanyDto);
  }

  async save(company: CompanyDto): Promise<CompanyDto> {
    const req = this.mapper.map(company, CompanyDto, Company);
    company = await this.companyRepository.save(req);
    return this.mapper.map(company, Company, CompanyDto);
  }
}
