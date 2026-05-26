"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.default,
    params: async (req, file) => ({
        folder: "veda-ai-assignments",
        resource_type: "auto",
        public_id: `${Date.now()}-${file.originalname
            .split(".")[0]
            .replace(/\s+/g, "-")}`,
    }),
});
exports.upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: 30 *
            1024 *
            1024,
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
                return cb(new Error("Invalid file type. Only PDF, DOC, DOCX, PNG, JPG are allowed."));
            }
            cb(null, true);
        }
        catch (error) {
            cb(new Error("File validation failed"));
        }
    },
});
