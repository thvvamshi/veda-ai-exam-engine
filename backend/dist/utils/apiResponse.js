"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const successResponse = (data = null, message = "Success") => {
    return {
        success: true,
        message,
        data,
    };
};
exports.successResponse = successResponse;
const errorResponse = (message = "Something went wrong", errors = undefined) => {
    return {
        success: false,
        message,
        errors,
    };
};
exports.errorResponse = errorResponse;
