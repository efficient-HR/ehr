import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, ignore, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Email } from 'src/database/entities/email.entity';
import { EmailDto } from './dto/email.dto';
@Injectable()
export class EmailMapperProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        Email,
        EmailDto,
        forMember((dest) => dest.abc, ignore()),
      );
    };
  }
}
