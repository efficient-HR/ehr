import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { CompanyDto } from '../company/dto/company.dto';
import { Company } from '../database/entities/company.entity';
@Injectable()
export class CompanyMapperProfile extends AutomapperProfile {
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
