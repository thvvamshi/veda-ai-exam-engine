"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractTextFromFile = void 0;
const axios_1 = __importDefault(require("axios"));
const pdf_parse_1 = __importDefault(require("pdf-parse"));
const mammoth_1 = __importDefault(require("mammoth"));
// service to extract text from uploaded files (PDFs and Word documents) for prompt generation
const extractTextFromFile = async (fileUrl) => {
    try {
        // validate that a file URL is provided before attempting extraction
        if (!fileUrl) {
            return "";
        }
        // fetch file as array buffer for processing
        const response = await axios_1.default.get(fileUrl, {
            responseType: "arraybuffer",
            timeout: 30000,
        });
        const fileBuffer = Buffer.from(response.data);
        // determine file type based on URL and apply appropriate extraction method
        const lowerUrl = fileUrl.toLowerCase();
        // PDF extraction - also covers Cloudinary raw uploads which are often used for PDFs
        if (lowerUrl.includes("/raw/upload/") || lowerUrl.includes(".pdf")) {
            const parsed = await (0, pdf_parse_1.default)(fileBuffer);
            return parsed.text?.trim()?.slice(0, 15000);
        }
        // Word document extraction (both .doc and .docx)
        if (lowerUrl.includes(".docx")) {
            const result = await mammoth_1.default.extractRawText({
                buffer: fileBuffer,
            });
            return result.value?.trim()?.slice(0, 15000);
        }
        // unsupported file type - return empty string to avoid breaking prompt generation
        return "";
    }
    catch (error) {
        console.error("File text extraction failed:", error);
        // return empty string on failure to avoid breaking the prompt generation
        return "";
    }
};
exports.extractTextFromFile = extractTextFromFile;
