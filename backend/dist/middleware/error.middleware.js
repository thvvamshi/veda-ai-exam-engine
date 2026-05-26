"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const zod_1 = require("zod");
const errorMiddleware = (err, _req, res, _next) => {
    console.error("ERROR:", err);
    // Handle Zod validation errors
    if (err instanceof zod_1.ZodError) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: err.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message,
            })),
        });
    }
    // Handle Mongoose CastError (e.g., invalid ObjectId)
    if (err.name === "CastError") {
        return res.status(400).json({
            success: false,
            message: "Invalid resource ID",
        });
    }
    // Handle MongoDB duplicate key error
    if (err.code === 11000) {
        return res.status(400).json({
            success: false,
            message: "Duplicate field value entered",
        });
    }
    // Default to 500 Server Error
    return res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal server error",
    });
};
exports.errorMiddleware = errorMiddleware;
