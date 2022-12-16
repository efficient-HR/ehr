import { Test, TestingModule } from '@nestjs/testing';
import { ApplicaionController } from './applicaion.controller';
import { ApplicaionService } from './applicaion.service';

describe('ApplicaionController', () => {
  let controller: ApplicaionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplicaionController],
      providers: [ApplicaionService],
    }).compile();

    controller = module.get<ApplicaionController>(ApplicaionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
