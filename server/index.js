import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter  from './routes/userRoutes.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/users', userRouter);

app.listen(PORT, () => console.log(`Server started on port  ${PORT}`));