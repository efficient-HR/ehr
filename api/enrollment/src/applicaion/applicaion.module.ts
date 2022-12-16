import { Module } from '@nestjs/common';
import { ApplicaionService } from './applicaion.service';
import { ApplicaionController } from './applicaion.controller';

@Module({
  controllers: [ApplicaionController],
  providers: [ApplicaionService]
})
export class ApplicaionModule {}
