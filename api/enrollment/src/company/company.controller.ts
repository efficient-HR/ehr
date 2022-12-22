import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company.service';
import { CompanyDto } from './dto/company.dto';

@ApiTags('company')
@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  @ApiResponse({ type: CompanyDto, isArray: true })
  async all(): Promise<CompanyDto[]> {
    return this.companyService.findAll();
  }

  @Get('/:id')
  @ApiResponse({ type: CompanyDto, isArray: false })
  @ApiParam({ name: 'id', required: true })
  async get(@Param('id') id: number): Promise<CompanyDto> {
    return this.companyService.getById(id);
  }

  @Post()
  @ApiResponse({ type: CompanyDto })
  async create(@Body() company: CompanyDto): Promise<CompanyDto> {
    return this.companyService.create(company);
  }
}
