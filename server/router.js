import Router from 'express';
import TasksController from "./Controllers/TasksController.js";

const router = new Router();

router.get("/tasks", TasksController.getAll);

export default router;