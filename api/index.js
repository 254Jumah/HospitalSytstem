import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/hospital.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected succesfully');
}).catch((err) => {
    console.log(err);
});


const app = express();
app.listen(3000 , () => {
    console.log('Server is running on port 3000')
});


app.use ('/api', userRouter);
app.use('/api/auth', authRouter);