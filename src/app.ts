import express, { Request, Response, NextFunction, Express } from "express";
import taskRoutes from "../src/api/v1/routes/taskRoutes";

const app: Express = express();
app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);

/**
 * error message if there is any error
 */
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
});

app.use("/api/v1/tasks", taskRoutes);

export default app;