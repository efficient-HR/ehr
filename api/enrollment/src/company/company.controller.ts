import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
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

  @Post()
  @ApiResponse({ type: CompanyDto })
  async create(@Body() company: CompanyDto): Promise<CompanyDto> {
    return this.companyService.create(company);
  }
}
