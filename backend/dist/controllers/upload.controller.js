"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const apiResponse_1 = require("../utils/apiResponse");
const uploadFile = async (req, res) => {
    try {
        // validate that a file was uploaded by multer middleware
        if (!req.file) {
            return res.status(400).json((0, apiResponse_1.errorResponse)("No file uploaded"));
        }
        // extract file details from multer's request object
        const file = req.file;
        // validate Cloudinary upload result
        if (!file.path || !file.filename) {
            return res.status(500).json((0, apiResponse_1.errorResponse)("Cloudinary upload failed"));
        }
        // successful response with file details
        return res.status(200).json((0, apiResponse_1.successResponse)({
            url: file.path,
            publicId: file.filename,
            originalName: file.originalname,
            mimeType: file.mimetype,
            size: file.size,
        }, "File uploaded successfully"));
    }
    catch (error) {
        console.error("File upload failed:", error);
        // specific error handling for Multer file size limit
        if (error instanceof Error && error.message.includes("File too large")) {
            return res.status(400).json((0, apiResponse_1.errorResponse)("File size exceeds limit"));
        }
        // generic error response for other cases
        return res.status(500).json((0, apiResponse_1.errorResponse)("Failed to upload file"));
    }
};
exports.uploadFile = uploadFile;
