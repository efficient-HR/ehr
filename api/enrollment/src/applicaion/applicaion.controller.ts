import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicaionService } from './applicaion.service';
import { CreateApplicaionDto } from './dto/create-applicaion.dto';
import { UpdateApplicaionDto } from './dto/update-applicaion.dto';

@Controller('applicaion')
export class ApplicaionController {
  constructor(private readonly applicaionService: ApplicaionService) {}

  @Post()
  create(@Body() createApplicaionDto: CreateApplicaionDto) {
    return this.applicaionService.create(createApplicaionDto);
  }

  @Get()
  findAll() {
    return this.applicaionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicaionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicaionDto: UpdateApplicaionDto) {
    return this.applicaionService.update(+id, updateApplicaionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicaionService.remove(+id);
  }
}
