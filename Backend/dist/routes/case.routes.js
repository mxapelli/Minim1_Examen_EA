"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const case_controller_1 = __importDefault(require("../controllers/case.controller"));
const router = express_1.Router();
router.get("/", case_controller_1.default.getCases);
router.post("/", case_controller_1.default.postCases);
router.put("/:id", case_controller_1.default.updateCase);
exports.default = router;
