import express from "express";
import type { Request, Response } from "express";
import { getCompanies } from "../controllers/company.controller";


export const companyRouter = express.Router();

companyRouter.get("/", getCompanies);