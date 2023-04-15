import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { CompanyDto } from '../../company/dto/company.dto';

export class VacancyDto {
  @ApiProperty()
  @AutoMap()
  id: number;

  @ApiProperty()
  @AutoMap()
  title: string;

  @ApiProperty()
  @AutoMap()
  skill: string;

  @ApiProperty()
  @AutoMap()
  experience: string;

  @ApiProperty()
  @AutoMap()
  location: string;

  @ApiProperty()
  @AutoMap()
  description: string;

  @ApiProperty({ nullable: true })
  @AutoMap()
  company?: CompanyDto;
}
