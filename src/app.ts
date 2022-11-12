import express, { Express, Request, Response } from "express";
import cors from "cors";
import compression from "compression";
import dotenv from "dotenv";

const app: Express = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(compression());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Super Important NodeJS Project 😲🔥");
});

app.get("/important-route", (req: Request, res: Response) => {
  res.status(200).json({
    data: "Very important data 🤫",
  });
});

export { app };
