"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const caseSchema = new mongoose_1.Schema({
    name: { type: String },
    birthdate: { type: String },
    date: { type: String },
    risk: { type: String },
    sex: { type: String },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    class: { type: String }
});
exports.default = mongoose_1.model("Case", caseSchema, "cases");
