import { Router } from "express";
import { validaSchema } from "../middlewares/validaSchema.js ";
import { signinSchema, userSchema } from "../schemas/auth.schemas.js";
import { logOUT, signIN, signUP } from "../controle/authController.js";
import { authValidate } from "../middlewares/authMid.js";


const routerAuth = Router()



routerAuth.post("/sign-in", validaSchema(signinSchema), signIN)
routerAuth.post("/sign-up", validaSchema(userSchema), signUP)
routerAuth.post("/logout", authValidate ,logOUT)
export default routerAuth;