import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class EmailDto {
  @ApiProperty()
  @AutoMap()
  id: number;

  @ApiProperty()
  @AutoMap()
  to: string;

  @ApiProperty()
  @AutoMap()
  subject: string;

  @ApiProperty()
  @AutoMap()
  body: string;

  @ApiProperty()
  @AutoMap()
  abc: string;
}
