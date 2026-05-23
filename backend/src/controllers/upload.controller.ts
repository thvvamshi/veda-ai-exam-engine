import { Request, Response } from "express";

import { successResponse, errorResponse } from "../utils/apiResponse";

export const uploadFile = async (
  req: Request,

  res: Response,
) => {
  try {
    // Check if file was uploaded successfully by multer
    if (!req.file) {
      return res.status(400).json(errorResponse("No file uploaded"));
    }
    // Type assertion to access Cloudinary-specific properties added by multer-storage-cloudinary
    const file = req.file as Express.Multer.File & {
      path: string;

      filename: string;
    };
    // file.path contains the URL to the uploaded file in Cloudinary
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

    return res.status(500).json(errorResponse("Failed to upload file"));
  }
};
