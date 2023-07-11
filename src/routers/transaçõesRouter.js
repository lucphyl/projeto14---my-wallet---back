import { Router } from "express";
import { criaTransação, pegaTransação } from "../controle/trnsactionController.js";
import { authValidate } from "../middlewares/authMid.js";
import { validaSchema } from "../middlewares/validaSchema.js";
import { schemaTransactions } from "../schemas/schemaTransações.js";

const routerTransações = Router();

routerTransações.post ("/transactions",authValidate,validaSchema(schemaTransactions), criaTransação)
routerTransações.get("/transactions",authValidate, pegaTransação)

export default routerTransações;