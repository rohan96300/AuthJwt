import express from "express";
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();


const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', userRoutes);

app.get('/',(req, res) => {
    res.send('Api is running');
})

app.listen(port, () => console.log(`listening to port: ${port}`));