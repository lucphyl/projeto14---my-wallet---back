import express from "express";
import cors from "cors";
import routerAuth from "./routers/authRouter.js";
import routerTransações from "./routers/transaçõesRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routerAuth)
app.use(routerTransações)


const PORTA = 5000
app.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`))

