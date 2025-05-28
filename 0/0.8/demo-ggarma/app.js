import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import userRoutes from './src/routes/userRoutes.js';

let app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoutes);


export default app;