import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaveVacancyDto } from './dto/save-vacancy.dto';
import { VacancyDto } from './dto/vacancy.dto';
import { Vacancy } from '../database/entities/vacancy.entity';

@Injectable()
export class VacancyService {
  constructor(
    @InjectRepository(Vacancy)
    private vacancyRepository: Repository<Vacancy>,
    @InjectMapper()
    private mapper: Mapper,
  ) {}
  async create(vacancy: SaveVacancyDto): Promise<VacancyDto> {
    const req = this.mapper.map(vacancy, SaveVacancyDto, Vacancy);
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
    const c = this.mapper.map(vacancy, Vacancy, VacancyDto);
    return c;
  }
  async all(): Promise<VacancyDto[]> {
    const vacancies = await this.vacancyRepository.find({
      relations: {
        company: true,
      },
    });
    return this.mapper.mapArray(vacancies, Vacancy, VacancyDto);
  }
}
