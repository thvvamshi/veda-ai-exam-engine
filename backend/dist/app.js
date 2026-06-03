"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const health_routes_1 = __importDefault(require("./routes/health.routes"));
const error_middleware_1 = require("./middleware/error.middleware");
const assignment_routes_1 = __importDefault(require("./routes/assignment.routes"));
const generation_routes_1 = __importDefault(require("./routes/generation.routes"));
const generatedPaper_routes_1 = __importDefault(require("./routes/generatedPaper.routes"));
const upload_routes_1 = __importDefault(require("./routes/upload.routes"));
const pdf_routes_1 = __importDefault(require("./routes/pdf.routes"));
const app = (0, express_1.default)();
// CORS
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173",
        "https://veda-ai-exam-enginee.onrender.com",
    ],
    credentials: true,
}));
// BODY PARSER
app.use(express_1.default.json({
    limit: "10mb",
}));
app.use(express_1.default.urlencoded({
    extended: true,
    limit: "10mb",
}));
// COMPRESSION
app.use((0, compression_1.default)());
// SECURITY
app.use((0, helmet_1.default)({
    crossOriginResourcePolicy: false,
}));
// LOGGER
app.use((0, morgan_1.default)("dev"));
// ROUTES
app.use("/api/v1/health", health_routes_1.default);
app.use("/api/v1/assignments", assignment_routes_1.default);
app.use("/api/v1/assignments", generation_routes_1.default);
app.use("/api/v1/generated-papers", generatedPaper_routes_1.default);
app.use("/api/v1/uploads", upload_routes_1.default);
app.use("/api/v1/generated-papers", pdf_routes_1.default);
// ROOT
app.get("/", (_req, res) => {
    res.json({
        success: true,
        message: "Veda AI Backend API Running",
    });
});
// 404
app.use((_req, res) => {
    return res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
// ERROR
app.use(error_middleware_1.errorMiddleware);
exports.default = app;
