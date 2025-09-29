import { createDocument } from "../repositories/firestoreRepository"; 
import { Task } from "../models/taskModel";

const COLLECTION = "tasks";

export const createTask = async (data: Task): Promise<Task> => {
  const now = new Date();
  const task: Task = {
    ...data,
    createdAt: now,
    updatedAt: now,
  };

  const id = await createDocument<Task>(COLLECTION, task);
  return { id, ...task };
};
