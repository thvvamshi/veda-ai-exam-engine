import { Router } from "express";

import { uploadFile } from "../controllers/upload.controller";

import { upload } from "../middleware/upload.middleware";

const router = Router();
// upload route with multer middleware for file handling and validation
router.post(
  "/",

  (req, res, next) => {
    upload.single("file")(req, res, (error) => {
      if (error) {
        return res.status(400).json({
          success: false,

          message: error.message || "File upload failed",
        });
      }

      next();
    });
  },

  uploadFile,
);

export default router;
