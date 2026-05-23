import { Request, Response } from "express";

import { successResponse, errorResponse } from "../utils/apiResponse";

export const uploadFile = async (
  req: Request,

  res: Response,
) => {
  try {
    // validate that a file was uploaded by multer middleware
    if (!req.file) {
      return res.status(400).json(errorResponse("No file uploaded"));
    }
    // extract file details from multer's request object
    const file = req.file as Express.Multer.File & {
      path: string;

      filename: string;
    };
    // validate Cloudinary upload result
    if (!file.path || !file.filename) {
      return res.status(500).json(errorResponse("Cloudinary upload failed"));
    }
    // successful response with file details
    return res.status(200).json(
      successResponse(
        {
          url: file.path,

          publicId: file.filename,

          originalName: file.originalname,

          mimeType: file.mimetype,

          size: file.size,
        },

        "File uploaded successfully",
      ),
    );
  } catch (error) {
    console.error("File upload failed:", error);
    // specific error handling for Multer file size limit
    if (error instanceof Error && error.message.includes("File too large")) {
      return res.status(400).json(errorResponse("File size exceeds limit"));
    }
    // generic error response for other cases
    return res.status(500).json(errorResponse("Failed to upload file"));
  }
};
