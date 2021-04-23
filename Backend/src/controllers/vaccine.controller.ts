import Vaccine from "../models/vaccine";
import {Request, Response} from "express";


const getVaccines = async (req: Request, res: Response) => {
    try {
        const results = await Vaccine.find({});
        return res.status(200).json(results);
    }
    catch (err) {
        return res.status(400).json(err);
    }
}

const postVaccine = async (req: Request, res: Response) => {
    const newVaccine = new Vaccine( {
        name: req.body.name,
        description: req.body.description,
        tecnology: req.body.tecnology,
        date: req.body.date,
    })
    console.log(req.body);
    newVaccine.save().then((data) => {
        return res.status(200).json(data);
    }).catch((err) => {
        return res.status(400).json(err);
    })
}

const updateVaccine= async (req: Request, res: Response) => {
    let vaccineId = req.params.id;
    Vaccine.updateOne(
        { "_id" : vaccineId},
        { $set: {
            name: req.body.name,
            description: req.body.description,
            tecnology: req.body.tecnology,
            date: req.body.date,
            }
        }
    ).then((data) => {
        if (data.nModified == 1) {
            res.status(201).send("Case Modified");
        }
        else {
            res.status(400).send("Case not modified");
        }
    });
}

export default {getVaccines, postVaccine, updateVaccine};
