import { Test } from '@nestjs/testing';
import { VacancyController } from './vacancy.controller';
import { VacancyService } from './vacancy.service';
import { VacancyDto } from './dto/vacancy.dto';
import { SaveVacancyDto } from './dto/save-vacancy.dto';
import { CompanyDto } from '../company/dto/company.dto';

describe('VacancyController', () => {
  let vacancyController: VacancyController;
  let vacancyService: VacancyService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [VacancyController],
      providers: [
        {
          provide: VacancyService,
          useValue: {
            findAll: jest.fn(),
            getById: jest.fn(),
            save: jest.fn(),
            all: jest.fn(),
          },
        },
      ],
    }).compile();

    vacancyService = moduleRef.get<VacancyService>(VacancyService);
    vacancyController = moduleRef.get<VacancyController>(VacancyController);
  });

  describe('all', () => {
    fit('should return an array of vacancy objects', async () => {
      const vacancyDtoArray: VacancyDto[] = [
        {
          id: 1,
          title: 'Vacancy 1',
          skill: 'Skill 1',
          experience: '1 year',
          location: 'Location 1',
          description: 'Description 1',
          company: { id: 1, name: 'Company 1' } as CompanyDto,
        },
        {
          id: 2,
          title: 'Vacancy 2',
          skill: 'Skill 2',
          experience: '2 years',
          location: 'Location 2',
          description: 'Description 2',
          company: { id: 2, name: 'Company 2' } as CompanyDto,
        },
      ];
      jest.spyOn(vacancyService, 'all').mockResolvedValue(vacancyDtoArray);

      const result = await vacancyController.all();

      expect(result).toEqual(vacancyDtoArray);
    });

    it('should return an empty array when no vacancies found', async () => {
      jest.spyOn(vacancyService, 'all').mockResolvedValue([]);

      const result = await vacancyController.all();

      expect(result).toEqual([]);
    });
  });

  describe('getById', () => {
    it('should return a vacancy object by id', async () => {
      const vacancyDto: VacancyDto = {
        id: 1,
        title: 'Vacancy 1',
        skill: 'Skill 1',
        experience: '1 year',
        location: 'Location 1',
        description: 'Description 1',
        company: { id: 1, name: 'Company 1' } as CompanyDto,
      };
      jest.spyOn(vacancyService, 'getById').mockResolvedValue(vacancyDto);

      const result = await vacancyController.getById(1);

      expect(result).toEqual(vacancyDto);
    });

    it('should return null when no vacancy found by id', async () => {
      jest.spyOn(vacancyService, 'getById').mockResolvedValue(null);

      const result = await vacancyController.getById(1);

      expect(result).toBeNull();
    });
  });

  describe('save', () => {
    it('should create and return a new vacancy object', async () => {
      const saveVacancyDto: SaveVacancyDto = {
        id: -1,
        title: 'New Vacancy',
        skill: 'New Skill',
        experience: '2 years',
        location: 'Location 3',
        description: 'Description 3',
        company: {
          id: 3,
          name: 'Company 3',
        } as CompanyDto,
      };
      const vacancyDto: VacancyDto = {
        id: 1,
        title: 'New Vacancy',
        skill: 'New Skill',
        experience: '2 years',
        location: 'Location 3',
        description: 'Description 3',
        company: { id: 3, name: 'Company 3' } as CompanyDto,
      };
      jest.spyOn(vacancyService, 'create').mockResolvedValue(vacancyDto);

      const result = await vacancyController.save(saveVacancyDto);

      expect(result).toEqual(vacancyDto);
    });

    it('should throw an exception when saving vacancy encounters an error', async () => {
      const saveVacancyDto: SaveVacancyDto = {
        id: -1,
        title: 'New Vacancy',
        skill: 'New Skill',
        experience: '2 years',
        location: 'Location 3',
        description: 'Description 3',
        company: {
          id: 3,
          name: 'Company 3',
        } as CompanyDto,
      };
      const errorMessage = 'Error saving vacancy';
      jest
        .spyOn(vacancyService, 'create')
        .mockRejectedValue(new Error(errorMessage));

      await expect(vacancyController.save(saveVacancyDto)).rejects.toThrowError(
        errorMessage,
      );
    });
  });
});
