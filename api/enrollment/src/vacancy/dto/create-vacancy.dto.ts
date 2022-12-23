import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { VacancyDto } from './vacancy.dto';

export class CreateVacancyDto extends VacancyDto {
  @ApiProperty()
  @AutoMap()
  companyId: number;
}
