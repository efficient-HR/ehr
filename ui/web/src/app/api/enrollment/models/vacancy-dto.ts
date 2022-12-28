/* tslint:disable */
/* eslint-disable */
import { CompanyDto } from './company-dto';
export interface VacancyDto {
  company: null | CompanyDto;
  description: string;
  experience: string;
  id: number;
  location: string;
  skill: string;
  title: string;
}
