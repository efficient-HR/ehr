import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company.service';
import { CompanylDto } from './dto/company.dto';

@ApiTags('company')
@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  @ApiResponse({ type: CompanylDto, isArray: true })
  async all(): Promise<CompanylDto[]> {
    return this.companyService.findAll();
  }

  @Post()
  @ApiResponse({ type: CompanylDto })
  async create(@Body() company: CompanylDto): Promise<CompanylDto> {
    return this.companyService.create(company);
  }
}
