import { PartialType } from '@nestjs/swagger';
import { CreateApplicaionDto } from './create-applicaion.dto';

export class UpdateApplicaionDto extends PartialType(CreateApplicaionDto) {}
