import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import Joi from "joi";

export const validateRequest =
  (schemas: { body?: Joi.ObjectSchema; params?: Joi.ObjectSchema; query?: Joi.ObjectSchema }) =>
  (req: Request, res: Response, next: NextFunction) => {
    const options = { abortEarly: false, allowUnknown: false, stripUnknown: true };

    const errors: string[] = [];

    if (schemas.body) {
      const { error, value } = schemas.body.validate(req.body, options);
      if (error) errors.push(...error.details.map(d => d.message));
      else req.body = value;
    }

    if (schemas.params) {
      const { error, value } = schemas.params.validate(req.params, options);
      if (error) errors.push(...error.details.map(d => d.message));
      else req.params = value;
    }

    if (schemas.query) {
      const { error, value } = schemas.query.validate(req.query, options);
      if (error) errors.push(...error.details.map(d => d.message));
      else req.query = value;
    }

    if (errors.length > 0) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ errors });
    }

    next();
  };
