import multer from "multer";

import { CloudinaryStorage } from "multer-storage-cloudinary";

import cloudinary from "../config/cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,

  params: async (req, file) => ({
    folder: "veda-ai-assignments",

    resource_type: file.mimetype === "application/pdf" ? "raw" : "auto",

    access_mode: "public",

    public_id: `${Date.now()}-${file.originalname
      .split(".")[0]
      .replace(/\s+/g, "-")}`,
  }),
});

export const upload = multer({
  storage,

  limits: {
    fileSize: 30 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    try {
      const allowedMimeTypes = [
        "application/pdf",

        "application/msword",

        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

        "image/png",

        "image/jpeg",
      ];

      if (!allowedMimeTypes.includes(file.mimetype)) {
        return cb(
          new Error(
            "Invalid file type. Only PDF, DOC, DOCX, PNG, JPG are allowed.",
          ),
        );
      }

      cb(null, true);
    } catch (error) {
      cb(new Error("File validation failed"));
    }
  },
});
