import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class CompanyDto {
  @ApiProperty()
  @AutoMap()
  id: number;

  @ApiProperty()
  @AutoMap()
  name: string;

  @ApiProperty({ nullable: true })
  @AutoMap()
  location?: string;

  @ApiProperty({ nullable: true })
  @AutoMap()
  about?: string;
}
