"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const vaccineSchema = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
    tecnology: { type: String },
    date: { type: String },
});
exports.default = mongoose_1.model("Vaccine", vaccineSchema, "vaccine");
