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
app.use(express.json());
app.listen(3000 , () => {
    console.log('Server is running on port 3000')
});


app.use ('/api', userRouter);
app.use('/api/auth', authRouter);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message =err.message || 'INTERNAL SERVER ERROR';
    return res.status(statusCode).json({
        success:false,
        statusCode:statusCode,
        message,
    });
});