import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Vacancy } from 'src/database/entities/vacancy.entity';
import { VacancyDto } from 'src/vacancy/dto/vacancy.dto';
import { Company } from 'src/database/entities/company.entity';
import { CreateVacancyDto } from 'src/vacancy/dto/create-vacancy.Dto';

@Injectable()
export class VacancyMapperProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        Vacancy,
        VacancyDto,
        forMember(
          (destination) => destination.companyName,
          mapFrom((source) => source.company.name),
        ),
      );

      createMap(
        mapper,
        CreateVacancyDto,
        Vacancy,
        forMember(
          (destination) => destination.company.id,
          mapFrom((source) => source.companyId),
        ),
      );
    };
  }
}
