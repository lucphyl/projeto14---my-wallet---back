import { Router } from "express";
import routerAuth from "./authRouter.js";
import routerTransações from "./transaçõesRouter.js";


const router = Router()
router.use(routerAuth)
router.use(routerTransações)

export default router