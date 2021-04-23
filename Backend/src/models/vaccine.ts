import  {model, Schema, Document} from "mongoose";

export interface IVaccine extends Document {
    name: string;
    description: string;
    tecnology: string;
    date: string;
   
}

const vaccineSchema = new Schema({
    name: {type: String},
    description: {type: String},
    tecnology: {type: String},
    date: {type: String},
   
})

export default model<IVaccine>("Vaccine", vaccineSchema, "vaccine");
