import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes';
import cors from 'cors';
import 'express-async-errors';

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if( err instanceof Error){
        return res.status(400).json({
            status: 400,
            message: err.message
        })
    }
    return res.status(500).json({
        status: 500,
        message: 'Internal server error'
    })
});

app.listen(port, () => console.log('Server Online listening on port: ' + port));