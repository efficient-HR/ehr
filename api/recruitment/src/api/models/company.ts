import { Vacancy } from "./vacancy";

export type Company = {
    name: string;
    location: string;
    about: string;
    vacancies?: Vacancy[]
}
