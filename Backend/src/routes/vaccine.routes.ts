import {Router} from "express";

import vaccineController from "../controllers/vaccine.controller";

const router = Router();

router.get("/", vaccineController.getVaccines);
router.post("/", vaccineController.postVaccine);
router.put("/:id", vaccineController.updateVaccine)

export default router;
