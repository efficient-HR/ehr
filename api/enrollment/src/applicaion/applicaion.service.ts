import { Injectable } from '@nestjs/common';
import { CreateApplicaionDto } from './dto/create-applicaion.dto';
import { UpdateApplicaionDto } from './dto/update-applicaion.dto';

@Injectable()
export class ApplicaionService {
  create(createApplicaionDto: CreateApplicaionDto) {
    return 'This action adds a new applicaion';
  }

  findAll() {
    return `This action returns all applicaion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} applicaion`;
  }

  update(id: number, updateApplicaionDto: UpdateApplicaionDto) {
    return `This action updates a #${id} applicaion`;
  }

  remove(id: number) {
    return `This action removes a #${id} applicaion`;
  }
}
