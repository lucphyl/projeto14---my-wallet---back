import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORTA = 5000
app.listen(PORTA, () => console.log('servidor rodando legal'));


