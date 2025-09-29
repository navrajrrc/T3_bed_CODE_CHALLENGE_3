import { createTask } from "src/api/v1/services/taskService";
import * as repo from "../src/api/v1/repositories/firestoreRepository";

jest.mock("../src/api/v1/repositories/firestoreRepository");

describe("Task Service", () => {
  it("should create a task", async () => {
    (repo.createDocument as jest.Mock).mockResolvedValue("123");

    const task = await createTask({
      userId: "u1",
      title: "Test Task",
      priority: "low",
      status: "open",
      dueDate: new Date(),
    });

    expect(task.id).toBe("123");
    expect(task.createdAt).toBeDefined();
    expect(repo.createDocument).toHaveBeenCalled();
  });
});
