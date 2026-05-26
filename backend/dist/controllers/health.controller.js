"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheck = void 0;
const healthCheck = (_req, res) => {
    return res.status(200).json({
        success: true,
        message: "Server healthy",
    });
};
exports.healthCheck = healthCheck;
