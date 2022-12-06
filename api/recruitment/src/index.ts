import cors from "cors";
import * as dotenv from "dotenv"
import express from "express";
import { companyRouter } from "./api/routes/company.router";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const app = express()

const PORT: number = parseInt(process.env.PORT as string, 10)

app.use(cors())
app.use(express.json())

app.use("/api/company", companyRouter);

app.listen(PORT, () => {
    console.log("listening at " + PORT);
})
