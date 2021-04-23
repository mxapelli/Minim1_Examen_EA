"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vaccine_controller_1 = __importDefault(require("../controllers/vaccine.controller"));
const router = express_1.Router();
router.get("/", vaccine_controller_1.default.getVaccines);
router.post("/", vaccine_controller_1.default.postVaccine);
router.put("/:id", vaccine_controller_1.default.updateVaccine);
exports.default = router;
