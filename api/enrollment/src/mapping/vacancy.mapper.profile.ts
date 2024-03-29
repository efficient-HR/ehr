import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Vacancy } from 'src/database/entities/vacancy.entity';
import { VacancyDto } from 'src/vacancy/dto/vacancy.dto';
import { SaveVacancyDto } from 'src/vacancy/dto/save-vacancy.dto';

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
          (destination) => destination.company,
          mapFrom((source) => source.company),
        ),
        forMember(
          (destination) => destination.status,
          mapFrom((e) => {
            switch (e.status) {
              case 1:
                return 'Active';
              case 2:
                return 'Inactive';
              default:
                return 'Unknown';
            }
          }),
        ),
      );

      createMap(
        mapper,
        SaveVacancyDto,
        Vacancy,
        forMember(
          (destination) => destination.company,
          mapFrom((source) => source.company),
        ),
      );
    };
  }
}
