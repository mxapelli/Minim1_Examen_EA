"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vaccine_1 = __importDefault(require("../models/vaccine"));
const getVaccines = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield vaccine_1.default.find({});
        return res.status(200).json(results);
    }
    catch (err) {
        return res.status(400).json(err);
    }
});
const postVaccine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newVaccine = new vaccine_1.default({
        name: req.body.name,
        description: req.body.description,
        tecnology: req.body.tecnology,
        date: req.body.date
    });
    console.log(req.body);
    newVaccine.save().then((data) => {
        return res.status(200).json(data);
    }).catch((err) => {
        return res.status(400).json(err);
    });
});
const updateVaccine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let vaccineId = req.params.id;
    vaccine_1.default.updateOne({ "_id": vaccineId }, { $set: {
            name: req.body.name,
            description: req.body.description,
            tecnology: req.body.tecnology,
            date: req.body.date
        }
    }).then((data) => {
        if (data.nModified == 1) {
            res.status(201).send("Vaccine Modified");
        }
        else {
            res.status(400).send("Vaccine not modified");
        }
    });
});
exports.default = { getVaccines, postVaccine, updateVaccine };
