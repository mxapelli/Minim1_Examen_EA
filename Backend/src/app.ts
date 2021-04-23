import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from'body-parser';
import vaccineRoutes from "./routes/vaccine.routes";


const app = express();


app.set('port', process.env.PORT || 3000);


app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());

app.use("/vaccines", vaccineRoutes);

export default app;
