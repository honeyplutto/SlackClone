import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter  from './routes/userRoutes.js';
import workspaceRouter from './routes/workspaceRouter.js';
import channelRouter from './routes/channelRouters.js';
import imageRouter from './routes/imageRouter.js';
import morgan from 'morgan'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api/users', userRouter);
app.use('/api/workspace', workspaceRouter);
app.use('/api/channel', channelRouter);
app.use('/api/images', imageRouter)

app.listen(PORT, () => console.log(`Server started on port  ${PORT}`));