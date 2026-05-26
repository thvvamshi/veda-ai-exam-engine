"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractJson = void 0;
const extractJson = (text) => {
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start === -1 || end === -1) {
        throw new Error("Invalid AI JSON response");
    }
    return text.slice(start, end + 1);
};
exports.extractJson = extractJson;
