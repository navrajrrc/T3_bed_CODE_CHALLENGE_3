import { Router } from "express";
import { createTaskController } from "../controllers/taskController";
import { validateRequest } from "../middleware/validate";
import { taskSchemas } from "../validation/taskValidation";

const router = Router();

router.post("/", validateRequest(taskSchemas.create), createTaskController);

export default router;
