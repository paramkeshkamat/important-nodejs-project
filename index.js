import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).send("Super Important NodeJS Project 😲🔥");
});

app.route("/important-route", (req, res) => {
  res.status(200).json({
    data: "Very important data 🤫",
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
