import { Router } from "express";
import { validaSchema } from "../middlewares/validaSchema.js ";
import { signinSchema, userSchema } from "../schemas/auth.schemas.js";
import { signUP } from "../controle/authController.js";


const routerAuth = Router()

routerAuth.post("/sign-in", validaSchema(signinSchema), signIN)
routerAuth.post("/sign-up", validaSchema(userSchema), signUP)
routerAuth.post("/logout", )
export default routerAuth;