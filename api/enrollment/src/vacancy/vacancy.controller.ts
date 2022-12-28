import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SaveVacancyDto } from './dto/save-vacancy.dto';
import { VacancyDto } from './dto/vacancy.dto';
import { VacancyService } from './vacancy.service';

@ApiTags('vacancy')
@Controller('vacancy')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Get()
  @ApiResponse({ type: VacancyDto, isArray: true })
  async all(): Promise<VacancyDto[]> {
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
  async save(@Body() vacancy: SaveVacancyDto): Promise<VacancyDto> {
    return this.vacancyService.create(vacancy);
  }
}
