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
const case_1 = __importDefault(require("../models/case"));
const getCases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield case_1.default.find({});
        return res.status(200).json(results);
    }
    catch (err) {
        return res.status(400).json(err);
    }
});
const postCases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCase = new case_1.default({
        name: req.body.name,
        birthdate: req.body.birthdate,
        date: req.body.date,
        risk: req.body.risk,
        sex: req.body.sex,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        class: req.body.class
    });
    console.log(req.body);
    newCase.save().then((data) => {
        return res.status(200).json(data);
    }).catch((err) => {
        return res.status(400).json(err);
    });
});
const updateCase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let caseId = req.params.id;
    case_1.default.updateOne({ "_id": caseId }, { $set: {
            name: req.body.name,
            birthdate: req.body.birthdate,
            date: req.body.date,
            risk: req.body.risk,
            sex: req.body.sex,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            class: req.body.class
        }
    }).then((data) => {
        if (data.nModified == 1) {
            res.status(201).send("Case Modified");
        }
        else {
            res.status(400).send("Case not modified");
        }
    });
});
exports.default = { getCases, postCases, updateCase };
