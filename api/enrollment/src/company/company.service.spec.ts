import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from './company.service';
import { Company } from './../database/entities/company.entity';
import { CompanyDto } from './dto/company.dto';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AutomapperModule, getMapperToken } from '@automapper/nestjs';
import { Repository } from 'typeorm';

describe('CompanyService', () => {
  let companyService: CompanyService;
  let companyRepositoryMock;
  let mapperMock;

  beforeEach(async () => {
    companyRepositoryMock = {
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
        CompanyService,
        {
          provide: getRepositoryToken(Company),
          useValue: companyRepositoryMock,
        },
        {
          provide: getMapperToken(),
          useValue: mapperMock,
        },
      ],
    }).compile();

    companyService = module.get<CompanyService>(CompanyService);
    companyRepositoryMock = module.get<Repository<Company>>(
      getRepositoryToken(Company),
    );
  });

  it('should be defined', () => {
    expect(companyService).toBeDefined();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return an array of CompanyDto', async () => {
      // Arrange
      const expectedCompanies: Company[] = [{}, {}] as Company[];
      const expectedCompanyDtos: CompanyDto[] = [{}, {}] as CompanyDto[];
      companyRepositoryMock.find.mockResolvedValue(expectedCompanies);
      mapperMock.mapArray.mockReturnValue(expectedCompanyDtos);

      // Act
      const result = await companyService.findAll();

      // Assert
      expect(companyRepositoryMock.find).toHaveBeenCalled();
      expect(mapperMock.mapArray).toHaveBeenCalledWith(
        expectedCompanies,
        Company,
        CompanyDto,
      );
      expect(result).toEqual(expectedCompanyDtos);
    });
  });

  describe('getById', () => {
    it('should return a CompanyDto by id', async () => {
      // Arrange
      const id = 1;
      const expectedCompany: Company = {} as Company;
      const expectedCompanyDto: CompanyDto = {} as CompanyDto;
      companyRepositoryMock.findOne.mockResolvedValue(expectedCompany);
      mapperMock.map.mockReturnValue(expectedCompanyDto);

      // Act
      const result = await companyService.getById(id);

      // Assert
      expect(companyRepositoryMock.findOne).toHaveBeenCalledWith({
        where: { id },
      });
      expect(mapperMock.map).toHaveBeenCalledWith(
        expectedCompany,
        Company,
        CompanyDto,
      );
      expect(result).toEqual(expectedCompanyDto);
    });
  });

  describe('save', () => {
    it('should save a company', async () => {
      // Mock data
      const saveCompanyDto: CompanyDto = {
        id: 1,
        name: 'Test Company',
        about: 'Test about',
        location: 'Location 1',
      };
      const createdCompany: Company = {
        id: 1,
        name: 'Test Company',
        about: 'Test about',
        location: 'Location 1',
      };

      // Mock repository methods
      jest
        .spyOn(companyRepositoryMock, 'save')
        .mockResolvedValue(createdCompany);

      // Mock mapper
      jest
        .spyOn(mapperMock, 'map')
        .mockImplementation((_, __, ___, ____) => createdCompany);

      // Call service method
      const result: CompanyDto = await companyService.save(saveCompanyDto);

      // Assertions
      expect(result).toEqual(expect.objectContaining(createdCompany));
      expect(companyRepositoryMock.save).toHaveBeenCalledWith(
        expect.objectContaining(saveCompanyDto),
      );
      expect(mapperMock.map).toHaveBeenCalledTimes(2);
    });
  });
});
