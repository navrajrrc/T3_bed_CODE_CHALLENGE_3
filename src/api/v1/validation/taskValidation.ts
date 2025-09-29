import Joi from "joi";

export const taskSchemas = {
  create: {
    body: Joi.object({
      userId: Joi.string().required(),
      title: Joi.string().required(),
      priority: Joi.string().valid("low", "medium", "high").required(),
      status: Joi.string().valid("open", "in-progress", "completed").required(),
      dueDate: Joi.date().required(),
    }),
  },
};
