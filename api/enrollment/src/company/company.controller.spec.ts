import { Test } from '@nestjs/testing';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CompanyDto } from './dto/company.dto';

describe('CompanyController', () => {
  let companyController: CompanyController;
  let companyService: CompanyService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [
        // Mock CompanyService
        {
          provide: CompanyService,
          useValue: {
            findAll: jest.fn(),
            getById: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    companyController = moduleRef.get<CompanyController>(CompanyController);
    companyService = moduleRef.get<CompanyService>(CompanyService);
  });

  describe('all', () => {
    it('should return an array of companies', async () => {
      const companies: CompanyDto[] = [
        // mock your companies data here
      ];

      // Mock the findAll method of CompanyService
      jest.spyOn(companyService, 'findAll').mockResolvedValue(companies);

      const result = await companyController.all();

      expect(result).toEqual(companies);
    });

    it('should return an empty array when no companies exist', async () => {
      // Mock the findAll method of CompanyService to return an empty array
      jest.spyOn(companyService, 'findAll').mockResolvedValue([]);

      const result = await companyController.all();

      expect(result).toEqual([]);
    });
  });

  describe('get', () => {
    it('should return a company by id', async () => {
      const companyId = 1;
      const company: CompanyDto = {
        // mock your company data here
      } as CompanyDto;

      // Mock the getById method of CompanyService
      jest.spyOn(companyService, 'getById').mockResolvedValue(company);

      const result = await companyController.get(companyId);

      expect(result).toEqual(company);
    });

    it('should throw an error when an invalid companyId is provided', async () => {
      const companyId = -1; // Invalid companyId

      // Mock the getById method of CompanyService to throw an error
      jest
        .spyOn(companyService, 'getById')
        .mockRejectedValue(new Error('Company not found'));

      // Use try-catch block to catch the error thrown by the controller
      try {
        await companyController.get(companyId);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toEqual('Company not found');
      }
    });
  });

  describe('save', () => {
    it('should save a company', async () => {
      const company: CompanyDto = {
        // mock your company data here
      } as CompanyDto;

      // Mock the save method of CompanyService
      jest.spyOn(companyService, 'save').mockResolvedValue(company);

      const result = await companyController.save(company);

      expect(result).toEqual(company);
    });

    it('should throw an error when an invalid company object is provided', async () => {
      const company: CompanyDto = null; // Invalid company object

      // Mock the save method of CompanyService to throw an error
      jest
        .spyOn(companyService, 'save')
        .mockRejectedValue(new Error('Invalid company object'));

      // Use try-catch block to catch the error thrown by the controller
      try {
        await companyController.save(company);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toEqual('Invalid company object');
      }
    });
  });
});
