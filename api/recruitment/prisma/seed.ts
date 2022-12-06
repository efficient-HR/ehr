
import { db } from "../src/utils/db.server";

type Company = {
    name: string;
    location: string;
    about: string;
}

type Vacancy = {
    title: string;
    experience: number;
}

function getVacancies(): Vacancy[] {
    let vacencies: Vacancy[] = []
    for (let i = 1; i <= 10; i++) {
        vacencies.push({
            title: `Vacency ${i}`,
            experience: i * 2 - i
        })
    }
    return vacencies;
}
function getCompanies(): Company[] {
    var companies: Company[] = []
    for (let i = 1; i <= 10; i++) {
        companies.push({
            name: `Company ${i}`,
            location: `location ${i}`,
            about: `About something ${i}`,
        })
    }
    return companies;
}

async function seed() {
    await Promise.all(
        getCompanies().map((company) => {
            db.company.deleteMany();
            db.vacency.deleteMany();
            return db.company.create({
                data: {
                    name: company.name,
                    location: company.location,
                    about: company.about,
                    vacencies: {
                        create: getVacancies().map(v => {
                            return {
                                title: v.title,
                                experience: v.experience
                            }
                        })
                    }
                }
            })
        })
    );
}

 seed()