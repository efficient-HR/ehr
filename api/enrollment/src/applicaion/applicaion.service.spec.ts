import { Test, TestingModule } from '@nestjs/testing';
import { ApplicaionService } from './applicaion.service';

describe('ApplicaionService', () => {
  let service: ApplicaionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicaionService],
    }).compile();

    service = module.get<ApplicaionService>(ApplicaionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
