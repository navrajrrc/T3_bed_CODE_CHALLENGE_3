import { Request, Response, NextFunction } from "express";
import { createTask } from "../services/taskService";
import { HTTP_STATUS } from "../../../constants/httpConstants";

export const createTaskController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await createTask(req.body);
    res.status(HTTP_STATUS.CREATED).json({ data: task });
  } catch (error) {
    next(error);
  }
};
