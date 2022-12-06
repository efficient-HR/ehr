import { db } from "../../utils/db.server";
import type { Company } from "../models/company";

export const companies = async (): Promise<Company[]> => {
    return db.company.findMany({
        select: {
            name: true,
            about: true,
            location: true,
            vacencies: {
                select: {
                    title: true,
                    experience: true
                }
            }
        }
    })
}