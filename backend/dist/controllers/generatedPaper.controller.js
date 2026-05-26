"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGeneratedPaper = void 0;
const GeneratedPaper_1 = require("../models/GeneratedPaper");
const apiResponse_1 = require("../utils/apiResponse");
const getGeneratedPaper = async (req, res) => {
    const { assignmentId } = req.params;
    const generatedPaper = await GeneratedPaper_1.GeneratedPaper.findOne({
        assignmentId,
    });
    if (!generatedPaper) {
        return res
            .status(404)
            .json((0, apiResponse_1.errorResponse)("Generated paper not found"));
    }
    return res.status(200).json((0, apiResponse_1.successResponse)(generatedPaper, "Generated paper fetched successfully"));
};
exports.getGeneratedPaper = getGeneratedPaper;
