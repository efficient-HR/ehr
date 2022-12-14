import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Company } from 'src/database/entities/company.entity';
import { CompanylDto } from './dto/company.dto';
@Injectable()
export class EmailMapperProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Company, CompanylDto);
      createMap(mapper, CompanylDto, Company);
    };
  }
}
