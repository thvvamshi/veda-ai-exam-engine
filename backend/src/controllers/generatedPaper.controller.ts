import { Request, Response } from "express";

import { GeneratedPaper } from "../models/GeneratedPaper";

import {
  successResponse,
  errorResponse,
} from "../utils/apiResponse";

export const getGeneratedPaper =
  async (
    req: Request,
    res: Response
  ) => {
    const { assignmentId } =
      req.params;

    const generatedPaper =
      await GeneratedPaper.findOne({
        assignmentId,
      });

    if (!generatedPaper) {
      return res
        .status(404)
        .json(
          errorResponse(
            "Generated paper not found"
          )
        );
    }

    return res.status(200).json(
      successResponse(
        generatedPaper,

        "Generated paper fetched successfully"
      )
    );
  };