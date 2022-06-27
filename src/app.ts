import express from 'express';
import { enrichResponses } from './middlewares/responses';
import memberRouter from './routes/member.routes';
import relationRouter from './routes/relation.routes';

const app = express();

app.use(express.json());
app.use(enrichResponses);
app.use('/api/member', memberRouter);
app.use('/api/relation', relationRouter);

export default app;
