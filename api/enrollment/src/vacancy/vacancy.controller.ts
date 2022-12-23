import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateVacancyDto } from './dto/create-vacancy.Dto';
import { VacancyDto } from './dto/vacancy.dto';
import { VacancyService } from './vacancy.service';

@ApiTags('vacancy')
@Controller('vacancy')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Get()
  @ApiResponse({ type: VacancyDto, isArray: true })
  // @ApiParam({ name: 'id', required: true })
  async get(): Promise<VacancyDto[]> {
    return await this.vacancyService.get();
  }

  @Get('/:id')
  @ApiResponse({ type: VacancyDto, isArray: false })
  @ApiParam({ name: 'id', required: true })
  async getById(@Param('id') id: number): Promise<VacancyDto> {
    return this.vacancyService.getById(id);
  }

  @Post()
  @ApiResponse({ type: VacancyDto, isArray: false })
  async create(@Body() vacency: CreateVacancyDto): Promise<VacancyDto> {
    return this.vacancyService.create(vacency);
  }
}
