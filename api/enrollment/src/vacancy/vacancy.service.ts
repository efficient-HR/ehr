import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vacancy } from 'src/database/entities/vacancy.entity';
import { Repository } from 'typeorm';
import { CreateVacancyDto } from './dto/create-vacancy.Dto';
import { VacancyDto } from './dto/vacancy.dto';

@Injectable()
export class VacancyService {
  constructor(
    @InjectRepository(Vacancy)
    private vacancyRepository: Repository<Vacancy>,
    @InjectMapper()
    private mapper: Mapper,
  ) {}
  async create(vacency: CreateVacancyDto): Promise<VacancyDto> {
    const req = this.mapper.map(vacency, CreateVacancyDto, Vacancy);
    const res = await this.vacancyRepository.save(req);
    return this.mapper.map(res, Vacancy, VacancyDto);
  }
  async getById(id: number): Promise<VacancyDto> {
    const vacancy = await this.vacancyRepository.findOne({
      relations: {
        company: true,
      },
      where: { id: id },
    });
    return this.mapper.map(vacancy, Vacancy, VacancyDto);
  }
  async get(): Promise<VacancyDto[]> {
    const vacancies = await this.vacancyRepository.find({
      relations: {
        company: true,
      },
    });
    return this.mapper.mapArray(vacancies, Vacancy, VacancyDto);
  }
}
