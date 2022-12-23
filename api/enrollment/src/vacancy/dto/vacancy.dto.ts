import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

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

  @ApiProperty()
  @AutoMap()
  companyName: string;
}
