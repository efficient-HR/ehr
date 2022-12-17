import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Company } from 'src/database/entities/company.entity';
import { CompanyDto } from '../company/dto/company.dto';
@Injectable()
export class EmailMapperProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Company, CompanyDto);
      createMap(mapper, CompanyDto, Company);
    };
  }
}
