import { Test, TestingModule } from '@nestjs/testing';
import { VacancyService } from './vacancy.service';
import { SaveVacancyDto } from './dto/save-vacancy.dto';
import { VacancyDto } from './dto/vacancy.dto';
import { getMapperToken } from '@automapper/nestjs';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Vacancy } from '../database/entities/vacancy.entity';
import { Repository } from 'typeorm';

describe('VacancyService', () => {
  let vacancyService: VacancyService;
  let mapperMock;
  let vacancyRepository;

  beforeEach(async () => {
    vacancyRepository = {
      find: jest.fn(),
      findOne: jest.fn(),
      save: jest.fn(),
    };
    mapperMock = {
      mapArray: jest.fn(),
      map: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VacancyService,
        {
          provide: getRepositoryToken(Vacancy),
          useClass: Repository,
        },
        {
          provide: getMapperToken(),
          useValue: mapperMock,
        },
      ],
    }).compile();

    vacancyService = module.get<VacancyService>(VacancyService);
    vacancyRepository = module.get<Repository<Vacancy>>(
      getRepositoryToken(Vacancy),
    );
  });

  describe('create', () => {
    it('should create a vacancy', async () => {
      // Mock data
      const saveVacancyDto: SaveVacancyDto = {
        id: 1,
        title: 'Test Vacancy',
        skill: 'Test Skill',
        experience: 'Test Experience',
        location: 'Test Location',
        description: 'Test Description',
        company: {
          id: 1,
          name: 'Test Company',
          about: 'Test about',
          location: 'Location 1',
        },
      };
      const createdVacancy: Vacancy = {
        id: 1,
        title: 'Test Vacancy',
        skill: 'Test Skill',
        experience: 'Test Experience',
        location: 'Test Location',
        description: 'Test Description',
        hr: 'HR',
        company: {
          id: 1,
          name: 'Test Company',
          about: 'Test about',
          location: 'Location 1',
        },
      };

      // Mock repository methods
      jest.spyOn(vacancyRepository, 'save').mockResolvedValue(createdVacancy);

      // Mock mapper
      jest
        .spyOn(mapperMock, 'map')
        .mockImplementation((_, __, ___, ____) => createdVacancy);

      // Call service method
      const result: VacancyDto = await vacancyService.create(saveVacancyDto);

      // Assertions
      expect(result).toEqual(expect.objectContaining(createdVacancy));
      expect(vacancyRepository.save).toHaveBeenCalledWith(
        expect.objectContaining(saveVacancyDto),
      );
      expect(mapperMock.map).toHaveBeenCalledTimes(2);
    });
  });
});
