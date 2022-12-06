import type { Request, Response } from "express";
import * as CompanyService from "../services/company.service";

export const getCompanies =async (req:Request, res :Response) => {
    const companies = await CompanyService.companies();
    return res.status(200).json(companies)
}