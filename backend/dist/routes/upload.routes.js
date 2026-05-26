"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_controller_1 = require("../controllers/upload.controller");
const upload_middleware_1 = require("../middleware/upload.middleware");
const router = (0, express_1.Router)();
// upload route with multer middleware for file handling and validation
router.post("/", (req, res, next) => {
    upload_middleware_1.upload.single("file")(req, res, (error) => {
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.message || "File upload failed",
            });
        }
        next();
    });
}, upload_controller_1.uploadFile);
exports.default = router;
