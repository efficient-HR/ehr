import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { CompanyDto } from '../../company/dto/company.dto';

const mapStatusToDTO = (e: number): string => {
  // You can define your mapping logic here
  // For example, if the database value is 1, it will return 'Active'
  // If the value is 2, it will return 'Inactive', and so on.
  switch (e) {
    case 1:
      return 'Active';
    case 2:
      return 'Inactive';
    // Add more cases for other possible values if needed
    default:
      return 'Unknown'; // Or any other default value if the numeric value doesn't match any cases
  }
};

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
  status: string;

  @ApiProperty({ nullable: true })
  @AutoMap()
  company?: CompanyDto;
}
